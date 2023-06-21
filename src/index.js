import "./index.scss";
import { useState, useEffect } from "react";
import { select } from "@wordpress/data";
import { Icon } from "@wordpress/components";
import Modal from "./components/Modal";

wp.blocks.registerBlockType("greatkhanjoy/survey", {
  title: "Survey",
  icon: "list-view",
  description: "A simple survey block",
  category: "common",
  attributes: {
    survey_id: {
      type: "number",
      default: 0, //post id
    },
    survey_name: {
      type: "string",
      default: "",
    },
    sender_email: {
      type: "string",
      default: "",
    },
    email_subject: {
      type: "string",
      default: "",
    },
    email_body: {
      type: "string",
      default: "",
    },
    questions: {
      type: "array",
      default: [
        {
          question: "Question One",
          type: "radio",
          multiple: false,
          answers: ["answer1", "answer2", "answer3"],
        },
      ],
    },
    fields: {
      type: "array",
      default: [
        {
          name: "name",
          label: "Name",
          type: "text",
          required: true,
          value: "",
          placeholder: "Enter your name",
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
          value: "",
          placeholder: "Enter your email",
        },
      ],
    },
  },
  example: {},
  edit: EditComponent,
  save: function (props) {
    return null;
  },
});

(function () {
  let locked = false;
  wp.data.subscribe(function () {
    const blocks = wp.data.select("core/block-editor").getBlocks();
    const surveyBlocks = blocks.filter((block) => {
      return (
        block.name === "greatkhanjoy/survey" &&
        (block.attributes.survey_name === "" ||
          block.attributes.sender_email === "" ||
          block.attributes.email_subject === "" ||
          block.attributes.email_body === "")
      );
    });

    if (surveyBlocks.length > 0 && !locked) {
      locked = true;
      wp.data.dispatch("core/editor").lockPostSaving("settingEmpty");
    }

    if (!surveyBlocks.length > 0 && locked) {
      locked = false;
      wp.data.dispatch("core/editor").unlockPostSaving("settingEmpty");
    }
  });
})();

(function () {
  let locked = false;
  wp.data.subscribe(function () {
    const blocks = wp.data.select("core/block-editor").getBlocks();
    const questionType = blocks.filter((block) => {
      if (block.name === "greatkhanjoy/survey" && block.attributes.questions) {
        return block.attributes.questions.some(
          (question) => !question.type || question.type === ""
        );
      }
      return false;
    });

    if (questionType.length && !locked) {
      locked = true;
      wp.data.dispatch("core/editor").lockPostSaving("questionTypeBlank");
    }

    if (!questionType.length && locked) {
      locked = false;
      wp.data.dispatch("core/editor").unlockPostSaving("questionTypeBlank");
    }
  });
})();

(function () {
  let locked = false;

  wp.data.subscribe(function () {
    const blocks = wp.data.select("core/block-editor").getBlocks();
    const questionTitle = blocks.filter((block) => {
      if (block.name === "greatkhanjoy/survey" && block.attributes.questions) {
        return block.attributes.questions.some(
          (question) => !question.question || question.question === ""
        );
      }
      return false;
    });

    if (questionTitle.length && !locked) {
      locked = true;
      wp.data.dispatch("core/editor").lockPostSaving("questionTitleBlank");
    }

    if (!questionTitle.length && locked) {
      locked = false;
      wp.data.dispatch("core/editor").unlockPostSaving("questionTitleBlank");
    }
  });
})();

(function () {
  let locked = false;

  wp.data.subscribe(function () {
    const blocks = wp.data.select("core/block-editor").getBlocks();
    const questionAnswerNotEmpty = blocks.filter((block) => {
      if (block.name === "greatkhanjoy/survey" && block.attributes.questions) {
        const question = block.attributes.questions.filter((question) => {
          return question.answers.some(
            (answer) => answer === "" || answer === undefined
          );
        });
        return question.length;
      }
      return false;
    });

    if (questionAnswerNotEmpty.length && !locked) {
      locked = true;
      wp.data.dispatch("core/editor").lockPostSaving("optionsBlank");
    }

    if (!questionAnswerNotEmpty.length && locked) {
      locked = false;
      wp.data.dispatch("core/editor").unlockPostSaving("optionsBlank");
    }
  });
})();

function EditComponent(props) {
  var postId = wp.data.select("core/editor").getCurrentPostId();
  props.setAttributes({ survey_id: postId });
  const [questioType, setQuestionType] = useState("");
  const addQuestion = (e) => {
    e.preventDefault();
    if (questioType === "") return alert("Please select a question type");
    const newQuestion = {
      question: "Example Question",
      type: questioType,
      answers: [""],
    };

    // Update the state by appending the new question
    props.setAttributes({
      questions: [...props.attributes.questions, newQuestion],
    });
  };

  const addField = (fields) => {
    const newField = {
      name: fields.name,
      label: fields.label,
      type: fields.type,
      placeholder: fields.placeholder,
      value: fields.value,
      required: fields.required,
    };

    if (
      fields.type === "select" ||
      fields.type === "radio" ||
      fields.type === "checkbox"
    ) {
      newField.options = fields.options;
    }

    props.setAttributes({
      fields: [...props.attributes.fields, newField],
    });
  };

  const updateField = (field) => {
    setEdit(false);
    setEditField(null);
    setEditIndex(null);
    const fields = [...props.attributes.fields];
    fields[editIndex] = field;
    props.setAttributes({ fields: fields });
  };

  const removeField = (index) => {
    const fields = [...props.attributes.fields];
    fields.splice(index, 1);
    props.setAttributes({ fields: fields });
  };

  const updateQuestion = (e, index) => {
    const questions = [...props.attributes.questions];
    questions[index].question = e.target.value;
    props.setAttributes({ questions: questions });
  };

  const changeQuestionType = (e, index) => {
    const questions = [...props.attributes.questions];
    questions[index].type = e.target.value;
    props.setAttributes({ questions: questions });
  };

  const changeSelectionMode = (index) => {
    const questions = [...props.attributes.questions];
    questions[index].multiple = !questions[index].multiple;
    props.setAttributes({ questions: questions });
  };

  const newAnswer = (index) => {
    const questions = [...props.attributes.questions];
    questions[index].answers.push("");
    props.setAttributes({ questions: questions });
  };

  const changeAnswer = (e, answerIndex, questionIndex) => {
    const questions = [...props.attributes.questions];
    questions[questionIndex].answers[answerIndex] = e.target.value;
    props.setAttributes({ questions: questions });
  };

  const deleteAnswer = (answerIndex, questionIndex) => {
    const questions = [...props.attributes.questions];
    questions[questionIndex].answers.splice(answerIndex, 1);
    props.setAttributes({ questions: questions });
  };

  const deleteQuestion = (index) => {
    const questions = [...props.attributes.questions];
    questions.splice(index, 1);
    props.setAttributes({ questions: questions });
  };

  //modal handler
  const [edit, setEdit] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setEdit(false);
    setShowModal((prev) => !prev);
  };

  const [editIndex, setEditIndex] = useState(null);
  const [editField, setEditField] = useState(null);
  const openEditModal = (field, index) => {
    setEdit(true);
    setEditIndex(index);
    setEditField(field);
    setShowModal((prev) => !prev);
  };
  const getCurrentUserEmail = () => {
    fetch(`${window.greatkhanjoy_survey.api_url}wp/v2/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": window.greatkhanjoy_survey.nonce,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const userEmail = data.email;
        if (props.attributes.sender_email === "") {
          props.setAttributes({ sender_email: userEmail });
        }
      })
      .catch((error) => {
        console.error("Error retrieving current user email:", error);
      });
  };

  useEffect(() => {
    getCurrentUserEmail();
  }, []);

  return (
    <>
      <div className="question_blocks flex flex-col gap-4">
        {/* Survey Settings  */}
        <div className="bg-gray-200 p-4 mb-4 rounded-md flex flex-col space-y-6">
          <h4 className="text-[24px] font-semibold leading-normal text-center">
            Survey Settings
          </h4>
          <div className="grid grid-cols-1 gap-3">
            <div className="w-full">
              <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-lg">Survey Name</span>
                <input
                  type="text"
                  name="survey_name"
                  value={props.attributes.survey_name}
                  onChange={(e) =>
                    props.setAttributes({ survey_name: e.target.value })
                  }
                  placeholder="Enter your survey name"
                  required
                  className="col-span-3 w-full"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-lg ">Sender Email</span>
                <input
                  type="email"
                  name="sender_email"
                  value={props.attributes.sender_email}
                  onChange={(e) =>
                    props.setAttributes({ sender_email: e.target.value })
                  }
                  placeholder="Enter your email"
                  required
                  className="col-span-3 w-full"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-lg ">Email Subject</span>
                <input
                  type="text"
                  name="email_subject"
                  value={props.attributes.email_subject}
                  onChange={(e) =>
                    props.setAttributes({ email_subject: e.target.value })
                  }
                  placeholder="Enter your email subject"
                  required
                  className="col-span-3 w-full"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="grid grid-cols-4 items-center gap-2">
                <span className="text-lg ">Email Body</span>
                <textarea
                  className="col-span-3 w-full"
                  rows="5"
                  name="email_body"
                  defaultValue={props.attributes.email_body}
                  placeholder="Enter your email body"
                  onChange={(e) =>
                    props.setAttributes({ email_body: e.target.value })
                  }
                  required
                />
              </label>
            </div>
          </div>
        </div>
        {/* End Survey Settings  */}

        {/* Survey Fields  */}
        <div className="bg-gray-200 p-4 mb-4 rounded-md flex flex-col space-y-6">
          <h4 className="text-[24px] font-semibold leading-normal text-center">
            Contact Fields
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {props.attributes.fields.map((field, index) => (
              <div className="grid grid-cols-3 w-full">
                <label className="col-span-2 grid grid-cols-4 items-center gap-2">
                  <span className="text-lg ">{field.label}</span>
                  {field.type === "text" ||
                  field.type === "email" ||
                  field.type === "number" ||
                  field.type === "tel" ? (
                    <input
                      type={field.type}
                      name={field.name}
                      value={field.value}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="col-span-3 w-full"
                    />
                  ) : null}
                  {/* Textarea  */}
                  {field.type === "textarea" && (
                    <textarea
                      name={field.name}
                      defaultValue={field.value}
                      required={field.required}
                      className="col-span-3 w-full"
                    />
                  )}

                  {/* Select */}
                  {field.type === "select" && (
                    <select
                      name={field.name}
                      required={field.required}
                      className="col-span-3 text-[18px] p-2 w-full"
                    >
                      <option value="">Select an option</option>
                      {field.options.map((option) => (
                        <option
                          selected={option.value === field.value}
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}

                  {/* Radio */}
                  {field.type === "radio" && (
                    <div className="col-span-3 flex gap-2 w-full">
                      {field.options.map((option) => (
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name={field.name}
                            checked={option.value === field.value}
                            required={field.required}
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {/* Checkbox */}
                  {field.type === "checkbox" && (
                    <div className="col-span-3 flex flex-wrap gap-2 w-full">
                      {field.options.map((option) => (
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name={field.name}
                            checked={field.value.includes(option.value)}
                            required={field.required}
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </label>
                {field.name !== "email" && field.name !== "name" && (
                  <div className="flex justify-around gap-1 items-center">
                    <button
                      type="button"
                      onClick={() => openEditModal(field, index)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => removeField(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="w-full">
            <button
              type="button"
              onClick={openModal}
              className="border border-black border-dashed w-full py-2 px-6"
            >
              Add New Field
            </button>
          </div>

          {/* Modal  */}
          {showModal && (
            <Modal
              toggle={openModal}
              action={addField}
              editAction={updateField}
              editField={editField}
              edit={edit}
            />
          )}

          {/* End Modal  */}
        </div>
        {/* End Survey Fields  */}

        {/* Question section  */}
        {props.attributes.questions.map((question, index) => (
          <div key={index} className="bg-gray-200 p-4">
            <input
              type="text"
              value={question.question}
              onChange={(e) => updateQuestion(e, index)}
              className="w-full mb-3 text-lg px-3 py-4 border border-blue-300"
            />
            <div className="flex flex-col gap-3">
              {question.answers &&
                question.answers.map((answer, answerIndex) => (
                  <div className="flex justify-between gap-4 items-center">
                    <input
                      key={answerIndex}
                      type="text"
                      value={answer}
                      onChange={(e) => changeAnswer(e, answerIndex, index)}
                      className="w-full"
                    />
                    <Icon
                      icon="trash"
                      className="text-red-500 cursor-pointer"
                      onClick={() => deleteAnswer(answerIndex, index)}
                    />
                  </div>
                ))}
              <div className="flex justify-between gap-4 items-center">
                <select
                  onChange={(e) => changeQuestionType(e, index)}
                  className=" text-[18px] p-2"
                >
                  <option value="">Change Question type</option>
                  <option selected={question.type == "radio"} value="radio">
                    Radio
                  </option>
                  <option
                    selected={question.type == "checkbox"}
                    value="checkbox"
                  >
                    Checkbox
                  </option>
                  <option selected={question.type == "image"} value="image">
                    Image
                  </option>
                  <option selected={question.type == "block"} value="block">
                    Block
                  </option>
                </select>
                {question.type === "checkbox" && (
                  <label className="flex gap-2 items-center">
                    <span>Allow Multiple Select?</span>
                    <input
                      type="checkbox"
                      onChange={() => changeSelectionMode(index)}
                      checked={question.multiple}
                    />
                  </label>
                )}
                <button
                  className="bg-blue-500 px-6 py-2 text-white flex items-center gap-2"
                  onClick={() => newAnswer(index)}
                >
                  <Icon icon="plus-alt" className="text-white" />
                  <span>Add Answer</span>
                </button>
                <button
                  onClick={() => deleteQuestion(index)}
                  className="flex gap-2 items-center bg-red-500 px-6 py-2 text-white"
                >
                  <Icon icon="trash" className="text-white" />
                  <span>Delete Question</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-blue-300">
          <form onSubmit={addQuestion} className="flex gap-4 p-3 items-center">
            <select
              required
              onChange={(e) => setQuestionType(e.target.value)}
              className="text-[18px] p-2"
            >
              <option value="">Select Question type</option>
              <option value="radio">Radio</option>
              <option value="checkbox">Checkbox</option>
              <option value="image">Image</option>
              <option value="block">Block</option>
            </select>
            <button
              type="submit"
              className="text-white font-semibold bg-green-500 px-6 py-2"
            >
              Add Question
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
