import React from "react";

const ContactForm = ({ data, onChange }) => {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.fields.map((field, index) =>
          field.type === "text" ||
          field.type === "email" ||
          field.type === "number" ||
          field.type === "tel" ? (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.label}
              value={field.value}
              onChange={onChange}
              className="w-full p-3"
              required={field.required}
            />
          ) : field.type === "select" ? (
            <select
              className="w-full h-[50px] px-2"
              name={field.name}
              onChange={onChange}
              required={field.required}
            >
              <option value="">{field.label}</option>
              {field.options.map((option, index) => (
                <option
                  selected={field.value === option.value}
                  value={option.value}
                >
                  {" "}
                  {option.label}{" "}
                </option>
              ))}
            </select>
          ) : field.type === "radio" ? (
            <div className="flex gap-4 items-center">
              <label className="text-sm">{field.label}</label>
              <div className="flex gap-4">
                {field.options.map((option, index) => (
                  <label className="flex gap-2 items-center cursor-pointer">
                    <input
                      type="radio"
                      name={field.name}
                      value={option.value}
                      checked={field.value === option.value}
                      onChange={onChange}
                      required={field.required}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ) : field.type === "checkbox" ? (
            <div className="flex gap-4 items-center">
              <label className="text-sm">{field.label}</label>
              <div className="flex gap-4 flex-wrap">
                {field.options.map((option, index) => (
                  <label className="text-sm flex gap-2 items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name={field.name}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                      onChange={onChange}
                      required={field.required && field.value.length === 0}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ) : field.type === "textarea" ? (
            <textarea
              name={field.name}
              defaultValue={field.value}
              rows={3}
              onChange={onChange}
              placeholder={field.placeholder}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default ContactForm;
