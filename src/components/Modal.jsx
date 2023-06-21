import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ toggle, action, editAction, editField, edit }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [label, setLabel] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([{ label: "", value: "" }]); // [{label: '', value: ''}
  const [required, setRequired] = useState(false);

  const changeOptionLabel = (e, index) => {
    const newOptions = [...options];
    newOptions[index].label = e.target.value;
    setOptions(newOptions);
  };

  const changeOptionValue = (e, index) => {
    const newOptions = [...options];
    newOptions[index].value = e.target.value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, { label: "", value: "" }]);
  };

  const removeOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const resetForm = () => {
    setName("");
    setType("");
    setLabel("");
    setPlaceholder("");
    setValue("");
    setRequired(false);
    setOptions([{ label: "", value: "" }]);
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (name === "" || type === "" || label === "")
      return alert("Please fill all the Fields");

    if (type === "select" || type === "radio" || type === "checkbox") {
      if (
        options.some((option) => option.label === "" || option.value === "")
      ) {
        return alert("Please fill all the Fields");
      }
    }

    const newField = {
      name,
      label,
      type,
      required,
      value,
      placeholder,
    };

    if (type === "checkbox" && value === "") {
      newField.value = [];
    }

    if (type === "select" || type === "radio" || type === "checkbox") {
      newField.options = options;
    }
    if (edit) {
      editAction(newField);
      resetForm();
      toggle();
      return;
    } else {
      action(newField);
      toggle();
      resetForm();
      console.log(newField);
    }
  };

  useEffect(() => {
    if (edit) {
      setName(editField.name);
      setType(editField.type);
      setLabel(editField.label);
      setPlaceholder(editField.placeholder);
      setValue(editField.value);
      setRequired(editField.required);
      if (editField.options) {
        setOptions(editField.options);
      }
    }
  }, [edit]);

  return (
    <div
      className="overflow-auto fixed inset-0 flex items-center justify-center z-40"
      id="modal"
    >
      <div className="bg-white w-[450px] p-6 rounded-lg z-50">
        <h2 className="text-[28px] text-center leading-none">
          {edit ? "Update Field" : "Add New Field"}
        </h2>
        <form onSubmit={formHandler} className="flex flex-col gap-2">
          <div className="items-center grid grid-cols-3">
            <label htmlFor="name">Type:</label>
            <select
              className="col-span-2 border border-gray-300 rounded-md p-2 w-full"
              name="type"
              id="type"
              defaultValue={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="">Select Field Type</option>
              <option selected={type === "text"} value="text">
                Text
              </option>
              <option selected={type === "number"} value="number">
                Number
              </option>
              <option selected={type === "email"} value="email">
                Email
              </option>
              <option selected={type === "tel"} value="tel">
                Telephone
              </option>
              <option selected={type === "textarea"} value="textarea">
                Textarea
              </option>
              <option selected={type === "select"} value="select">
                Select
              </option>
              <option selected={type === "checkbox"} value="checkbox">
                Checkbox
              </option>
              <option selected={type === "radio"} value="radio">
                Radio
              </option>
            </select>
          </div>
          <div className="items-center grid grid-cols-3">
            <label htmlFor="name">ID:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
              className="col-span-2 border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="items-center grid grid-cols-3">
            <label htmlFor="label">Label:</label>
            <input
              type="text"
              name="label"
              id="label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="Field Label"
              className="col-span-2 border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="items-center grid grid-cols-3">
            <label htmlFor="placeholder">Placeholder:</label>
            <input
              type="text"
              name="placeholder"
              id="placeholder"
              value={placeholder}
              onChange={(e) => setPlaceholder(e.target.value)}
              placeholder="Field Placeholder Text"
              className="col-span-2 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="items-center grid grid-cols-3">
            <label htmlFor="value">Default Value:</label>
            <input
              type="text"
              name="value"
              id="value"
              value={value}
              onChange={(e) =>
                setValue(
                  type === "checkbox" ? [e.target.value] : e.target.value
                )
              }
              placeholder="Field Default Value"
              className="col-span-2 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="grid grid-cols-3 items-center">
            <label htmlFor="required">Required:</label>
            <input
              type="checkbox"
              name="required"
              checked={required}
              onChange={() => setRequired(!required)}
              id="required"
              className="col-span-2"
            />
          </div>
          {type === "select" ||
          type === "radio" ||
          type === "checkbox" ||
          type === "checkbox" ? (
            <div className="flex flex-col gap-2">
              {options.map((option, index) => (
                <div className="grid grid-cols-5 gap-1 w-full items-center">
                  <div className="col-span-2">
                    <label
                      className="text-sm"
                      htmlFor={`options_label_${index}`}
                    >
                      Label
                    </label>
                    <input
                      type="text"
                      name={`options_label_${index}`}
                      id={`options_label_${index}`}
                      value={option.label}
                      onChange={(e) => changeOptionLabel(e, index)}
                      placeholder="Option Label"
                      className="border border-gray-300 rounded-md p-2 w-full"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      className="text-sm"
                      htmlFor={`options_value_${index}`}
                    >
                      Value
                    </label>
                    <input
                      type="text"
                      name={`options_value_${index}`}
                      id={`options_value_${index}`}
                      onChange={(e) => changeOptionValue(e, index)}
                      value={option.value}
                      placeholder="Option Value"
                      className="border border-gray-300 rounded-md p-2 w-full"
                    />
                  </div>
                  <div>
                    <span className="text-sm">Remove</span>
                    <button
                      onClick={() => removeOption(index)}
                      className="bg-red-500 text-white py-1 px-2 font-bold w-full rounded hover:bg-red-600"
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addOption}
                className="px-6 py-2 border border-dashed border-black w-full"
              >
                + Add Option
              </button>
            </div>
          ) : null}
          <div className="flex gap-5 justify-center items-center">
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
            >
              {edit ? "Update" : "Add Field"}
            </button>
            <button
              type="button"
              onClick={() => {
                toggle();
                resetForm();
              }}
              className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
            >
              CLose
            </button>
          </div>
        </form>
      </div>
      <div className="overlay fixed inset-0"></div>
    </div>
  );
};

export default Modal;
