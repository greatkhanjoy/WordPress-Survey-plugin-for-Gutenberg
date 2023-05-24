import "./index.scss";
import { useState } from "react";
import { Icon } from "@wordpress/components";

wp.blocks.registerBlockType("greatkhanjoy/survey", {
  title: "Survey",
  icon: "list-view",
  description: "A simple survey block",
  category: "common",
  attributes: {
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
  },
  example: {},
  edit: EditComponent,
  save: function (props) {
    return null;
  },
});

function EditComponent(props) {
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

  return (
    <>
      <div className="question_blocks flex flex-col gap-4">
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
                  className="h-[45px] text-[18px] p-2"
                >
                  <option>Change Question type</option>
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
              className="h-[45px] text-[18px] p-2"
            >
              <option>Select Question type</option>
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
