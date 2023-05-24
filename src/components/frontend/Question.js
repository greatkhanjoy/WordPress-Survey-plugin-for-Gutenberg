import React, { useState, useEffect } from "react";

const Question = ({ data, onChange }) => {
  const [multipleChoice, setMultipleChoice] = useState(data.multiple);

  const [newAnswer, setNewAnswer] = useState(data.answer || []);

  const answerHandler = (e) => {
    if (data.type == "checkbox" && multipleChoice === true) {
      // remove or add answer
      if (newAnswer.includes(e.target.value)) {
        let answer = [...newAnswer];
        answer = answer.filter((item) => item !== e.target.value);
        setNewAnswer(answer);
      } else {
        setNewAnswer([...newAnswer, e.target.value]);
      }
    } else {
      setNewAnswer([e.target.value]);
    }
  };

  useEffect(() => {
    onChange(newAnswer);
  }, [newAnswer]);
  return (
    <div className="flex flex-col gap-3 p-4">
      <h3 className="text-xl leading-normal font-semibold">
        {data.question} {data.type}
      </h3>
      <div className="flex flex-col gap-4">
        {data.answers.map((answer, index) => {
          return data.type == "radio" ? (
            <label key={index} className="flex gap-2 items-center">
              <input
                type="radio"
                name={data.question}
                value={answer}
                onChange={answerHandler}
                checked={newAnswer.includes(answer)}
                required
              />
              <span>{answer}</span>
            </label>
          ) : data.type == "checkbox" ? (
            <label key={index} className="flex gap-2 items-center">
              <input
                type="checkbox"
                name={`${data.question}_${index}`}
                value={answer}
                onChange={answerHandler}
                checked={newAnswer.includes(answer)}
                required={newAnswer.length === 0}
              />
              <span>{answer}</span>
            </label>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Question;
