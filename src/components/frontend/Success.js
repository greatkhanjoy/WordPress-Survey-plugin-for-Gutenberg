import React, { useState, useEffect } from "react";

const Success = ({ data, action }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = () => {
    setLoading(true);
    const formData = {
      survey_id: data.survey_id,
      survey_name: data.survey_name,
      sender_email: data.sender_email,
      email_subject: data.email_subject,
      email_body: data.email_body,
      fields: data.fields,
      questions: data.questions,
      receiver_email: data.fields.find((field) => field.name === "email").value,
    };
    fetch("/wp-json/greatkhanjoy/v1/survey", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": data.nonce,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setFormSubmitted(true);
        action();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col gap-3 p-4 min-h-[400px] justify-center mx-auto">
      {formSubmitted ? (
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-3xl leading-normal font-normal">
            Survey complete!
          </h1>
          <p className="text-lg">Thank you for your time. </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-3xl leading-normal font-normal">
            Almost there! Review your data and submit.
          </h1>
          <button
            type="button"
            onClick={submitHandler}
            className="inline px-6 py-2 text-lg border border-green-600 text-green-600 bg-transparent"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Success;
