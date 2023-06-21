<?php

/*
Plugin Name: Simple Survey for Gutenberg
Plugin URI: https://greatkhanjoy.me/
Description: Multistep or wizard type survey for WordPress gutenberg.
Version: 1.0
Author: Imran Hosein khan Joy (Greatkhanjoy)
Author URI: https://greatkhanjoy.me/
License: GPLv2 or later
Text Domain: greatkhanjoy-survey
Domain Path: /languages/
*/

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}



class GreatkhanjoyServey
{
    public function __construct()
    {
        add_action('init', array($this, 'activate'));
        add_filter('rest_prepare_user', [$this, 'custom_rest_user_email'], 10, 2);
        register_activation_hook(__FILE__, [$this, 'on_activate']);
        register_uninstall_hook(__FILE__, [$this, 'uninstall']);

        add_action('rest_api_init', array($this, 'register_survey_rest_route'));
    }

    // Load Assets
    public function load_assets()
    {
        wp_register_script('greatkhanjoy-survey-editor-js', plugins_url('build/index.js', __FILE__), array('wp-blocks', 'wp-i18n', 'wp-editor', 'wp-element', 'wp-components'));
        wp_register_script('greatkhanjoy-survey-frontend-js', plugins_url('build/frontend.js', __FILE__), array('wp-i18n', 'wp-element'));
        wp_register_style('greatkhanjoy-survey-editor-css', plugins_url('build/index.css', __FILE__));
    }

    // Register Survey Block
    public function register_survey_block()
    {
        register_block_type('greatkhanjoy/survey', array(
            'render_callback' => array($this, 'render_survey_block'),
            'editor_script' => 'greatkhanjoy-survey-editor-js',
            'editor_style' => 'greatkhanjoy-survey-editor-css',
        ));

        wp_localize_script('greatkhanjoy-survey-editor-js', 'greatkhanjoy_survey', array(
            'api_url' => esc_url_raw(rest_url()),
            'nonce' => wp_create_nonce('wp_rest')
        ));
    }

    // Render Survey Block
    function render_survey_block($attr)
    {
        if (!is_admin()) {
            wp_enqueue_script('greatkhanjoy-survey-frontend-js');
            wp_enqueue_style('greatkhanjoy-survey-editor-css');
            $attr['nonce'] = wp_create_nonce('wp_rest');
        }
        ob_start(); ?>

        <div class="greatkhanjoy-survey-update-me w-full">
            <pre style="display: none;"><?php echo wp_json_encode($attr) ?></pre>
        </div>

<?php return ob_get_clean();
    }


    function custom_rest_user_email($response, $user)
    {
        $response->data['email'] = $user->user_email;
        return $response;
    }


    // Activate the plugin
    public function activate()
    {
        //Load Assets
        $this->load_assets();
        $this->register_survey_block();
    }

    //Create Table
    public function create_table()
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'gss_surveys';
        $charset_collate = $wpdb->get_charset_collate();
        $sql = "CREATE TABLE IF NOT EXISTS $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            survey_id int(11) NOT NULL,
            survey_name varchar(255) NOT NULL,
            survey_email varchar(255) NOT NULL,
            email_subject varchar(255) NOT NULL,
            email_body text NOT NULL,
            questions text NOT NULL,
            fields text NOT NULL,
            PRIMARY KEY  (id)
        ) $charset_collate;";
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }

    //remove table
    public function remove_table()
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'gss_surveys';
        $wpdb->query("DROP TABLE IF EXISTS $table_name");
    }

    // Register Survey Rest Route
    public function register_survey_rest_route()
    {
        register_rest_route('greatkhanjoy/v1', '/survey', array(
            'methods' => 'POST',
            'callback' => array($this, 'create_survey'),
            'permission_callback' => function () {
                return current_user_can('edit_others_posts');
            }
        ));

        register_rest_route('greatkhanjoy/v1', '/survey', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_srveys'),
            'permission_callback' => function () {
                return current_user_can('edit_others_posts');
            }
        ));

        register_rest_route('greatkhanjoy/v1', '/survey/(?P<id>\d+)', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_survey'),
            'permission_callback' => function () {
                return current_user_can('manage_options');
            }
        ));

        register_rest_route('greatkhanjoy/v1', '/survey/(?P<id>\d+)', array(
            'methods' => 'PUT',
            'callback' => array($this, 'update_survey'),
            'permission_callback' => function () {
                return current_user_can('manage_options');
            }
        ));

        register_rest_route('greatkhanjoy/v1', '/survey/(?P<id>\d+)', array(
            'methods' => 'DELETE',
            'callback' => array($this, 'delete_survey'),
            'permission_callback' => function () {
                return current_user_can('manage_options');
            }
        ));
    }

    // Create Survey
    public function create_survey($request)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'gss_surveys';
        $data = $request->get_params();
        $insert = $wpdb->insert(
            $table_name,
            [
                'survey_id' => sanitize_text_field($data['survey_id']),
                'survey_name' => sanitize_text_field($data['survey_name']),
                'survey_email' => sanitize_text_field($data['sender_email']),
                'email_subject' => sanitize_text_field($data['email_subject']),
                'email_body' => wp_kses_post(json_encode($data['email_body'])),
                'questions' => wp_kses_post(json_encode($data['questions'])),
                'fields' => wp_kses_post(json_encode($data['fields'])),
            ]
        );

        if ($insert) {
            $this->send_email($data['sender_email'], $data['receiver_email'], $data['email_subject'], $data['email_body']);
            $response = new WP_REST_Response(array('message' => 'Survey Submitted Successfully'));
            $response->set_status(200);
            return $response;
        } else {
            $response = new WP_REST_Response(array('message' => $wpdb->last_error, 'data' => $data));
            $response->set_status(400);
            return $response;
        }
    }

    // Get Survey
    public function get_survey($request)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'gss_surveys';
        $id = $request->get_param('id');
        $result = $wpdb->get_results("SELECT * FROM $table_name WHERE id = $id");
        return $result;
    }

    // Get Surveys
    public function get_srveys()
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'gss_surveys';
        $result = $wpdb->get_results("SELECT * FROM $table_name");
        return $result;
    }


    //Send Email
    public function send_email($from, $to, $subject, $body)
    {

        $headers = 'Content-type: text/html;charset=utf-8' . "\r\n";
        $headers .= 'From: ' . get_bloginfo('name') . ' <' . $from . '>' . "\r\n";
        $send = wp_mail($to, $subject, $body, $headers);
        if ($send) {
            $response = new WP_REST_Response(array('message' => 'Email Sent Successfully'));
            $response->set_status(200);
            return $response;
        } else {
            $response = new WP_REST_Response(array('message' => 'Email Sent Failed'));
            $response->set_status(400);
            return $response;
        }
    }

    // On Activate
    public function on_activate()
    {

        flush_rewrite_rules();
        $this->create_table();
    }


    // Deactivate the plugin
    public function deactivate()
    {
        flush_rewrite_rules();
    }

    // Uninstall the plugin
    public function uninstall()
    {
        $this->remove_table();
        flush_rewrite_rules();
    }
}


// Initialize the plugin
$greatkhanjoyServey = new GreatkhanjoyServey();
