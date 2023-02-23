"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["dom"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Dekko-Regular.ttf */ "./src/Dekko-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Quicksand.ttf */ "./src/Quicksand.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Dekko;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n    font-family: Quicksand;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n:root {\n    --gamboge: #EC9A29;\n    --blackOlive: #3B413C;\n    --ashGray: #9DB5B2;\n    --lightCyan: #DAF0EE;\n    --tiffanyBlue: #94D1BE;\n    --buff: #EDB88B;\n    --taupe: #857C8D;\n    --pine: #136F63;\n    --apricot: #FFC9B5;\n    --black: #050505;\n    --lightGray: #CCCCCC;\n    --white: #F5F5F5;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody, \nhtml {\n    min-height: 100vh;\n}\n\nbody {\n    display: flex;\n    align-items: stretch;\n}\n\n.main {\n    width: 100%;\n    display: grid;\n    grid: auto 1fr auto / auto 1fr;\n}\n\nheader {\n    grid-area: 1 / 1 / 2 / 3;\n    font-family: Quicksand;\n    height: 56px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 55px;\n    padding: 0.5rem 0rem 0.5rem 2rem;\n    background-color: var(--white);\n    border-bottom: 1px solid var(--lightGray);\n}\n\n    #menu-button {\n        height: 40px;\n        cursor: pointer;\n        padding: 8px;\n        background-color: var(--white);\n        border-radius: 3px;\n        position: absolute;\n        top: 8px;\n        left: 32px;\n    }\n        #menu-button:hover {\n            background-color: var(--lightCyan);\n        }\n\n    .add-task-button {\n        padding: 5px 10px;\n        border-radius: 5px;\n        display: grid;\n        grid-template-columns: auto auto;\n        gap: 10px;\n        position: absolute;\n        right: 40px;\n        cursor: pointer;\n        background-color: #94d1be52;\n        border: 1px solid var(--ashGray);\n    }\n    #add-task-plus {\n        height: 15px;\n        place-self: center;\n        \n    }\n        .add-task-button:hover {\n            opacity: 0.8;\n        }\n\n.page {\n    grid-area: 2/2/3/3;\n    background-color: var(--lightCyan);\n    display: flex;\n    flex-wrap: wrap;\n}\n    .sidebar {\n        background-color: #94d1be52;    \n        border-right: 1px solid var(--lightGray);\n        height: 100%;\n        width: 400px;\n        padding: 2rem;\n        padding-bottom: 0;\n        font-family: Quicksand;\n        font-weight: 400;\n        display: grid;\n        grid: auto 1fr / 1fr;\n        opacity: 1;\n        visibility: visible;\n        transition: opacity 0.5s, width 0.75s, visibility 0.5s;\n    }\n        .sidebar.closed {\n            opacity: 0;\n            visibility: hidden;\n            width: 0px;\n            padding: 0;\n        }\n        .full-screen {\n            width: 100vw;\n        }\n        .sidebar h2 {\n            margin-bottom: 1.5rem;\n            padding-bottom: 5px;\n            border-bottom: 1px solid;\n        }\n        .sidebar p {\n            padding: 0.5rem;\n            padding-left: 1rem;\n            cursor: pointer;\n            font-size: 20px;\n            margin-bottom: 0.5rem;\n        }\n            .sidebar p:hover {\n                background-color: var(--tiffanyBlue);\n            }\n            \n        .sidebar .home, \n        .sidebar .projects {\n            padding-bottom: 3rem;\n        }\n            .new-project {\n                display: grid;\n                grid-template-columns: auto 1fr;\n                gap: 10px;\n                margin-bottom: 0.5rem;\n            }\n                .new-project p {\n                    margin-bottom: 0;\n                }\n                .sidebar .new-project:hover {\n                    background-color: var(--tiffanyBlue);\n                }\n                #plus {\n                    height: 15px;\n                    place-self: start;\n                    align-self: center;\n                }\n            .project-form {\n                display: grid;\n                grid: 1fr 1fr / 1fr 1fr;\n                align-items: center;\n                gap: 0 15px;\n                padding-left: 1rem;\n                background-color: var(--lightCyan);\n                border: 1px solid var(--apricot);\n                border-radius: 5px;\n                opacity: 1;\n                height: 100px;\n                visibility: visible;\n                transition: height 0.75s, opacity 0.75s, visibility 0.75s;\n            }\n                .project-form.hidden{\n                    opacity: 0;\n                    visibility: hidden;\n                    height: 0;\n                }\n                .project-form input {\n                    height: 25px;\n                    border: 1px solid var(--apricot);\n                    border-radius: 5px;\n                    margin-right: 10px;\n                }\n                .project-form input:focus {\n                    outline: none;\n                    border: 3px solid var(--apricot);\n                }\n                .form-buttons {\n                    grid-area: 2 / 1 / 3 / 3;\n                    display: flex;\n                    justify-content: space-evenly;\n                }\n                .project-form button {\n                    width: 125px;\n                    padding: 7px;\n                    border-radius: 5px;\n                    font-size: 14px;\n                    border: 1px solid red;\n                    color:  var(--blackOlive);\n                    font-weight: 700;\n                    background-color: var(--apricot);\n                    cursor: pointer;\n                }\n                .project-form button:nth-child(1){\n                    border: 1px solid green;\n                    background-color: var(--tiffanyBlue);\n                }\n                \n            .project {\n                margin-left: 1rem;\n            }\n            \n    .content {\n        background-color: var(--lightCyan);\n        flex: auto;\n        font-family: Quicksand;\n        position: relative;\n    }\n\n        .inbox-title {\n            width: 90%;\n            height: 67px;\n            margin: 0px auto;\n            display: flex;\n            align-items: end;\n            padding-left: 3rem;\n            font-size: 22px;\n            border-bottom: 5px ridge rgba(128, 128, 128, 0.226);\n        } \n        .inbox-title h2 {\n            font-weight: 100;\n        }\n        .sleepy-container {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n            .sleepy {\n                width: 300px;\n                height: 300px;\n            }\n            .sleepy-text {\n                margin-top: -50px;\n                padding-bottom: 50px;\n                font-size: 18px;\n            }\n      \nfooter {\n    font-family: Dekko;\n    position: absolute;\n    bottom: 0;\n    right: 10px;\n}\n\n.task-form-container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin:auto;\n    width: fit-content;\n    height: fit-content;\n    background-color: var(--white);\n    border: 4px solid var(--ashGray);\n    border-radius: 5px;\n    font-family: Quicksand;\n}\n    .task-form {\n        height: fit-content;\n        padding: 2rem;\n        display: grid;\n        grid: auto auto auto / 1fr 1fr;\n    }\n        .form-title {\n            margin: 2rem 2rem 0 2rem;\n            font-size: 26px;\n            border-bottom: 1px solid;\n        }\n        .todo-title,\n        .todo-description,\n        .todo-due-date,\n        .priority-menu,\n        .submit-task {\n            border: none;\n            border-radius: 5px;\n            margin-bottom: 1rem;\n            padding: 8px;\n            background-color: var(--white);\n            border: 1px solid #94d1be8c;\n            font-size: 16px;\n        }\n        .todo-title {\n            grid-area: 1 / 1 / 2 / 3;\n            height: 50px;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .todo-description {\n            grid-area: 2 / 1 / 3 / 3;\n            height: auto;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .due-date-prio-container {\n            grid-area: 3 / 1 / 4 / 2;\n            display: flex;\n            flex-direction: column;\n        }\n        .todo-due-date {\n            height: 50px;\n            \n        }\n        .priority-menu {\n            \n        }\n\n        .task-form textarea:focus,\n        .task-form input:focus,\n        .priority-menu:focus {\n            outline: none;\n            background-color: #94d1be13;\n        }\n        .submit-task {\n            width: fit-content;\n            height: auto;\n            padding: 1rem;\n            justify-self: end;\n            align-self: end;\n            cursor: pointer;\n            color: var(--black);\n        }\n            .submit-task:hover {\n                background-color: #94d1bec5;\n                color: var(--white);\n            }\n\n\n\na {\n    text-decoration: none;\n    color: #333;\n}\na:hover {\n    color: #4B4B4B;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Dekko;\n    src: url(./Dekko-Regular.ttf);\n}\n@font-face {\n    font-family: Quicksand;\n    src: url(./Quicksand.ttf);\n}\n\n:root {\n    --gamboge: #EC9A29;\n    --blackOlive: #3B413C;\n    --ashGray: #9DB5B2;\n    --lightCyan: #DAF0EE;\n    --tiffanyBlue: #94D1BE;\n    --buff: #EDB88B;\n    --taupe: #857C8D;\n    --pine: #136F63;\n    --apricot: #FFC9B5;\n    --black: #050505;\n    --lightGray: #CCCCCC;\n    --white: #F5F5F5;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody, \nhtml {\n    min-height: 100vh;\n}\n\nbody {\n    display: flex;\n    align-items: stretch;\n}\n\n.main {\n    width: 100%;\n    display: grid;\n    grid: auto 1fr auto / auto 1fr;\n}\n\nheader {\n    grid-area: 1 / 1 / 2 / 3;\n    font-family: Quicksand;\n    height: 56px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 55px;\n    padding: 0.5rem 0rem 0.5rem 2rem;\n    background-color: var(--white);\n    border-bottom: 1px solid var(--lightGray);\n}\n\n    #menu-button {\n        height: 40px;\n        cursor: pointer;\n        padding: 8px;\n        background-color: var(--white);\n        border-radius: 3px;\n        position: absolute;\n        top: 8px;\n        left: 32px;\n    }\n        #menu-button:hover {\n            background-color: var(--lightCyan);\n        }\n\n    .add-task-button {\n        padding: 5px 10px;\n        border-radius: 5px;\n        display: grid;\n        grid-template-columns: auto auto;\n        gap: 10px;\n        position: absolute;\n        right: 40px;\n        cursor: pointer;\n        background-color: #94d1be52;\n        border: 1px solid var(--ashGray);\n    }\n    #add-task-plus {\n        height: 15px;\n        place-self: center;\n        \n    }\n        .add-task-button:hover {\n            opacity: 0.8;\n        }\n\n.page {\n    grid-area: 2/2/3/3;\n    background-color: var(--lightCyan);\n    display: flex;\n    flex-wrap: wrap;\n}\n    .sidebar {\n        background-color: #94d1be52;    \n        border-right: 1px solid var(--lightGray);\n        height: 100%;\n        width: 400px;\n        padding: 2rem;\n        padding-bottom: 0;\n        font-family: Quicksand;\n        font-weight: 400;\n        display: grid;\n        grid: auto 1fr / 1fr;\n        opacity: 1;\n        visibility: visible;\n        transition: opacity 0.5s, width 0.75s, visibility 0.5s;\n    }\n        .sidebar.closed {\n            opacity: 0;\n            visibility: hidden;\n            width: 0px;\n            padding: 0;\n        }\n        .full-screen {\n            width: 100vw;\n        }\n        .sidebar h2 {\n            margin-bottom: 1.5rem;\n            padding-bottom: 5px;\n            border-bottom: 1px solid;\n        }\n        .sidebar p {\n            padding: 0.5rem;\n            padding-left: 1rem;\n            cursor: pointer;\n            font-size: 20px;\n            margin-bottom: 0.5rem;\n        }\n            .sidebar p:hover {\n                background-color: var(--tiffanyBlue);\n            }\n            \n        .sidebar .home, \n        .sidebar .projects {\n            padding-bottom: 3rem;\n        }\n            .new-project {\n                display: grid;\n                grid-template-columns: auto 1fr;\n                gap: 10px;\n                margin-bottom: 0.5rem;\n            }\n                .new-project p {\n                    margin-bottom: 0;\n                }\n                .sidebar .new-project:hover {\n                    background-color: var(--tiffanyBlue);\n                }\n                #plus {\n                    height: 15px;\n                    place-self: start;\n                    align-self: center;\n                }\n            .project-form {\n                display: grid;\n                grid: 1fr 1fr / 1fr 1fr;\n                align-items: center;\n                gap: 0 15px;\n                padding-left: 1rem;\n                background-color: var(--lightCyan);\n                border: 1px solid var(--apricot);\n                border-radius: 5px;\n                opacity: 1;\n                height: 100px;\n                visibility: visible;\n                transition: height 0.75s, opacity 0.75s, visibility 0.75s;\n            }\n                .project-form.hidden{\n                    opacity: 0;\n                    visibility: hidden;\n                    height: 0;\n                }\n                .project-form input {\n                    height: 25px;\n                    border: 1px solid var(--apricot);\n                    border-radius: 5px;\n                    margin-right: 10px;\n                }\n                .project-form input:focus {\n                    outline: none;\n                    border: 3px solid var(--apricot);\n                }\n                .form-buttons {\n                    grid-area: 2 / 1 / 3 / 3;\n                    display: flex;\n                    justify-content: space-evenly;\n                }\n                .project-form button {\n                    width: 125px;\n                    padding: 7px;\n                    border-radius: 5px;\n                    font-size: 14px;\n                    border: 1px solid red;\n                    color:  var(--blackOlive);\n                    font-weight: 700;\n                    background-color: var(--apricot);\n                    cursor: pointer;\n                }\n                .project-form button:nth-child(1){\n                    border: 1px solid green;\n                    background-color: var(--tiffanyBlue);\n                }\n                \n            .project {\n                margin-left: 1rem;\n            }\n            \n    .content {\n        background-color: var(--lightCyan);\n        flex: auto;\n        font-family: Quicksand;\n        position: relative;\n    }\n\n        .inbox-title {\n            width: 90%;\n            height: 67px;\n            margin: 0px auto;\n            display: flex;\n            align-items: end;\n            padding-left: 3rem;\n            font-size: 22px;\n            border-bottom: 5px ridge rgba(128, 128, 128, 0.226);\n        } \n        .inbox-title h2 {\n            font-weight: 100;\n        }\n        .sleepy-container {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n            .sleepy {\n                width: 300px;\n                height: 300px;\n            }\n            .sleepy-text {\n                margin-top: -50px;\n                padding-bottom: 50px;\n                font-size: 18px;\n            }\n      \nfooter {\n    font-family: Dekko;\n    position: absolute;\n    bottom: 0;\n    right: 10px;\n}\n\n.task-form-container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin:auto;\n    width: fit-content;\n    height: fit-content;\n    background-color: var(--white);\n    border: 4px solid var(--ashGray);\n    border-radius: 5px;\n    font-family: Quicksand;\n}\n    .task-form {\n        height: fit-content;\n        padding: 2rem;\n        display: grid;\n        grid: auto auto auto / 1fr 1fr;\n    }\n        .form-title {\n            margin: 2rem 2rem 0 2rem;\n            font-size: 26px;\n            border-bottom: 1px solid;\n        }\n        .todo-title,\n        .todo-description,\n        .todo-due-date,\n        .priority-menu,\n        .submit-task {\n            border: none;\n            border-radius: 5px;\n            margin-bottom: 1rem;\n            padding: 8px;\n            background-color: var(--white);\n            border: 1px solid #94d1be8c;\n            font-size: 16px;\n        }\n        .todo-title {\n            grid-area: 1 / 1 / 2 / 3;\n            height: 50px;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .todo-description {\n            grid-area: 2 / 1 / 3 / 3;\n            height: auto;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .due-date-prio-container {\n            grid-area: 3 / 1 / 4 / 2;\n            display: flex;\n            flex-direction: column;\n        }\n        .todo-due-date {\n            height: 50px;\n            \n        }\n        .priority-menu {\n            \n        }\n\n        .task-form textarea:focus,\n        .task-form input:focus,\n        .priority-menu:focus {\n            outline: none;\n            background-color: #94d1be13;\n        }\n        .submit-task {\n            width: fit-content;\n            height: auto;\n            padding: 1rem;\n            justify-self: end;\n            align-self: end;\n            cursor: pointer;\n            color: var(--black);\n        }\n            .submit-task:hover {\n                background-color: #94d1bec5;\n                color: var(--white);\n            }\n\n\n\na {\n    text-decoration: none;\n    color: #333;\n}\na:hover {\n    color: #4B4B4B;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-stuff.js":
/*!**************************!*\
  !*** ./src/dom-stuff.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.svg */ "./src/menu.svg");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _sleepy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sleepy.png */ "./src/sleepy.png");
/* harmony import */ var _plus_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plus.png */ "./src/plus.png");








const createClassedElement = (element, className) => {
    let component = document.createElement(element);
    if (className) component.classList.add(className);
    return component;
}

const mainDiv = createClassedElement('div', 'main');

document.body.appendChild(mainDiv);

const header = () => {
    const element = createClassedElement('header');
        const menuButton = new Image();
            menuButton.src = _menu_svg__WEBPACK_IMPORTED_MODULE_1__;
            menuButton.id = 'menu-button';
        const addTaskButton = createClassedElement('div', 'add-task-button');
            addTaskButton.textContent = 'ADD TASK'
            const plus = new Image();
            plus.src = _plus_png__WEBPACK_IMPORTED_MODULE_4__;
            plus.id = 'add-task-plus'
            addTaskButton.append(plus);

    element.append(menuButton, addTaskButton)
    return element;
}



const page = () => {
    const element = createClassedElement('div', 'page');



    const sideBar = () => {
        const element = createClassedElement('div', 'sidebar');
            const home = () => {
                const element = createClassedElement('div', 'home');
                    const h2 = createClassedElement('h2');
                        h2.textContent = "HOME";
                    const inbox = createClassedElement('p');
                        inbox.textContent = "INBOX";
                    const today = createClassedElement('p');
                        today.textContent = "TODAY";
                    const thisWeek = createClassedElement('p');
                        thisWeek.textContent = "THIS WEEK";
                    const important = createClassedElement('p');
                        important.textContent = "IMPORTANT";

                    element.append(h2, inbox, today, thisWeek, important)

                return element;
            }

            const projects = () => {
                const element = createClassedElement('div', 'projects');
                    const h2 = createClassedElement('h2');
                        h2.textContent = "PROJECTS";
                    const form = createClassedElement('form', 'project-form');
                        form.classList.add('hidden')
                        const nameLabel = createClassedElement('label');
                            nameLabel.HTMLfor = 'new-project-name';
                            nameLabel.innerHTML = 'Project Name:'
                        const nameInput = createClassedElement('input');
                            nameInput.id = 'new-project-name';
                            nameInput.type = 'text';
                            nameInput.max = 20;
                            nameInput.required = true;
                        const buttonsDiv = createClassedElement('div', 'form-buttons');
                            const addButton = createClassedElement('button', 'add-button');
                                addButton.textContent = 'Add Project';
                                addButton.type = 'button'
                            const cancelButton = createClassedElement('button', 'new-project-cancel');
                                cancelButton.textContent = 'Cancel';
                                cancelButton.type = 'button'
                            buttonsDiv.append(addButton, cancelButton)
                        form.append(nameLabel, nameInput, buttonsDiv)
                    const newProject = createClassedElement('div', 'new-project');
                        const p = createClassedElement('p');
                            p.textContent = 'ADD NEW PROJECT';
                        const plus = new Image();
                            plus.src = _plus_png__WEBPACK_IMPORTED_MODULE_4__;
                            plus.id = 'plus'
                        newProject.append(p, plus);
                    // add new project + 
                    element.append(h2, newProject, form)
                return element;
            }

            
            element.append(home(), projects());
        return element;
    }

    const content = () => {
        const element = createClassedElement('div', 'content');
            const currentInbox = createClassedElement('div', 'inbox-title');
                const currentH2 = createClassedElement('h2', 'inbox-h2');
                currentH2.textContent = `Current Inbox`
                currentInbox.appendChild(currentH2);
            
            
            const footer = () => {
                const element = createClassedElement('footer', 'footer');
                    const para = createClassedElement('a');
                        para.innerHTML = 'github.com/rubberteeth'
                        para.href = 'https://github.com/rubberteeth'
                        para.target = '_blank'
                    element.appendChild(para)
                return element
            }

            
            element.append(currentInbox, footer());
        return element;
    }

    element.append(sideBar(), content())
    
    return element;
}

const form = () => {
    const element = createClassedElement('div', 'task-form-container');

        const formTitle = createClassedElement('p', 'form-title');
            formTitle.textContent = 'New To-Do'

        const form = createClassedElement('form','task-form');
        form.method = '';
        form.action = '';

            const titleInput = createClassedElement('textarea', 'todo-title');
                titleInput.required = true;
                titleInput.placeholder = "Title: ex. 'Gym'";
                titleInput.rows = '2'
                titleInput.max = 40;

            const descriptionInput = createClassedElement('textarea', 'todo-description');
                descriptionInput.required = true;
                descriptionInput.placeholder = "Description: ex. 'Work on cardio'";
                descriptionInput.rows = '5'

            const container = createClassedElement('div', 'due-date-prio-container');
                const dueDateInput = createClassedElement('input', 'todo-due-date');
                    dueDateInput.type = 'date';
                    dueDateInput.required = true;
                    dueDateInput.placeholder = 'DD/MM/YYYY';
                const priority = createClassedElement('select', 'priority-menu');
                    priority.innerHTML = `<option value="" disabled selected>Priority (optional)</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>`;
                container.append(dueDateInput, priority)

            const submitTask = createClassedElement('button', 'submit-task');
                submitTask.type = 'submit';
                submitTask.textContent = 'ADD TO DO'

            form.append(titleInput, descriptionInput, container, submitTask)

        element.append(formTitle, form)
    return element;
}

try {
    document.querySelector('.main').append(header(), page(), form());
} catch (e){
    console.log(e)
}



/////
/////-------------//////
/////


const displayController = (() => {

    const fullInbox = () => {
        // get array of todos
        let x = JSON.parse(localStorage.myTodoList);

    }
    
    const selectInbox = () => {
        document.querySelector('.inbox-h2').textContent = 'hello'
    }

    const updateInbox = (param) => {


        return inbox;
    }

    const displaySleepyCat = () => {
        const div = createClassedElement('div', 'sleepy-container');
            const p = createClassedElement('p', 'sleepy-text');
                p.textContent = 'You have no current tasks';
            const img = new Image();
                img.src = _sleepy_png__WEBPACK_IMPORTED_MODULE_3__;
                img.classList.add('sleepy');
            div.append(img, p);
        let content = document.querySelector('.content');
        if (true) {
            content.insertBefore(div, content.lastChild);
        } 
    }

    return {
        fullInbox,
        selectInbox,
        displaySleepyCat
    }
})()

displayController.displaySleepyCat();


const menuHider = (x) => {
    let menu = document.querySelector('div.sidebar');
    if (x.matches) {
        menu.classList.add('closed');
    } else {
        menu.classList.remove('closed');
    }
};

const fullscreenMenu = (x) => {
    let menu = document.querySelector('div.sidebar');
    if(x.matches) {
        menu.classList.add('full-screen');
    } else {
        menu.classList.remove('full-screen');
    };
};

/////
///// SIDEBAR MEDIA QUERY LISTENERS;
/////
let hideMenu = window.matchMedia("(max-width: 400px)");
menuHider(hideMenu);
hideMenu.addEventListener('change', menuHider);

let sizeMenu = window.matchMedia("(max-width: 675px)");
sizeMenu.addEventListener('change', fullscreenMenu);
/////
/////-----------------------------
/////


const toggleSidebar = () => {
    document.querySelector('.sidebar').classList.toggle('closed');
}

const toggleNewProjectForm = () => {
    document.querySelector('.project-form').classList.toggle('hidden');
};

const clearNewProjectForm = () => {
    document.querySelector('#new-project-name').value = '';
};

const addProject = () => {
    let exists;
    let projectName = document.querySelector('#new-project-name').value;
    if (projectName.length < 3) {
        console.log(`project name is ${projectName.length} chars long`)
        alert('Project name must be between 3 and 18 characters');
        return;
    }
    if (projectName.length > 18) {
        alert('Project name must be between 3 and 18 characters');
        return;
    }
    let projects = document.querySelector('.projects');
      // check if project already exists
    projects.childNodes.forEach(node => {
        if (node.textContent == projectName) {
            alert('Project already exists');
            exists = true;
        };
    })
    if (!exists) {
        let p = createClassedElement('p', 'project');
        p.textContent = projectName;
        document.querySelector('.projects').appendChild(p);
        _index_js__WEBPACK_IMPORTED_MODULE_2__.storage.storeProject(projectName);
        toggleNewProjectForm();
        clearNewProjectForm();
    };
};

const addToDo = () => {
    let title = document.querySelector('.todo-title')
    let description = document.querySelector('.todo-description')
    let date = document.querySelector('.todo-due-date')
    let priority = document.querySelector('.priority-menu')
    console.log(title.value, description.value, date.value, priority.value )
}   

/////
/////
/////----------- EVENT LISTENERS
/////
/////

    // hide 
document.querySelector('#menu-button').addEventListener('click', () => {
    toggleSidebar();
});

document.querySelector('.new-project').addEventListener('click', () => {
    toggleNewProjectForm();
});

document.querySelector('.new-project-cancel').addEventListener('click', () => {
    toggleNewProjectForm();
    clearNewProjectForm();
});

document.querySelector('.add-button').addEventListener('click', addProject)

document.querySelector('.project-form').addEventListener('submit', (event) => {
  event.preventDefault()
})

    // display projects on page load
document.addEventListener('DOMContentLoaded', () => {
    if (_index_js__WEBPACK_IMPORTED_MODULE_2__.storage.getProjects() !== null) {
        JSON.parse(_index_js__WEBPACK_IMPORTED_MODULE_2__.storage.getProjects()).forEach(element => {
            let p = createClassedElement('p', 'project');
            p.textContent = element;
            document.querySelector('.projects').appendChild(p)
        });
    }
})


document.querySelector('.submit-task').addEventListener('click', () => {
    event.preventDefault();
    addToDo();
})



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "storage": () => (/* binding */ storage)
/* harmony export */ });


class Todo {
    constructor (id, title, description, dueDate, priority, project, notes) {
        this.id = id;
        this.title = title; 
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.notes = notes;
    }
}



const storage = (() => {
        // setup ID counter    
    if (localStorage.getItem('id') == null) {
        localStorage.setItem('id', '0');
    }
    
    

    const incrementID = () => {
        let x = parseFloat(localStorage.getItem('id'));
        x++;
        localStorage.setItem('id', `${x}`)
    }

    const getID = () => {
        return localStorage.getItem('id');
    }

    const storageAvailable = () => {
        let storage = localStorage
        try {
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return e    (storage && storage.length !== 0);
        }
    }

    const storeItem = (item) => {
        if (storageAvailable) {
            if (localStorage.getItem('myTodoList') == null) {
                localStorage.setItem('myTodoList', JSON.stringify([item]));
                storage.incrementID();
                return;
            } else {
                let list = JSON.parse(localStorage.getItem('myTodoList').split(','));
                list.push(item);
                localStorage.setItem('myTodoList', JSON.stringify(list)); 
                storage.incrementID();
            }





        // logic to store item from html 
        // form goes somewhere here 
        } else {
            alert('no storage available');
        }
    };

    const removeItem = (item) => {
        // for now manually remove item w param
        localStorage.removeItem(item.id);

        // logic to remove item from DOM;
        // goes here
    }

    const get = (item) => {
        return JSON.parse(localStorage.getItem(item))
    }


        // check if item in storage;
    const itemInStorage = (todo) => {
        for (let item of Object.keys(localStorage)) {
            if (item === todo.title) { 
                console.log('found item'); return true }
        }
        console.log('this item doesn\'t exist'); return false;
    }

    const storeProject = (project) => {
        if (localStorage.getItem('myProjectList') == null ) {
            localStorage.setItem('myProjectList', JSON.stringify([project]));
            return;
        } else {
            let list = JSON.parse(localStorage.getItem('myProjectList').split(','));
            
            list.push(project);
            localStorage.setItem('myProjectList', JSON.stringify(list)); 
        }
    }

    const getProjects = () => {
        return localStorage.getItem('myProjectList');
    }

    const deleteProject = (project) => {
        let list = JSON.parse(localStorage.getItem('myProjectList').split(','));
        if (list.indexOf(project) !== -1) {
            list.splice(list.indexOf(project), 1);
            localStorage.setItem('myProjectList', JSON.stringify(list))
        }



        // let list = localStorage.getItem('myProjectList').split(',');
        // if (list.indexOf(project) !== -1) {
        //     list.splice(list.indexOf(project), 1);
        //     localStorage.setItem('myProjectList', list);
        // }
        
    }

    

    return {
        incrementID,
        getID,
        storageAvailable,
        storeItem,
        get,
        removeItem,
        itemInStorage,
        storeProject,
        deleteProject,
        getProjects
    }
})();


const dayFuncs = (() => {
    const dayLength = 1000*60*60*24;
    const weekLength = dayLength * 7;

    const now = () => {
        return new Date().getTime();
    }

    const isWithinDay = (now, day) => {
        return ((day - now) < dayLength);
    }

    const isWithinWeek = (now, day) => {
        return ((day - now) < weekLength);
    }

    return {
        now,
        isWithinDay,
        isWithinWeek
    }
})()








/////------------------- TESTING

// storage.storeItem(new Todo(storage.getID(), 'today', 'things to do today','april 10', 'low'));
// storage.storeItem(new Todo(storage.getID(), 'tomorrow', 'do stuff', 'tomorrow', 'medium'));





// setTimeout(() => {
//     displayController.selectInbox();
// }, 10);


// let x = new Date('Feb 28 2023 14:01:00').getTime();
// console.log(dayFuncs.now())
// console.log(dayFuncs.isWithinWeek(dayFuncs.now(), x));

/***/ }),

/***/ "./src/Dekko-Regular.ttf":
/*!*******************************!*\
  !*** ./src/Dekko-Regular.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb8283c7611ec71fdbc4.ttf";

/***/ }),

/***/ "./src/Quicksand.ttf":
/*!***************************!*\
  !*** ./src/Quicksand.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf52df73d8529b4815ed.ttf";

/***/ }),

/***/ "./src/menu.svg":
/*!**********************!*\
  !*** ./src/menu.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ef2adf9f8bd87072e40.svg";

/***/ }),

/***/ "./src/plus.png":
/*!**********************!*\
  !*** ./src/plus.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf87513653a0a0a4d91a.png";

/***/ }),

/***/ "./src/sleepy.png":
/*!************************!*\
  !*** ./src/sleepy.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59528b2c74f45c75c0d3.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom-stuff.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxZQUFZLE1BQU0sS0FBSyxXQUFXLGFBQWEsWUFBWSxhQUFhLE1BQU0sTUFBTSxhQUFhLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxXQUFXLGFBQWEsY0FBYyxPQUFPLEtBQUssV0FBVyxhQUFhLGNBQWMsWUFBWSxhQUFhLGNBQWMsY0FBYyxjQUFjLFlBQVksV0FBVyxhQUFhLGNBQWMsTUFBTSxNQUFNLFdBQVcsYUFBYSxZQUFZLE1BQU0sTUFBTSxXQUFXLGFBQWEsY0FBYyxjQUFjLE9BQU8sTUFBTSxXQUFXLGFBQWEsT0FBTyxNQUFNLGFBQWEsWUFBWSxhQUFhLE9BQU8sTUFBTSxXQUFXLFdBQVcsYUFBYSxZQUFZLGFBQWEsY0FBYyxjQUFjLGNBQWMsWUFBWSxPQUFPLE1BQU0sYUFBYSxjQUFjLFFBQVEsS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssYUFBYSxjQUFjLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxh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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsd0NBQU87QUFDakM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxJQUFJO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsb0JBQW9CO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsUUFBUSwwREFBeUI7QUFDakMsbUJBQW1CLDBEQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJdUI7Ozs7O0FBS3hCOztBQUVBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20tc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0Rla2tvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9RdWlja3NhbmQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogRGVra287XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWdhbWJvZ2U6ICNFQzlBMjk7XFxuICAgIC0tYmxhY2tPbGl2ZTogIzNCNDEzQztcXG4gICAgLS1hc2hHcmF5OiAjOURCNUIyO1xcbiAgICAtLWxpZ2h0Q3lhbjogI0RBRjBFRTtcXG4gICAgLS10aWZmYW55Qmx1ZTogIzk0RDFCRTtcXG4gICAgLS1idWZmOiAjRURCODhCO1xcbiAgICAtLXRhdXBlOiAjODU3QzhEO1xcbiAgICAtLXBpbmU6ICMxMzZGNjM7XFxuICAgIC0tYXByaWNvdDogI0ZGQzlCNTtcXG4gICAgLS1ibGFjazogIzA1MDUwNTtcXG4gICAgLS1saWdodEdyYXk6ICNDQ0NDQ0M7XFxuICAgIC0td2hpdGU6ICNGNUY1RjU7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksIFxcbmh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiBhdXRvIDFmciBhdXRvIC8gYXV0byAxZnI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgaGVpZ2h0OiA1NnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1NXB4O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMHJlbSAwLjVyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmF5KTtcXG59XFxuXFxuICAgICNtZW51LWJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDhweDtcXG4gICAgICAgIGxlZnQ6IDMycHg7XFxuICAgIH1cXG4gICAgICAgICNtZW51LWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDeWFuKTtcXG4gICAgICAgIH1cXG5cXG4gICAgLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiA0MHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZDFiZTUyO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXNoR3JheSk7XFxuICAgIH1cXG4gICAgI2FkZC10YXNrLXBsdXMge1xcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgICAgIC5hZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgIH1cXG5cXG4ucGFnZSB7XFxuICAgIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDeWFuKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZDFiZTUyOyAgICBcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkOiBhdXRvIDFmciAvIDFmcjtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzLCB3aWR0aCAwLjc1cywgdmlzaWJpbGl0eSAwLjVzO1xcbiAgICB9XFxuICAgICAgICAuc2lkZWJhci5jbG9zZWQge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICAgIHdpZHRoOiAwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5mdWxsLXNjcmVlbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgfVxcbiAgICAgICAgLnNpZGViYXIgaDIge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5zaWRlYmFyIHAge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLnNpZGViYXIgcDpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpZmZhbnlCbHVlKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICAuc2lkZWJhciAuaG9tZSwgXFxuICAgICAgICAuc2lkZWJhciAucHJvamVjdHMge1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5uZXctcHJvamVjdCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgICAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLm5ldy1wcm9qZWN0IHAge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuc2lkZWJhciAubmV3LXByb2plY3Q6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlmZmFueUJsdWUpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNwbHVzIHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnByb2plY3QtZm9ybSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgICAgIGdyaWQ6IDFmciAxZnIgLyAxZnIgMWZyO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDAgMTVweDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEN5YW4pO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHJpY290KTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC43NXMsIG9wYWNpdHkgMC43NXMsIHZpc2liaWxpdHkgMC43NXM7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAucHJvamVjdC1mb3JtLmhpZGRlbntcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnByb2plY3QtZm9ybSBpbnB1dCB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHJpY290KTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAucHJvamVjdC1mb3JtIGlucHV0OmZvY3VzIHtcXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1hcHJpY290KTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuZm9ybS1idXR0b25zIHtcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMztcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAucHJvamVjdC1mb3JtIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTI1cHg7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIHZhcigtLWJsYWNrT2xpdmUpO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcmljb3QpO1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0gYnV0dG9uOm50aC1jaGlsZCgxKXtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlmZmFueUJsdWUpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC5wcm9qZWN0IHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAuY29udGVudCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEN5YW4pO1xcbiAgICAgICAgZmxleDogYXV0bztcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgICAgIC5pbmJveC10aXRsZSB7XFxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDY3cHg7XFxuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHggcmlkZ2UgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIyNik7XFxuICAgICAgICB9IFxcbiAgICAgICAgLmluYm94LXRpdGxlIGgyIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnNsZWVweS1jb250YWluZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5zbGVlcHkge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5zbGVlcHktdGV4dCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICBcXG5mb290ZXIge1xcbiAgICBmb250LWZhbWlseTogRGVra287XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMTBweDtcXG59XFxuXFxuLnRhc2stZm9ybS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luOmF1dG87XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hc2hHcmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbn1cXG4gICAgLnRhc2stZm9ybSB7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkOiBhdXRvIGF1dG8gYXV0byAvIDFmciAxZnI7XFxuICAgIH1cXG4gICAgICAgIC5mb3JtLXRpdGxlIHtcXG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMnJlbSAwIDJyZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcXG4gICAgICAgIH1cXG4gICAgICAgIC50b2RvLXRpdGxlLFxcbiAgICAgICAgLnRvZG8tZGVzY3JpcHRpb24sXFxuICAgICAgICAudG9kby1kdWUtZGF0ZSxcXG4gICAgICAgIC5wcmlvcml0eS1tZW51LFxcbiAgICAgICAgLnN1Ym1pdC10YXNrIHtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTRkMWJlOGM7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRvZG8tdGl0bGUge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDcwdnc7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZHVlLWRhdGUtcHJpby1jb250YWluZXIge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB9XFxuICAgICAgICAudG9kby1kdWUtZGF0ZSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgLnByaW9yaXR5LW1lbnUge1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhc2stZm9ybSB0ZXh0YXJlYTpmb2N1cyxcXG4gICAgICAgIC50YXNrLWZvcm0gaW5wdXQ6Zm9jdXMsXFxuICAgICAgICAucHJpb3JpdHktbWVudTpmb2N1cyB7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkMWJlMTM7XFxuICAgICAgICB9XFxuICAgICAgICAuc3VibWl0LXRhc2sge1xcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLnN1Ym1pdC10YXNrOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZDFiZWM1O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIH1cXG5cXG5cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuYTpob3ZlciB7XFxuICAgIGNvbG9yOiAjNEI0QjRCO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQiw0Q0FBNkI7QUFDakM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qiw0Q0FBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixn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eEIsYUFBYTtZQUNiLHNCQUFzQjtRQUMxQjtRQUNBO1lBQ0ksWUFBWTs7UUFFaEI7UUFDQTs7UUFFQTs7UUFFQTs7O1lBR0ksYUFBYTtZQUNiLDJCQUEyQjtRQUMvQjtRQUNBO1lBQ0ksa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixlQUFlO1lBQ2YsbUJBQW1CO1FBQ3ZCO1lBQ0k7Z0JBQ0ksMkJBQTJCO2dCQUMzQixtQkFBbUI7WUFDdkI7Ozs7QUFJWjtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBEZWtrbztcXG4gICAgc3JjOiB1cmwoLi9EZWtrby1SZWd1bGFyLnR0Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICBzcmM6IHVybCguL1F1aWNrc2FuZC50dGYpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZ2FtYm9nZTogI0VDOUEyOTtcXG4gICAgLS1ibGFja09saXZlOiAjM0I0MTNDO1xcbiAgICAtLWFzaEdyYXk6ICM5REI1QjI7XFxuICAgIC0tbGlnaHRDeWFuOiAjREFGMEVFO1xcbiAgICAtLXRpZmZhbnlCbHVlOiAjOTREMUJFO1xcbiAgICAtLWJ1ZmY6ICNFREI4OEI7XFxuICAgIC0tdGF1cGU6ICM4NTdDOEQ7XFxuICAgIC0tcGluZTogIzEzNkY2MztcXG4gICAgLS1hcHJpY290OiAjRkZDOUI1O1xcbiAgICAtLWJsYWNrOiAjMDUwNTA1O1xcbiAgICAtLWxpZ2h0R3JheTogI0NDQ0NDQztcXG4gICAgLS13aGl0ZTogI0Y1RjVGNTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSwgXFxuaHRtbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IGF1dG8gMWZyIGF1dG8gLyBhdXRvIDFmcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICBoZWlnaHQ6IDU2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDU1cHg7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwcmVtIDAuNXJlbSAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xcbn1cXG5cXG4gICAgI21lbnUtYnV0dG9uIHtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogOHB4O1xcbiAgICAgICAgbGVmdDogMzJweDtcXG4gICAgfVxcbiAgICAgICAgI21lbnUtYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEN5YW4pO1xcbiAgICAgICAgfVxcblxcbiAgICAuYWRkLXRhc2stYnV0dG9uIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcmlnaHQ6IDQwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkMWJlNTI7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hc2hHcmF5KTtcXG4gICAgfVxcbiAgICAjYWRkLXRhc2stcGx1cyB7XFxuICAgICAgICBoZWlnaHQ6IDE1cHg7XFxuICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICAgICAgLmFkZC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgfVxcblxcbi5wYWdlIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEN5YW4pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkMWJlNTI7ICAgIFxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmF5KTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiA0MDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQ6IGF1dG8gMWZyIC8gMWZyO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMsIHdpZHRoIDAuNzVzLCB2aXNpYmlsaXR5IDAuNXM7XFxuICAgIH1cXG4gICAgICAgIC5zaWRlYmFyLmNsb3NlZCB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgICAgd2lkdGg6IDBweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmZ1bGwtc2NyZWVuIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICB9XFxuICAgICAgICAuc2lkZWJhciBoMiB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnNpZGViYXIgcCB7XFxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuc2lkZWJhciBwOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlmZmFueUJsdWUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgIC5zaWRlYmFyIC5ob21lLCBcXG4gICAgICAgIC5zaWRlYmFyIC5wcm9qZWN0cyB7XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLm5ldy1wcm9qZWN0IHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAubmV3LXByb2plY3QgcCB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5zaWRlYmFyIC5uZXctcHJvamVjdDpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI3BsdXMge1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Utc2VsZjogc3RhcnQ7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAucHJvamVjdC1mb3JtIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAgICAgZ3JpZDogMWZyIDFmciAvIDFmciAxZnI7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGdhcDogMCAxNXB4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q3lhbik7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcmljb3QpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjc1cywgb3BhY2l0eSAwLjc1cywgdmlzaWJpbGl0eSAwLjc1cztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0uaGlkZGVue1xcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAucHJvamVjdC1mb3JtIGlucHV0IHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcmljb3QpO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWFwcmljb3QpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5mb3JtLWJ1dHRvbnMge1xcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0gYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjVweDtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgdmFyKC0tYmxhY2tPbGl2ZSk7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXByaWNvdCk7XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnByb2plY3QtZm9ybSBidXR0b246bnRoLWNoaWxkKDEpe1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgLnByb2plY3Qge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q3lhbik7XFxuICAgICAgICBmbGV4OiBhdXRvO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAgICAgLmluYm94LXRpdGxlIHtcXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgICAgIGhlaWdodDogNjdweDtcXG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCByaWRnZSByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjI2KTtcXG4gICAgICAgIH0gXFxuICAgICAgICAuaW5ib3gtdGl0bGUgaDIge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgICAgICB9XFxuICAgICAgICAuc2xlZXB5LWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLnNsZWVweSB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnNsZWVweS10ZXh0IHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgIFxcbmZvb3RlciB7XFxuICAgIGZvbnQtZmFtaWx5OiBEZWtrbztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWFzaEdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxufVxcbiAgICAudGFzay1mb3JtIHtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQ6IGF1dG8gYXV0byBhdXRvIC8gMWZyIDFmcjtcXG4gICAgfVxcbiAgICAgICAgLmZvcm0tdGl0bGUge1xcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAycmVtIDAgMnJlbTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRvZG8tdGl0bGUsXFxuICAgICAgICAudG9kby1kZXNjcmlwdGlvbixcXG4gICAgICAgIC50b2RvLWR1ZS1kYXRlLFxcbiAgICAgICAgLnByaW9yaXR5LW1lbnUsXFxuICAgICAgICAuc3VibWl0LXRhc2sge1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NGQxYmU4YztcXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgICAudG9kby10aXRsZSB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogNzB2dztcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMztcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgd2lkdGg6IDcwdnc7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5kdWUtZGF0ZS1wcmlvLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIH1cXG4gICAgICAgIC50b2RvLWR1ZS1kYXRlIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICAucHJpb3JpdHktbWVudSB7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFzay1mb3JtIHRleHRhcmVhOmZvY3VzLFxcbiAgICAgICAgLnRhc2stZm9ybSBpbnB1dDpmb2N1cyxcXG4gICAgICAgIC5wcmlvcml0eS1tZW51OmZvY3VzIHtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGQxYmUxMztcXG4gICAgICAgIH1cXG4gICAgICAgIC5zdWJtaXQtdGFzayB7XFxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuc3VibWl0LXRhc2s6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkMWJlYzU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgfVxcblxcblxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjMzMzO1xcbn1cXG5hOmhvdmVyIHtcXG4gICAgY29sb3I6ICM0QjRCNEI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBtZW51SWNvbiBmcm9tICcuL21lbnUuc3ZnJztcbmltcG9ydCAqIGFzIGluZGV4IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IGNhdEljb24gZnJvbSAnLi9zbGVlcHkucG5nJztcbmltcG9ydCBwbHVzSWNvbiBmcm9tICcuL3BsdXMucG5nJztcblxuXG5cbmNvbnN0IGNyZWF0ZUNsYXNzZWRFbGVtZW50ID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGlmIChjbGFzc05hbWUpIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuY29uc3QgbWFpbkRpdiA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnbWFpbicpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuXG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgY29uc3QgbWVudUJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgbWVudUJ1dHRvbi5zcmMgPSBtZW51SWNvbjtcbiAgICAgICAgICAgIG1lbnVCdXR0b24uaWQgPSAnbWVudS1idXR0b24nO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdhZGQtdGFzay1idXR0b24nKTtcbiAgICAgICAgICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQUREIFRBU0snXG4gICAgICAgICAgICBjb25zdCBwbHVzID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBwbHVzLnNyYyA9IHBsdXNJY29uO1xuICAgICAgICAgICAgcGx1cy5pZCA9ICdhZGQtdGFzay1wbHVzJ1xuICAgICAgICAgICAgYWRkVGFza0J1dHRvbi5hcHBlbmQocGx1cyk7XG5cbiAgICBlbGVtZW50LmFwcGVuZChtZW51QnV0dG9uLCBhZGRUYXNrQnV0dG9uKVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5cblxuY29uc3QgcGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdwYWdlJyk7XG5cblxuXG4gICAgY29uc3Qgc2lkZUJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnc2lkZWJhcicpO1xuICAgICAgICAgICAgY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdob21lJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGgyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoMi50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmJveCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmJveC50ZXh0Q29udGVudCA9IFwiSU5CT1hcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kYXkudGV4dENvbnRlbnQgPSBcIlRPREFZXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoaXNXZWVrID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNXZWVrLnRleHRDb250ZW50ID0gXCJUSElTIFdFRUtcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1wb3J0YW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudC50ZXh0Q29udGVudCA9IFwiSU1QT1JUQU5UXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoaDIsIGluYm94LCB0b2RheSwgdGhpc1dlZWssIGltcG9ydGFudClcblxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdwcm9qZWN0cycpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoMiA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaDIudGV4dENvbnRlbnQgPSBcIlBST0pFQ1RTXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZm9ybScsICdwcm9qZWN0LWZvcm0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVMYWJlbC5IVE1MZm9yID0gJ25ldy1wcm9qZWN0LW5hbWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSAnUHJvamVjdCBOYW1lOidcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVJbnB1dC5pZCA9ICduZXctcHJvamVjdC1uYW1lJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lSW5wdXQubWF4ID0gMjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNEaXYgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ2Zvcm0tYnV0dG9ucycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdidXR0b24nLCAnYWRkLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2J1dHRvbicsICduZXctcHJvamVjdC1jYW5jZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zRGl2LmFwcGVuZChhZGRCdXR0b24sIGNhbmNlbEJ1dHRvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKG5hbWVMYWJlbCwgbmFtZUlucHV0LCBidXR0b25zRGl2KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICduZXctcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9ICdBREQgTkVXIFBST0pFQ1QnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGx1cyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdXMuc3JjID0gcGx1c0ljb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1cy5pZCA9ICdwbHVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdC5hcHBlbmQocCwgcGx1cyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBuZXcgcHJvamVjdCArIFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZChoMiwgbmV3UHJvamVjdCwgZm9ybSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZChob21lKCksIHByb2plY3RzKCkpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdjb250ZW50Jyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW5ib3ggPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ2luYm94LXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEgyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2gyJywgJ2luYm94LWgyJyk7XG4gICAgICAgICAgICAgICAgY3VycmVudEgyLnRleHRDb250ZW50ID0gYEN1cnJlbnQgSW5ib3hgXG4gICAgICAgICAgICAgICAgY3VycmVudEluYm94LmFwcGVuZENoaWxkKGN1cnJlbnRIMik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZm9vdGVyJywgJ2Zvb3RlcicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmEuaW5uZXJIVE1MID0gJ2dpdGh1Yi5jb20vcnViYmVydGVldGgnXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3J1YmJlcnRlZXRoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYS50YXJnZXQgPSAnX2JsYW5rJ1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZChjdXJyZW50SW5ib3gsIGZvb3RlcigpKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZWxlbWVudC5hcHBlbmQoc2lkZUJhcigpLCBjb250ZW50KCkpXG4gICAgXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAndGFzay1mb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1UaXRsZSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ2Zvcm0tdGl0bGUnKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdOZXcgVG8tRG8nXG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdmb3JtJywndGFzay1mb3JtJyk7XG4gICAgICAgIGZvcm0ubWV0aG9kID0gJyc7XG4gICAgICAgIGZvcm0uYWN0aW9uID0gJyc7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgndGV4dGFyZWEnLCAndG9kby10aXRsZScpO1xuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRpdGxlOiBleC4gJ0d5bSdcIjtcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnJvd3MgPSAnMidcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0Lm1heCA9IDQwO1xuXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3RleHRhcmVhJywgJ3RvZG8tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvbjogZXguICdXb3JrIG9uIGNhcmRpbydcIjtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnJvd3MgPSAnNSdcblxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdkdWUtZGF0ZS1wcmlvLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdpbnB1dCcsICd0b2RvLWR1ZS1kYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlSW5wdXQucGxhY2Vob2xkZXIgPSAnREQvTU0vWVlZWSc7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnc2VsZWN0JywgJ3ByaW9yaXR5LW1lbnUnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gYDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5Qcmlvcml0eSAob3B0aW9uYWwpPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGlnaFwiPkhpZ2g8L29wdGlvbj5gO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZHVlRGF0ZUlucHV0LCBwcmlvcml0eSlcblxuICAgICAgICAgICAgY29uc3Qgc3VibWl0VGFzayA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdidXR0b24nLCAnc3VibWl0LXRhc2snKTtcbiAgICAgICAgICAgICAgICBzdWJtaXRUYXNrLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgICAgICAgICBzdWJtaXRUYXNrLnRleHRDb250ZW50ID0gJ0FERCBUTyBETydcblxuICAgICAgICAgICAgZm9ybS5hcHBlbmQodGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgY29udGFpbmVyLCBzdWJtaXRUYXNrKVxuXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kKGZvcm1UaXRsZSwgZm9ybSlcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxudHJ5IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLmFwcGVuZChoZWFkZXIoKSwgcGFnZSgpLCBmb3JtKCkpO1xufSBjYXRjaCAoZSl7XG4gICAgY29uc29sZS5sb2coZSlcbn1cblxuXG5cbi8vLy8vXG4vLy8vLy0tLS0tLS0tLS0tLS0vLy8vLy9cbi8vLy8vXG5cblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgZnVsbEluYm94ID0gKCkgPT4ge1xuICAgICAgICAvLyBnZXQgYXJyYXkgb2YgdG9kb3NcbiAgICAgICAgbGV0IHggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5teVRvZG9MaXN0KTtcblxuICAgIH1cbiAgICBcbiAgICBjb25zdCBzZWxlY3RJbmJveCA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LWgyJykudGV4dENvbnRlbnQgPSAnaGVsbG8nXG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlSW5ib3ggPSAocGFyYW0pID0+IHtcblxuXG4gICAgICAgIHJldHVybiBpbmJveDtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5U2xlZXB5Q2F0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ3NsZWVweS1jb250YWluZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdzbGVlcHktdGV4dCcpO1xuICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSAnWW91IGhhdmUgbm8gY3VycmVudCB0YXNrcyc7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gY2F0SWNvbjtcbiAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnc2xlZXB5Jyk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kKGltZywgcCk7XG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGRpdiwgY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGZ1bGxJbmJveCxcbiAgICAgICAgc2VsZWN0SW5ib3gsXG4gICAgICAgIGRpc3BsYXlTbGVlcHlDYXRcbiAgICB9XG59KSgpXG5cbmRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlTbGVlcHlDYXQoKTtcblxuXG5jb25zdCBtZW51SGlkZXIgPSAoeCkgPT4ge1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnNpZGViYXInKTtcbiAgICBpZiAoeC5tYXRjaGVzKSB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZWQnKTtcbiAgICB9XG59O1xuXG5jb25zdCBmdWxsc2NyZWVuTWVudSA9ICh4KSA9PiB7XG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuc2lkZWJhcicpO1xuICAgIGlmKHgubWF0Y2hlcykge1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2Z1bGwtc2NyZWVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsLXNjcmVlbicpO1xuICAgIH07XG59O1xuXG4vLy8vL1xuLy8vLy8gU0lERUJBUiBNRURJQSBRVUVSWSBMSVNURU5FUlM7XG4vLy8vL1xubGV0IGhpZGVNZW51ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA0MDBweClcIik7XG5tZW51SGlkZXIoaGlkZU1lbnUpO1xuaGlkZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgbWVudUhpZGVyKTtcblxubGV0IHNpemVNZW51ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA2NzVweClcIik7XG5zaXplTWVudS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdWxsc2NyZWVuTWVudSk7XG4vLy8vL1xuLy8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8vLy9cblxuXG5jb25zdCB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2VkJyk7XG59XG5cbmNvbnN0IHRvZ2dsZU5ld1Byb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn07XG5cbmNvbnN0IGNsZWFyTmV3UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LW5hbWUnKS52YWx1ZSA9ICcnO1xufTtcblxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBsZXQgZXhpc3RzO1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1uYW1lJykudmFsdWU7XG4gICAgaWYgKHByb2plY3ROYW1lLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHByb2plY3QgbmFtZSBpcyAke3Byb2plY3ROYW1lLmxlbmd0aH0gY2hhcnMgbG9uZ2ApXG4gICAgICAgIGFsZXJ0KCdQcm9qZWN0IG5hbWUgbXVzdCBiZSBiZXR3ZWVuIDMgYW5kIDE4IGNoYXJhY3RlcnMnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJvamVjdE5hbWUubGVuZ3RoID4gMTgpIHtcbiAgICAgICAgYWxlcnQoJ1Byb2plY3QgbmFtZSBtdXN0IGJlIGJldHdlZW4gMyBhbmQgMTggY2hhcmFjdGVycycpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgICAgLy8gY2hlY2sgaWYgcHJvamVjdCBhbHJlYWR5IGV4aXN0c1xuICAgIHByb2plY3RzLmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKG5vZGUudGV4dENvbnRlbnQgPT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQcm9qZWN0IGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICB9O1xuICAgIH0pXG4gICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgbGV0IHAgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdwcm9qZWN0Jyk7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGluZGV4LnN0b3JhZ2Uuc3RvcmVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgdG9nZ2xlTmV3UHJvamVjdEZvcm0oKTtcbiAgICAgICAgY2xlYXJOZXdQcm9qZWN0Rm9ybSgpO1xuICAgIH07XG59O1xuXG5jb25zdCBhZGRUb0RvID0gKCkgPT4ge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXRpdGxlJylcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kZXNjcmlwdGlvbicpXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kdWUtZGF0ZScpXG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LW1lbnUnKVxuICAgIGNvbnNvbGUubG9nKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUgKVxufSAgIFxuXG4vLy8vL1xuLy8vLy9cbi8vLy8vLS0tLS0tLS0tLS0gRVZFTlQgTElTVEVORVJTXG4vLy8vL1xuLy8vLy9cblxuICAgIC8vIGhpZGUgXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVTaWRlYmFyKCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlTmV3UHJvamVjdEZvcm0oKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtY2FuY2VsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlTmV3UHJvamVjdEZvcm0oKTtcbiAgICBjbGVhck5ld1Byb2plY3RGb3JtKCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxufSlcblxuICAgIC8vIGRpc3BsYXkgcHJvamVjdHMgb24gcGFnZSBsb2FkXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGlmIChpbmRleC5zdG9yYWdlLmdldFByb2plY3RzKCkgIT09IG51bGwpIHtcbiAgICAgICAgSlNPTi5wYXJzZShpbmRleC5zdG9yYWdlLmdldFByb2plY3RzKCkpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBsZXQgcCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kQ2hpbGQocClcbiAgICAgICAgfSk7XG4gICAgfVxufSlcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZFRvRG8oKTtcbn0pXG5cbiIsIlxuXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3RvciAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIG5vdGVzKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlOyBcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB9XG59XG5cblxuXG5jb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgICAgICAgLy8gc2V0dXAgSUQgY291bnRlciAgICBcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJykgPT0gbnVsbCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCAnMCcpO1xuICAgIH1cbiAgICBcbiAgICBcblxuICAgIGNvbnN0IGluY3JlbWVudElEID0gKCkgPT4ge1xuICAgICAgICBsZXQgeCA9IHBhcnNlRmxvYXQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJykpO1xuICAgICAgICB4Kys7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsIGAke3h9YClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJRCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JhZ2VBdmFpbGFibGUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdG9yYWdlID0gbG9jYWxTdG9yYWdlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VG9kb0xpc3QnKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShbaXRlbV0pKTtcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmluY3JlbWVudElEKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VG9kb0xpc3QnKS5zcGxpdCgnLCcpKTtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7IFxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuaW5jcmVtZW50SUQoKTtcbiAgICAgICAgICAgIH1cblxuXG5cblxuXG4gICAgICAgIC8vIGxvZ2ljIHRvIHN0b3JlIGl0ZW0gZnJvbSBodG1sIFxuICAgICAgICAvLyBmb3JtIGdvZXMgc29tZXdoZXJlIGhlcmUgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnbm8gc3RvcmFnZSBhdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgLy8gZm9yIG5vdyBtYW51YWxseSByZW1vdmUgaXRlbSB3IHBhcmFtXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGl0ZW0uaWQpO1xuXG4gICAgICAgIC8vIGxvZ2ljIHRvIHJlbW92ZSBpdGVtIGZyb20gRE9NO1xuICAgICAgICAvLyBnb2VzIGhlcmVcbiAgICB9XG5cbiAgICBjb25zdCBnZXQgPSAoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtKSlcbiAgICB9XG5cblxuICAgICAgICAvLyBjaGVjayBpZiBpdGVtIGluIHN0b3JhZ2U7XG4gICAgY29uc3QgaXRlbUluU3RvcmFnZSA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IHRvZG8udGl0bGUpIHsgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZvdW5kIGl0ZW0nKTsgcmV0dXJuIHRydWUgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGl0ZW0gZG9lc25cXCd0IGV4aXN0Jyk7IHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdExpc3QnKSA9PSBudWxsICkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215UHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShbcHJvamVjdF0pKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcpLnNwbGl0KCcsJykpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVByb2plY3RMaXN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCBsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcpLnNwbGl0KCcsJykpO1xuICAgICAgICBpZiAobGlzdC5pbmRleE9mKHByb2plY3QpICE9PSAtMSkge1xuICAgICAgICAgICAgbGlzdC5zcGxpY2UobGlzdC5pbmRleE9mKHByb2plY3QpLCAxKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkobGlzdCkpXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLy8gbGV0IGxpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcpLnNwbGl0KCcsJyk7XG4gICAgICAgIC8vIGlmIChsaXN0LmluZGV4T2YocHJvamVjdCkgIT09IC0xKSB7XG4gICAgICAgIC8vICAgICBsaXN0LnNwbGljZShsaXN0LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215UHJvamVjdExpc3QnLCBsaXN0KTtcbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluY3JlbWVudElELFxuICAgICAgICBnZXRJRCxcbiAgICAgICAgc3RvcmFnZUF2YWlsYWJsZSxcbiAgICAgICAgc3RvcmVJdGVtLFxuICAgICAgICBnZXQsXG4gICAgICAgIHJlbW92ZUl0ZW0sXG4gICAgICAgIGl0ZW1JblN0b3JhZ2UsXG4gICAgICAgIHN0b3JlUHJvamVjdCxcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgZ2V0UHJvamVjdHNcbiAgICB9XG59KSgpO1xuXG5cbmNvbnN0IGRheUZ1bmNzID0gKCgpID0+IHtcbiAgICBjb25zdCBkYXlMZW5ndGggPSAxMDAwKjYwKjYwKjI0O1xuICAgIGNvbnN0IHdlZWtMZW5ndGggPSBkYXlMZW5ndGggKiA3O1xuXG4gICAgY29uc3Qgbm93ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNXaXRoaW5EYXkgPSAobm93LCBkYXkpID0+IHtcbiAgICAgICAgcmV0dXJuICgoZGF5IC0gbm93KSA8IGRheUxlbmd0aCk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNXaXRoaW5XZWVrID0gKG5vdywgZGF5KSA9PiB7XG4gICAgICAgIHJldHVybiAoKGRheSAtIG5vdykgPCB3ZWVrTGVuZ3RoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBub3csXG4gICAgICAgIGlzV2l0aGluRGF5LFxuICAgICAgICBpc1dpdGhpbldlZWtcbiAgICB9XG59KSgpXG5cblxuXG5leHBvcnQgeyBzdG9yYWdlLCBUb2RvIH1cblxuXG5cblxuLy8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tIFRFU1RJTkdcblxuLy8gc3RvcmFnZS5zdG9yZUl0ZW0obmV3IFRvZG8oc3RvcmFnZS5nZXRJRCgpLCAndG9kYXknLCAndGhpbmdzIHRvIGRvIHRvZGF5JywnYXByaWwgMTAnLCAnbG93JykpO1xuLy8gc3RvcmFnZS5zdG9yZUl0ZW0obmV3IFRvZG8oc3RvcmFnZS5nZXRJRCgpLCAndG9tb3Jyb3cnLCAnZG8gc3R1ZmYnLCAndG9tb3Jyb3cnLCAnbWVkaXVtJykpO1xuXG5cblxuXG5cbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgIGRpc3BsYXlDb250cm9sbGVyLnNlbGVjdEluYm94KCk7XG4vLyB9LCAxMCk7XG5cblxuLy8gbGV0IHggPSBuZXcgRGF0ZSgnRmViIDI4IDIwMjMgMTQ6MDE6MDAnKS5nZXRUaW1lKCk7XG4vLyBjb25zb2xlLmxvZyhkYXlGdW5jcy5ub3coKSlcbi8vIGNvbnNvbGUubG9nKGRheUZ1bmNzLmlzV2l0aGluV2VlayhkYXlGdW5jcy5ub3coKSwgeCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==