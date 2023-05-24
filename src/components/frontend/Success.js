import React, { useState } from "react";

const Success = ({ data }) => {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState(
    "Survey complete! Thank you for your time."
  );
  const formHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setMessage("Form submitted");
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-3 p-4 min-h-[400px] justify-center mx-auto">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-3xl leading-normal font-normal">{message}</h1>
        {!submitted && (
          <button
            type="button"
            onClick={formHandler}
            className="inline px-6 py-2 text-lg border border-green-600 text-green-600 bg-transparent"
          >
            SUBMIT SURVEY
          </button>
        )}
      </div>
    </div>
  );
};

export default Success;
