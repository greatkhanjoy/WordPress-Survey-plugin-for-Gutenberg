/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/frontend/ContactForm.js":
/*!************************************************!*\
  !*** ./src/components/frontend/ContactForm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ContactForm = _ref => {
  let {
    data,
    onChange
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col gap-3 p-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex gap-4 items-center justify-items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "first_name",
    placeholder: "First Name",
    value: data.first_name,
    onChange: onChange,
    className: "w-full",
    required: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    className: "w-full h-[50px] px-2",
    name: "country",
    onChange: onChange
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", null, "Select your country"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: data.country === "india",
    value: "india"
  }, "India"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: data.country === "usa",
    value: "usa"
  }, "USA"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: data.country === "uk",
    value: "uk"
  }, "UK"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-center gap-4 items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "last_name",
    placeholder: "Last Name",
    value: data.last_name,
    onChange: onChange,
    className: "w-full"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "increment",
    value: data.increment,
    onChange: onChange,
    placeholder: "0",
    className: "w-full"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-center gap-4 items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "email",
    name: "email",
    value: data.email,
    onChange: onChange,
    placeholder: "Your Email",
    className: "w-1/2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-1/2 flex justify-between"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "age",
    placeholder: "Age",
    value: data.increment,
    onChange: onChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "flex gap-2 items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    name: "gender",
    value: "male",
    checked: data.gender === "male",
    onChange: onChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Male")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "flex gap-2 items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    name: "gender",
    value: "female",
    checked: data.gender === "female",
    onChange: onChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Female")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ }),

/***/ "./src/components/frontend/Question.js":
/*!*********************************************!*\
  !*** ./src/components/frontend/Question.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Question = _ref => {
  let {
    data,
    onChange
  } = _ref;
  const [multipleChoice, setMultipleChoice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.multiple);
  const [newAnswer, setNewAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.answer || []);
  const answerHandler = e => {
    if (data.type == "checkbox" && multipleChoice === true) {
      // remove or add answer
      if (newAnswer.includes(e.target.value)) {
        let answer = [...newAnswer];
        answer = answer.filter(item => item !== e.target.value);
        setNewAnswer(answer);
      } else {
        setNewAnswer([...newAnswer, e.target.value]);
      }
    } else {
      setNewAnswer([e.target.value]);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    onChange(newAnswer);
  }, [newAnswer]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col gap-3 p-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-xl leading-normal font-semibold"
  }, data.question, " ", data.type), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col gap-4"
  }, data.answers.map((answer, index) => {
    return data.type == "radio" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      key: index,
      className: "flex gap-2 items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "radio",
      name: data.question,
      value: answer,
      onChange: answerHandler,
      checked: newAnswer.includes(answer),
      required: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, answer)) : data.type == "checkbox" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      key: index,
      className: "flex gap-2 items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      name: `${data.question}_${index}`,
      value: answer,
      onChange: answerHandler,
      checked: newAnswer.includes(answer),
      required: newAnswer.length === 0
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, answer)) : null;
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Question);

/***/ }),

/***/ "./src/components/frontend/Success.js":
/*!********************************************!*\
  !*** ./src/components/frontend/Success.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Success = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col gap-3 p-4 min-h-[400px] justify-center mx-auto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col gap-4 items-center justify-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "text-3xl leading-normal font-normal"
  }, "Survey complete! Thank you for you time."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "inline px-6 py-2 text-lg border border-green-600 text-green-600 bg-transparent"
  }, "SUBMIT SURVEY")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Success);

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
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_frontend_ContactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/frontend/ContactForm */ "./src/components/frontend/ContactForm.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _components_frontend_Question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/frontend/Question */ "./src/components/frontend/Question.js");
/* harmony import */ var _components_frontend_Success__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/frontend/Success */ "./src/components/frontend/Success.js");






document.addEventListener("DOMContentLoaded", function () {
  const surveyDiv = document.querySelectorAll(".greatkhanjoy-survey-update-me");
  surveyDiv.forEach(function (div) {
    const data = JSON.parse(div.querySelector("pre").innerHTML);
    ReactDOM.render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Survey, {
      data: data
    }), div);
    div.classList.remove("greatkhanjoy-survey-update-me");
  });
});
const Survey = _ref => {
  let {
    data
  } = _ref;
  const [steps, setSteps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [totalSteps, setTotalSteps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Number(data.questions.length) + 2);
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    first_name: "",
    last_name: "",
    country: "",
    increment: "",
    email: "",
    age: "",
    questions: data.questions
  });
  const updateAnswer = (e, index) => {
    const newQuestions = [...formData.questions];
    newQuestions[index].answer = e;
    setFormData({
      ...formData,
      questions: newQuestions
    });
    console.log(formData);
  };
  const updatePersonalInfo = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const formHandler = e => {
    e.preventDefault();
    setSteps(steps + 1);
    console.log(formData);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setProgress(Math.round(steps / totalSteps * 100));
  }, [steps]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "survey-frontend bg-gray-100 border border-gray-200"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: formHandler
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-gray-200 mx-auto p-5 w-full"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "text-center text-xl leading-normal font-medium"
  }, "SATISFACTION SURVEY"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "w-full bg-white rounded-full dark:bg-gray-700"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full flex justify-center",
    style: {
      width: `${progress}%`
    }
  }, progress, "%"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "py-5"
  }, steps === 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_frontend_ContactForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: formData,
    onChange: updatePersonalInfo
  }), formData.questions.map((question, index) => {
    return steps === index + 2 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_frontend_Question__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: question,
      onChange: e => updateAnswer(e, index)
    });
  }), steps === totalSteps && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_frontend_Success__WEBPACK_IMPORTED_MODULE_5__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-center gap-2 p-5 bg-gray-200"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: steps <= 1 ? null : () => setSteps(steps - 1),
    type: "button",
    disabled: steps <= 1,
    className: `bg-gray-300  px-6 py-2 ${steps <= 1 && "cursor-not-allowed opacity-50 :hover:bg-gray-300"}`
  }, "BACKWARD"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    disabled: steps == totalSteps,
    type: "submit",
    className: `bg-black text-white px-6 py-2 ${steps === totalSteps && "cursor-not-allowed opacity-50 :hover:bg-black"}`
  }, "FORWARD"))));
};
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map