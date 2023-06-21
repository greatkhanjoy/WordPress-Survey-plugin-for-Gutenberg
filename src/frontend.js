import { useState, useEffect } from "react";
import ContactForm from "./components/frontend/ContactForm";
import "./index.scss";
import Question from "./components/frontend/Question";
import Success from "./components/frontend/Success";

document.addEventListener("DOMContentLoaded", function () {
  const surveyDiv = document.querySelectorAll(".greatkhanjoy-survey-update-me");
  surveyDiv.forEach(function (div) {
    const data = JSON.parse(div.querySelector("pre").innerHTML);
    ReactDOM.render(<Survey data={data} />, div);
    div.classList.remove("greatkhanjoy-survey-update-me");
  });
});

const Survey = ({ data }) => {
  const [steps, setSteps] = useState(1);
  const [progress, setProgress] = useState(0);
  const [totalSteps, setTotalSteps] = useState(
    Number(data.questions.length) + 2
  );

  const [formData, setFormData] = useState({
    nonce: data.nonce,
    survey_id: data.survey_id,
    survey_name: data.survey_name,
    sender_email: data.sender_email,
    email_subject: data.email_subject,
    email_body: data.email_body,
    fields: data.fields,
    questions: data.questions,
  });

  const [disableNav, setDisableNav] = useState(false);
  const disableNavHandler = () => {
    setDisableNav(true);
  };

  const updateAnswer = (e, index) => {
    const newQuestions = [...formData.questions];
    newQuestions[index].answer = e;
    setFormData({
      ...formData,
      questions: newQuestions,
    });
  };

  const updatePersonalInfo = (e) => {
    const newFields = [...formData.fields];
    newFields.map((field) => {
      if (field.type === "checkbox" && field.name === e.target.name) {
        field.value.includes(e.target.value)
          ? field.value.splice(field.value.indexOf(e.target.value), 1)
          : field.value.push(e.target.value);
      } else if (field.name === e.target.name) {
        field.value = e.target.value;
      }
    });
    setFormData({
      ...formData,
      fields: newFields,
    });
  };
  const formHandler = (e) => {
    e.preventDefault();
    setSteps(steps + 1);
  };

  useEffect(() => {
    setProgress(Math.round((steps / totalSteps) * 100));
  }, [steps]);

  return (
    <div className="survey-frontend bg-gray-100 border border-gray-200 w-full">
      <form onSubmit={formHandler}>
        <div className="bg-gray-200 mx-auto p-5 w-full">
          <h2 className="text-center text-xl leading-normal font-medium">
            {formData.survey_name}
          </h2>

          <div class="w-full bg-white rounded-full dark:bg-gray-700">
            <div
              class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full flex justify-center"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
        </div>
        <div className="py-5">
          {steps === 1 && (
            <ContactForm data={formData} onChange={updatePersonalInfo} />
          )}

          {formData.questions.map((question, index) => {
            return (
              steps === index + 2 && (
                <Question
                  data={question}
                  onChange={(e) => updateAnswer(e, index)}
                />
              )
            );
          })}

          {steps === totalSteps && (
            <Success data={formData} action={disableNavHandler} />
          )}
        </div>
        <div className="flex justify-center gap-2 p-5 bg-gray-200">
          <button
            onClick={steps <= 1 ? null : () => setSteps(steps - 1)}
            type="button"
            disabled={steps <= 1 || disableNav}
            className={`bg-gray-300  px-6 py-2 ${
              steps <= 1 && "cursor-not-allowed opacity-50 :hover:bg-gray-300"
            }`}
          >
            BACKWARD
          </button>
          <button
            disabled={steps == totalSteps}
            type="submit"
            className={`bg-black text-white px-6 py-2 ${
              steps === totalSteps &&
              "cursor-not-allowed opacity-50 :hover:bg-black"
            }`}
          >
            FORWARD
          </button>
        </div>
      </form>
    </div>
  );
};
