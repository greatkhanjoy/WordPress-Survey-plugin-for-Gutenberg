/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Modal.jsx":
/*!**********************************!*\
  !*** ./src/components/Modal.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.css */ "./src/components/Modal.css");



const Modal = _ref => {
  let {
    toggle,
    action,
    editAction,
    editField,
    edit
  } = _ref;
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [label, setLabel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [placeholder, setPlaceholder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
    label: "",
    value: ""
  }]); // [{label: '', value: ''}
  const [required, setRequired] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
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
    setOptions([...options, {
      label: "",
      value: ""
    }]);
  };
  const removeOption = index => {
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
    setOptions([{
      label: "",
      value: ""
    }]);
  };
  const formHandler = e => {
    e.preventDefault();
    if (name === "" || type === "" || label === "") return alert("Please fill all the Fields");
    if (type === "select" || type === "radio" || type === "checkbox") {
      if (options.some(option => option.label === "" || option.value === "")) {
        return alert("Please fill all the Fields");
      }
    }
    const newField = {
      name,
      label,
      type,
      required,
      value,
      placeholder
    };
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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "overflow-auto fixed inset-0 flex items-center justify-center z-40",
    id: "modal"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white w-[450px] p-6 rounded-lg z-50"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "text-[28px] text-center leading-none"
  }, edit ? "Update Field" : "Add New Field"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: formHandler,
    className: "flex flex-col gap-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "items-center grid grid-cols-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "name"
  }, "Type:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    className: "col-span-2 border border-gray-300 rounded-md p-2 w-full h-10",
    name: "type",
    id: "type",
    defaultValue: type,
    onChange: e => setType(e.target.value),
    required: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, "Select Field Type"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: type === "text",
    value: "text"
  }, "Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: type === "number",
    value: "number"
  }, "Number"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: type === "email",
    value: "email"
  }, "Email"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: type === "tel",
    value: "tel"
  }, "Telephone"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: type === "textarea",
    value: "textarea"
  }, "Textarea"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: type === "select",
    value: "select"
  }, "Select"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: type === "checkbox",
    value: "checkbox"
  }, "Checkbox"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: type === "radio",
    value: "radio"
  }, "Radio"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "items-center grid grid-cols-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "name"
  }, "ID:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "name",
    id: "name",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "name",
    className: "col-span-2 border border-gray-300 rounded-md p-2 w-full",
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "items-center grid grid-cols-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "label"
  }, "Label:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "label",
    id: "label",
    value: label,
    onChange: e => setLabel(e.target.value),
    placeholder: "Field Label",
    className: "col-span-2 border border-gray-300 rounded-md p-2 w-full",
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "items-center grid grid-cols-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "placeholder"
  }, "Placeholder:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "placeholder",
    id: "placeholder",
    value: placeholder,
    onChange: e => setPlaceholder(e.target.value),
    placeholder: "Field Placeholder Text",
    className: "col-span-2 border border-gray-300 rounded-md p-2 w-full"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "items-center grid grid-cols-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "value"
  }, "Default Value:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "value",
    id: "value",
    value: value,
    onChange: e => setValue(e.target.value),
    placeholder: "Field Default Value",
    className: "col-span-2 border border-gray-300 rounded-md p-2 w-full"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-3 items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "required"
  }, "Required:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "required",
    checked: required,
    onChange: () => setRequired(!required),
    id: "required",
    className: "col-span-2"
  })), type === "select" || type === "radio" || type === "checkbox" || type === "checkbox" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col gap-2"
  }, options.map((option, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-5 gap-1 w-full items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "text-sm",
    htmlFor: `options_label_${index}`
  }, "Label"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: `options_label_${index}`,
    id: `options_label_${index}`,
    value: option.label,
    onChange: e => changeOptionLabel(e, index),
    placeholder: "Option Label",
    className: "border border-gray-300 rounded-md p-2 w-full"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "text-sm",
    htmlFor: `options_value_${index}`
  }, "Value"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: `options_value_${index}`,
    id: `options_value_${index}`,
    onChange: e => changeOptionValue(e, index),
    value: option.value,
    placeholder: "Option Value",
    className: "border border-gray-300 rounded-md p-2 w-full"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-sm"
  }, "Remove"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => removeOption(index),
    className: "bg-red-500 text-white py-1 px-2 font-bold w-full rounded hover:bg-red-600"
  }, "-")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    onClick: addOption,
    className: "px-6 py-2 border border-dashed border-black w-full"
  }, "+ Add Option")) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex gap-5 justify-center items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    className: "mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
  }, edit ? "Update" : "Add Field"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    onClick: () => {
      toggle();
      resetForm();
    },
    className: "mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
  }, "CLose")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "overlay fixed inset-0"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./src/components/Modal.css":
/*!**********************************!*\
  !*** ./src/components/Modal.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Modal */ "./src/components/Modal.jsx");





wp.blocks.registerBlockType("greatkhanjoy/survey", {
  title: "Survey",
  icon: "list-view",
  description: "A simple survey block",
  category: "common",
  attributes: {
    questions: {
      type: "array",
      default: [{
        question: "Question One",
        type: "radio",
        multiple: false,
        answers: ["answer1", "answer2", "answer3"]
      }]
    },
    fields: {
      type: "array",
      default: [{
        name: "name",
        label: "Name",
        type: "text",
        required: true,
        value: "",
        placeholder: "Enter your name"
      }, {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        value: "",
        placeholder: "Enter your email"
      }]
    }
  },
  example: {},
  edit: EditComponent,
  save: function (props) {
    return null;
  }
});
(function () {
  let locked = false;
  wp.data.subscribe(function () {
    const blocks = wp.data.select("core/block-editor").getBlocks();
    const questionType = blocks.filter(block => {
      if (block.name === "greatkhanjoy/survey" && block.attributes.questions) {
        return block.attributes.questions.some(question => !question.type || question.type === "");
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
    const questionTitle = blocks.filter(block => {
      if (block.name === "greatkhanjoy/survey" && block.attributes.questions) {
        return block.attributes.questions.some(question => !question.question || question.question === "");
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
    const questionAnswerNotEmpty = blocks.filter(block => {
      if (block.name === "greatkhanjoy/survey" && block.attributes.questions) {
        const question = block.attributes.questions.filter(question => {
          return question.answers.some(answer => answer === "" || answer === undefined);
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
  const [questioType, setQuestionType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const addQuestion = e => {
    e.preventDefault();
    if (questioType === "") return alert("Please select a question type");
    const newQuestion = {
      question: "Example Question",
      type: questioType,
      answers: [""]
    };

    // Update the state by appending the new question
    props.setAttributes({
      questions: [...props.attributes.questions, newQuestion]
    });
  };
  const addField = fields => {
    const newField = {
      name: fields.name,
      label: fields.label,
      type: fields.type,
      placeholder: fields.placeholder,
      value: fields.value,
      required: fields.required
    };
    if (fields.type === "select" || fields.type === "radio" || fields.type === "checkbox") {
      newField.options = fields.options;
    }
    props.setAttributes({
      fields: [...props.attributes.fields, newField]
    });
  };
  const updateField = field => {
    setEdit(false);
    setEditField(null);
    setEditIndex(null);
    const fields = [...props.attributes.fields];
    fields[editIndex] = field;
    props.setAttributes({
      fields: fields
    });
  };
  const removeField = index => {
    const fields = [...props.attributes.fields];
    fields.splice(index, 1);
    props.setAttributes({
      fields: fields
    });
  };
  const updateQuestion = (e, index) => {
    const questions = [...props.attributes.questions];
    questions[index].question = e.target.value;
    props.setAttributes({
      questions: questions
    });
  };
  const changeQuestionType = (e, index) => {
    const questions = [...props.attributes.questions];
    questions[index].type = e.target.value;
    props.setAttributes({
      questions: questions
    });
  };
  const changeSelectionMode = index => {
    const questions = [...props.attributes.questions];
    questions[index].multiple = !questions[index].multiple;
    props.setAttributes({
      questions: questions
    });
  };
  const newAnswer = index => {
    const questions = [...props.attributes.questions];
    questions[index].answers.push("");
    props.setAttributes({
      questions: questions
    });
  };
  const changeAnswer = (e, answerIndex, questionIndex) => {
    const questions = [...props.attributes.questions];
    questions[questionIndex].answers[answerIndex] = e.target.value;
    props.setAttributes({
      questions: questions
    });
  };
  const deleteAnswer = (answerIndex, questionIndex) => {
    const questions = [...props.attributes.questions];
    questions[questionIndex].answers.splice(answerIndex, 1);
    props.setAttributes({
      questions: questions
    });
  };
  const deleteQuestion = index => {
    const questions = [...props.attributes.questions];
    questions.splice(index, 1);
    props.setAttributes({
      questions: questions
    });
  };

  //modal handler
  const [edit, setEdit] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const openModal = () => {
    setEdit(false);
    setShowModal(prev => !prev);
  };
  const [editIndex, setEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [editField, setEditField] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const openEditModal = (field, index) => {
    setEdit(true);
    setEditIndex(index);
    setEditField(field);
    setShowModal(prev => !prev);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "question_blocks flex flex-col gap-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-gray-200 p-4 mb-4 rounded-md flex flex-col space-y-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "text-[24px] font-semibold leading-normal text-center"
  }, "Contact Fields"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 gap-3"
  }, props.attributes.fields.map((field, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-3 gap-4 items-center w-full"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "col-span-2 grid grid-cols-4 items-center gap-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-lg "
  }, field.label), field.type === "text" || field.type === "email" || field.type === "number" || field.type === "tel" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: field.type,
    name: field.name,
    value: field.value,
    placeholder: field.placeholder,
    required: field.required,
    className: "col-span-3 w-full"
  }) : null, field.type === "textarea" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    name: field.name,
    defaultValue: field.value,
    required: field.required,
    className: "col-span-3 w-full"
  }), field.type === "select" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: field.name,
    required: field.required,
    className: "col-span-3 h-[40px] text-[18px] p-2 w-full"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, "Select an option"), field.options.map(option => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: option.value
  }, option.label))), field.type === "radio" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-3 flex gap-2 w-full"
  }, field.options.map(option => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "flex items-center gap-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    name: field.name,
    checked: option.value === field.value,
    required: field.required
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, option.label)))), field.type === "checkbox" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-3 flex gap-2 w-full"
  }, field.options.map(option => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "flex items-center gap-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: field.name,
    checked: option.value === field.value,
    required: field.required
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, option.label))))), field.name !== "email" && field.name !== "name" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-around gap-1 items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    onClick: () => openEditModal(field, index),
    className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2"
  }, "Edit"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    onClick: () => removeField(index),
    className: "bg-red-500 hover:bg-red-600 text-white px-4 py-2"
  }, "Delete"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    onClick: openModal,
    className: "border border-black border-dashed w-full py-2 px-6"
  }, "Add New Field")), showModal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    toggle: openModal,
    action: addField,
    editAction: updateField,
    editField: editField,
    edit: edit
  })), props.attributes.questions.map((question, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "bg-gray-200 p-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: question.question,
    onChange: e => updateQuestion(e, index),
    className: "w-full mb-3 text-lg px-3 py-4 border border-blue-300"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col gap-3"
  }, question.answers && question.answers.map((answer, answerIndex) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-between gap-4 items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    key: answerIndex,
    type: "text",
    value: answer,
    onChange: e => changeAnswer(e, answerIndex, index),
    className: "w-full"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    icon: "trash",
    className: "text-red-500 cursor-pointer",
    onClick: () => deleteAnswer(answerIndex, index)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-between gap-4 items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    onChange: e => changeQuestionType(e, index),
    className: "h-[45px] text-[18px] p-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, "Change Question type"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: question.type == "radio",
    value: "radio"
  }, "Radio"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: question.type == "checkbox",
    value: "checkbox"
  }, "Checkbox"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: question.type == "image",
    value: "image"
  }, "Image"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: question.type == "block",
    value: "block"
  }, "Block")), question.type === "checkbox" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "flex gap-2 items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Allow Multiple Select?"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    onChange: () => changeSelectionMode(index),
    checked: question.multiple
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "bg-blue-500 px-6 py-2 text-white flex items-center gap-2",
    onClick: () => newAnswer(index)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    icon: "plus-alt",
    className: "text-white"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Add Answer")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => deleteQuestion(index),
    className: "flex gap-2 items-center bg-red-500 px-6 py-2 text-white"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    icon: "trash",
    className: "text-white"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Delete Question")))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-blue-300"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: addQuestion,
    className: "flex gap-4 p-3 items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    required: true,
    onChange: e => setQuestionType(e.target.value),
    className: "h-[45px] text-[18px] p-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, "Select Question type"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "radio"
  }, "Radio"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "checkbox"
  }, "Checkbox"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "image"
  }, "Image"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "block"
  }, "Block")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    className: "text-white font-semibold bg-green-500 px-6 py-2"
  }, "Add Question")))));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map