<?php

/*
Plugin Name: Simple Survey for Gutenberg
Plugin URI: https://greatkhanjoy.me/
Description: Multistep or wizard type survey for WordPress gutenberg.
Version: 1.0
Author: Imran Hosein khan Joy (Greatkhanjoy)
Author URI: https://greatkhanjoy.me/
License: GPLv2 or later
Text Domain: greatkhanjoy-servey
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
            'editor_style' => 'greatkhanjoy-survey-editor-css'
        ));
    }

    // Render Survey Block
    function render_survey_block($attr)
    {
        if (!is_admin()) {
            wp_enqueue_script('greatkhanjoy-survey-frontend-js');
            wp_enqueue_style('greatkhanjoy-survey-editor-css');
        }
        ob_start(); ?>

        <div class="greatkhanjoy-survey-update-me w-full">
            <pre style="display: none;"><?php echo wp_json_encode($attr) ?></pre>
        </div>

<?php return ob_get_clean();
    }

    // Activate the plugin
    public function activate()
    {
        //Load Assets
        $this->load_assets();
        $this->register_survey_block();
    }

    // Deactivate the plugin
    public function deactivate()
    {
        flush_rewrite_rules();
    }
}


// Initialize the plugin
$greatkhanjoyServey = new GreatkhanjoyServey();
