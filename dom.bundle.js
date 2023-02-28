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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Dekko;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n    font-family: Quicksand;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n:root {\n    --gamboge: #EC9A29;\n    --blackOlive: #3B413C;\n    --ashGray: #9DB5B2;\n    --lightCyan: #DAF0EE;\n    --tiffanyBlue: #94D1BE;\n    --buff: #EDB88B;\n    --taupe: #857C8D;\n    --pine: #136F63;\n    --apricot: #FFC9B5;\n    --black: #050505;\n    --lightGray: #CCCCCC;\n    --white: #F5F5F5;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody, \nhtml {\n    min-height: 100vh;\n}\n\nbody {\n    display: flex;\n    align-items: stretch;\n}\n\n.main {\n    width: 100%;\n    display: grid;\n    grid: auto 1fr auto / auto 1fr;\n}\n\nheader {\n    grid-area: 1 / 1 / 2 / 3;\n    font-family: Quicksand;\n    height: 56px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 55px;\n    padding: 0.5rem 0rem 0.5rem 2rem;\n    background-color: var(--white);\n    border-bottom: 1px solid var(--lightGray);\n}\n\n    #menu-button {\n        height: 40px;\n        cursor: pointer;\n        padding: 8px;\n        background-color: var(--white);\n        border-radius: 3px;\n        position: absolute;\n        top: 8px;\n        left: 32px;\n    }\n        #menu-button:hover {\n            background-color: var(--lightCyan);\n        }\n\n    .add-task-button {\n        padding: 5px 10px;\n        border-radius: 5px;\n        display: grid;\n        grid-template-columns: auto auto;\n        gap: 10px;\n        position: absolute;\n        right: 40px;\n        cursor: pointer;\n        background-color: #94d1be52;\n        border: 1px solid var(--ashGray);\n    }\n    #add-task-plus {\n        height: 15px;\n        place-self: center;\n        \n    }\n        .add-task-button:hover {\n            opacity: 0.8;\n        }\n\n.page {\n    grid-area: 2/2/3/3;\n    background-color: var(--lightCyan);\n    display: flex;\n    flex-wrap: wrap;\n}\n    .sidebar {\n        background-color: #94d1be52;    \n        border-right: 1px solid var(--lightGray);\n        height: 100%;\n        width: 400px;\n        padding: 2rem;\n        padding-bottom: 0;\n        font-family: Quicksand;\n        font-weight: 400;\n        display: grid;\n        grid: auto 1fr / 1fr;\n        opacity: 1;\n        visibility: visible;\n        transition: opacity 0.5s, width 0.75s, height 0.75s,\n        margin 0.75s, visibility 0.5s;\n    }\n        .sidebar.closed, \n        .task-form-container.closed {\n            opacity: 0;\n            visibility: hidden;\n            width: 0px;\n            padding: 0;\n            height: 0;\n            border: 0;\n            margin: 0;\n        }\n        .full-screen {\n            width: 100vw;\n        }\n        .sidebar h2 {\n            margin-bottom: 1.5rem;\n            padding-bottom: 5px;\n            border-bottom: 1px solid;\n        }\n        .sidebar p {\n            padding: 0.5rem;\n            padding-left: 1rem;\n            cursor: pointer;\n            font-size: 20px;\n            margin-bottom: 0.5rem;\n        }\n            .sidebar p:hover {\n                background-color: var(--tiffanyBlue);\n            }\n            \n        .sidebar .home, \n        .sidebar .projects {\n            padding-bottom: 3rem;\n        }\n            .new-project {\n                display: grid;\n                grid-template-columns: auto 1fr;\n                gap: 10px;\n                margin-bottom: 0.5rem;\n            }\n                .new-project p {\n                    margin-bottom: 0;\n                }\n                .sidebar .new-project:hover {\n                    background-color: var(--tiffanyBlue);\n                }\n                #plus {\n                    height: 15px;\n                    place-self: start;\n                    align-self: center;\n                }\n            .project-form {\n                display: grid;\n                grid: 1fr 1fr / 1fr 1fr;\n                align-items: center;\n                gap: 0 15px;\n                padding-left: 1rem;\n                background-color: var(--lightCyan);\n                border: 1px solid var(--apricot);\n                border-radius: 5px;\n                opacity: 1;\n                height: 100px;\n                visibility: visible;\n                transition: height 0.75s, opacity 0.75s, visibility 0.75s;\n            }\n                .project-form.hidden{\n                    opacity: 0;\n                    visibility: hidden;\n                    height: 0;\n                }\n                .project-form input {\n                    height: 25px;\n                    border: 1px solid var(--apricot);\n                    border-radius: 5px;\n                    margin-right: 10px;\n                }\n                .project-form input:focus {\n                    outline: none;\n                    border: 3px solid var(--apricot);\n                }\n                .form-buttons {\n                    grid-area: 2 / 1 / 3 / 3;\n                    display: flex;\n                    justify-content: space-evenly;\n                }\n                .project-form button {\n                    width: 125px;\n                    padding: 7px;\n                    border-radius: 5px;\n                    font-size: 14px;\n                    border: 1px solid red;\n                    color:  var(--blackOlive);\n                    font-weight: 700;\n                    background-color: var(--apricot);\n                    cursor: pointer;\n                }\n                .project-form button:nth-child(1){\n                    border: 1px solid green;\n                    background-color: var(--tiffanyBlue);\n                }\n                \n            .projects .inbox {\n                margin-left: 1rem;\n            }\n            \n    .content {\n        background-color: var(--lightCyan);\n        flex: auto;\n        font-family: Quicksand;\n        position: relative;\n        padding-bottom: 2rem;\n        max-width: 100vw;\n    }\n\n        .inbox-title {\n            width: 90%;\n            height: 67px;\n            margin: 0px auto;\n            display: flex;\n            align-items: end;\n            padding-left: 3rem;\n            font-size: 22px;\n            border-bottom: 5px ridge rgba(128, 128, 128, 0.226);\n        } \n        .inbox-title h2 {\n            font-weight: 400;\n        }\n\n        .todo {\n            position: relative;\n            border: 1px solid;\n            border-radius: 3px;\n            background-color: var(--tiffanyBlue);\n            width: 90%;\n            margin: 1rem auto;\n            padding: 5px;\n            display: flex;\n            align-items: center;\n            gap: 10px;\n            cursor: pointer;\n        }\n            .priority-line {\n                position: absolute;\n                left: 0;\n                width: 7px;\n                height: 100%;\n                opacity: 0.8;\n            }\n            .todo-title {\n                flex: auto;\n                padding-left: 15px;\n                font-size: 18px;\n                \n            }\n            .todo:hover {\n                transform: scale(1.005);\n                box-shadow: 3px 3px 5px 2px rgb(0 0 0 / 20%);\n                transition: all 0.2s ease-out;\n            }\n\n            .todo img {\n                height: 25px;\n            }\n            #hidden-options {\n                border-radius: 5px;\n                border: 1px solid;\n                position: absolute;\n                background-color: var(--white);\n                right: 50px;\n                bottom: 30px;\n                display: flex;\n                flex-direction: column;\n                \n            }\n                #hidden-options div {\n                    opacity: 1;\n                    width: 80px;\n                    height: 30px;\n                    display: flex;\n                    align-items: center;\n                    border-radius: 5px;\n                    padding: 5px;\n                }\n                    #hidden-options div:hover {\n                        background-color: #eee;\n                    }\n\n        .sleepy-container {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n            .sleepy {\n                width: 300px;\n                height: 300px;\n            }\n            .sleepy-text {\n                margin-top: -50px;\n                padding-bottom: 50px;\n                font-size: 18px;\n            }\n\n        \n      \nfooter {\n    font-family: Dekko;\n    position: absolute;\n    bottom: 0;\n    right: 10px;\n    opacity: 0.8;\n}\n\n.task-form-container {\n    background-color: var(--white);\n    border: 4px solid var(--ashGray);\n    border-radius: 5px;\n    font-family: Quicksand;\n    transition: opacity 0.25s, visibility 0.25s, height 0.75s,\n                width 0.75s;\n} \n    .task-form-container, \n    .task-form-container.closed {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        margin:auto;\n        width: fit-content;\n        height: fit-content;\n    }\n    .task-form {\n        height: fit-content;\n        padding: 2rem;\n        display: grid;\n        grid: auto auto auto / 1fr 1fr;\n    }\n        .task-form-exit {\n            position: absolute;\n            right: 15px;\n            top: 15px;\n            cursor: pointer;\n            padding: 5px;\n            display: grid;\n            place-items: center;\n        }\n        .task-form-exit img{\n            height: 20px;\n            width: 20px;\n            transform: rotate(45deg);\n        }\n        .form-title {\n            margin: 2rem 2rem 0 2rem;\n            font-size: 26px;\n            border-bottom: 1px solid;\n        }\n        .todo-form-title,\n        .todo-description,\n        .todo-due-date,\n        .priority-menu,\n        .submit-task {\n            border: none;\n            border-radius: 5px;\n            margin-bottom: 1rem;\n            padding: 8px;\n            background-color: var(--white);\n            border: 1px solid #94d1be8c;\n            font-size: 16px;\n        }\n        .todo-form-title {\n            grid-area: 1 / 1 / 2 / 3;\n            height: 50px;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .todo-description {\n            grid-area: 2 / 1 / 3 / 3;\n            height: auto;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .due-date-prio-container {\n            grid-area: 3 / 1 / 4 / 2;\n            display: flex;\n            flex-direction: column;\n        }\n        .todo-due-date {\n            height: 50px;\n        }\n\n        .task-form textarea:focus,\n        .task-form input:focus,\n        .priority-menu:focus {\n            outline: none;\n            background-color: #94d1be13;\n        }\n        .submit-task {\n            width: fit-content;\n            height: auto;\n            padding: 1rem;\n            justify-self: end;\n            align-self: end;\n            cursor: pointer;\n            color: var(--black);\n        }\n            .submit-task:hover {\n                background-color: #94d1bec5;\n                color: var(--white);\n            }\n\n.closed {\n    pointer-events: none;\n}\n\na {\n    text-decoration: none;\n    color: #333;\n}\na:hover {\n    color: #4B4B4B;\n}\n\n.hidden {\n    position: absolute;\n    opacity: 0;\n    visibility: 0;\n    pointer-events: none;\n}\n\n.active {\n    background-color: var(--tiffanyBlue);\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Dekko;\n    src: url(./Dekko-Regular.ttf);\n}\n@font-face {\n    font-family: Quicksand;\n    src: url(./Quicksand.ttf);\n}\n\n:root {\n    --gamboge: #EC9A29;\n    --blackOlive: #3B413C;\n    --ashGray: #9DB5B2;\n    --lightCyan: #DAF0EE;\n    --tiffanyBlue: #94D1BE;\n    --buff: #EDB88B;\n    --taupe: #857C8D;\n    --pine: #136F63;\n    --apricot: #FFC9B5;\n    --black: #050505;\n    --lightGray: #CCCCCC;\n    --white: #F5F5F5;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody, \nhtml {\n    min-height: 100vh;\n}\n\nbody {\n    display: flex;\n    align-items: stretch;\n}\n\n.main {\n    width: 100%;\n    display: grid;\n    grid: auto 1fr auto / auto 1fr;\n}\n\nheader {\n    grid-area: 1 / 1 / 2 / 3;\n    font-family: Quicksand;\n    height: 56px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 55px;\n    padding: 0.5rem 0rem 0.5rem 2rem;\n    background-color: var(--white);\n    border-bottom: 1px solid var(--lightGray);\n}\n\n    #menu-button {\n        height: 40px;\n        cursor: pointer;\n        padding: 8px;\n        background-color: var(--white);\n        border-radius: 3px;\n        position: absolute;\n        top: 8px;\n        left: 32px;\n    }\n        #menu-button:hover {\n            background-color: var(--lightCyan);\n        }\n\n    .add-task-button {\n        padding: 5px 10px;\n        border-radius: 5px;\n        display: grid;\n        grid-template-columns: auto auto;\n        gap: 10px;\n        position: absolute;\n        right: 40px;\n        cursor: pointer;\n        background-color: #94d1be52;\n        border: 1px solid var(--ashGray);\n    }\n    #add-task-plus {\n        height: 15px;\n        place-self: center;\n        \n    }\n        .add-task-button:hover {\n            opacity: 0.8;\n        }\n\n.page {\n    grid-area: 2/2/3/3;\n    background-color: var(--lightCyan);\n    display: flex;\n    flex-wrap: wrap;\n}\n    .sidebar {\n        background-color: #94d1be52;    \n        border-right: 1px solid var(--lightGray);\n        height: 100%;\n        width: 400px;\n        padding: 2rem;\n        padding-bottom: 0;\n        font-family: Quicksand;\n        font-weight: 400;\n        display: grid;\n        grid: auto 1fr / 1fr;\n        opacity: 1;\n        visibility: visible;\n        transition: opacity 0.5s, width 0.75s, height 0.75s,\n        margin 0.75s, visibility 0.5s;\n    }\n        .sidebar.closed, \n        .task-form-container.closed {\n            opacity: 0;\n            visibility: hidden;\n            width: 0px;\n            padding: 0;\n            height: 0;\n            border: 0;\n            margin: 0;\n        }\n        .full-screen {\n            width: 100vw;\n        }\n        .sidebar h2 {\n            margin-bottom: 1.5rem;\n            padding-bottom: 5px;\n            border-bottom: 1px solid;\n        }\n        .sidebar p {\n            padding: 0.5rem;\n            padding-left: 1rem;\n            cursor: pointer;\n            font-size: 20px;\n            margin-bottom: 0.5rem;\n        }\n            .sidebar p:hover {\n                background-color: var(--tiffanyBlue);\n            }\n            \n        .sidebar .home, \n        .sidebar .projects {\n            padding-bottom: 3rem;\n        }\n            .new-project {\n                display: grid;\n                grid-template-columns: auto 1fr;\n                gap: 10px;\n                margin-bottom: 0.5rem;\n            }\n                .new-project p {\n                    margin-bottom: 0;\n                }\n                .sidebar .new-project:hover {\n                    background-color: var(--tiffanyBlue);\n                }\n                #plus {\n                    height: 15px;\n                    place-self: start;\n                    align-self: center;\n                }\n            .project-form {\n                display: grid;\n                grid: 1fr 1fr / 1fr 1fr;\n                align-items: center;\n                gap: 0 15px;\n                padding-left: 1rem;\n                background-color: var(--lightCyan);\n                border: 1px solid var(--apricot);\n                border-radius: 5px;\n                opacity: 1;\n                height: 100px;\n                visibility: visible;\n                transition: height 0.75s, opacity 0.75s, visibility 0.75s;\n            }\n                .project-form.hidden{\n                    opacity: 0;\n                    visibility: hidden;\n                    height: 0;\n                }\n                .project-form input {\n                    height: 25px;\n                    border: 1px solid var(--apricot);\n                    border-radius: 5px;\n                    margin-right: 10px;\n                }\n                .project-form input:focus {\n                    outline: none;\n                    border: 3px solid var(--apricot);\n                }\n                .form-buttons {\n                    grid-area: 2 / 1 / 3 / 3;\n                    display: flex;\n                    justify-content: space-evenly;\n                }\n                .project-form button {\n                    width: 125px;\n                    padding: 7px;\n                    border-radius: 5px;\n                    font-size: 14px;\n                    border: 1px solid red;\n                    color:  var(--blackOlive);\n                    font-weight: 700;\n                    background-color: var(--apricot);\n                    cursor: pointer;\n                }\n                .project-form button:nth-child(1){\n                    border: 1px solid green;\n                    background-color: var(--tiffanyBlue);\n                }\n                \n            .projects .inbox {\n                margin-left: 1rem;\n            }\n            \n    .content {\n        background-color: var(--lightCyan);\n        flex: auto;\n        font-family: Quicksand;\n        position: relative;\n        padding-bottom: 2rem;\n        max-width: 100vw;\n    }\n\n        .inbox-title {\n            width: 90%;\n            height: 67px;\n            margin: 0px auto;\n            display: flex;\n            align-items: end;\n            padding-left: 3rem;\n            font-size: 22px;\n            border-bottom: 5px ridge rgba(128, 128, 128, 0.226);\n        } \n        .inbox-title h2 {\n            font-weight: 400;\n        }\n\n        .todo {\n            position: relative;\n            border: 1px solid;\n            border-radius: 3px;\n            background-color: var(--tiffanyBlue);\n            width: 90%;\n            margin: 1rem auto;\n            padding: 5px;\n            display: flex;\n            align-items: center;\n            gap: 10px;\n            cursor: pointer;\n        }\n            .priority-line {\n                position: absolute;\n                left: 0;\n                width: 7px;\n                height: 100%;\n                opacity: 0.8;\n            }\n            .todo-title {\n                flex: auto;\n                padding-left: 15px;\n                font-size: 18px;\n                \n            }\n            .todo:hover {\n                transform: scale(1.005);\n                box-shadow: 3px 3px 5px 2px rgb(0 0 0 / 20%);\n                transition: all 0.2s ease-out;\n            }\n\n            .todo img {\n                height: 25px;\n            }\n            #hidden-options {\n                border-radius: 5px;\n                border: 1px solid;\n                position: absolute;\n                background-color: var(--white);\n                right: 50px;\n                bottom: 30px;\n                display: flex;\n                flex-direction: column;\n                \n            }\n                #hidden-options div {\n                    opacity: 1;\n                    width: 80px;\n                    height: 30px;\n                    display: flex;\n                    align-items: center;\n                    border-radius: 5px;\n                    padding: 5px;\n                }\n                    #hidden-options div:hover {\n                        background-color: #eee;\n                    }\n\n        .sleepy-container {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n            .sleepy {\n                width: 300px;\n                height: 300px;\n            }\n            .sleepy-text {\n                margin-top: -50px;\n                padding-bottom: 50px;\n                font-size: 18px;\n            }\n\n        \n      \nfooter {\n    font-family: Dekko;\n    position: absolute;\n    bottom: 0;\n    right: 10px;\n    opacity: 0.8;\n}\n\n.task-form-container {\n    background-color: var(--white);\n    border: 4px solid var(--ashGray);\n    border-radius: 5px;\n    font-family: Quicksand;\n    transition: opacity 0.25s, visibility 0.25s, height 0.75s,\n                width 0.75s;\n} \n    .task-form-container, \n    .task-form-container.closed {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        margin:auto;\n        width: fit-content;\n        height: fit-content;\n    }\n    .task-form {\n        height: fit-content;\n        padding: 2rem;\n        display: grid;\n        grid: auto auto auto / 1fr 1fr;\n    }\n        .task-form-exit {\n            position: absolute;\n            right: 15px;\n            top: 15px;\n            cursor: pointer;\n            padding: 5px;\n            display: grid;\n            place-items: center;\n        }\n        .task-form-exit img{\n            height: 20px;\n            width: 20px;\n            transform: rotate(45deg);\n        }\n        .form-title {\n            margin: 2rem 2rem 0 2rem;\n            font-size: 26px;\n            border-bottom: 1px solid;\n        }\n        .todo-form-title,\n        .todo-description,\n        .todo-due-date,\n        .priority-menu,\n        .submit-task {\n            border: none;\n            border-radius: 5px;\n            margin-bottom: 1rem;\n            padding: 8px;\n            background-color: var(--white);\n            border: 1px solid #94d1be8c;\n            font-size: 16px;\n        }\n        .todo-form-title {\n            grid-area: 1 / 1 / 2 / 3;\n            height: 50px;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .todo-description {\n            grid-area: 2 / 1 / 3 / 3;\n            height: auto;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .due-date-prio-container {\n            grid-area: 3 / 1 / 4 / 2;\n            display: flex;\n            flex-direction: column;\n        }\n        .todo-due-date {\n            height: 50px;\n        }\n\n        .task-form textarea:focus,\n        .task-form input:focus,\n        .priority-menu:focus {\n            outline: none;\n            background-color: #94d1be13;\n        }\n        .submit-task {\n            width: fit-content;\n            height: auto;\n            padding: 1rem;\n            justify-self: end;\n            align-self: end;\n            cursor: pointer;\n            color: var(--black);\n        }\n            .submit-task:hover {\n                background-color: #94d1bec5;\n                color: var(--white);\n            }\n\n.closed {\n    pointer-events: none;\n}\n\na {\n    text-decoration: none;\n    color: #333;\n}\na:hover {\n    color: #4B4B4B;\n}\n\n.hidden {\n    position: absolute;\n    opacity: 0;\n    visibility: 0;\n    pointer-events: none;\n}\n\n.active {\n    background-color: var(--tiffanyBlue);\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _bin_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bin.png */ "./src/bin.png");
/* harmony import */ var _dot_menu_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dot-menu.png */ "./src/dot-menu.png");










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
                    const inbox = createClassedElement('p', 'inbox');
                        inbox.textContent = "INBOX";
                    const today = createClassedElement('p', 'inbox');
                        today.textContent = "TODAY";
                    const thisWeek = createClassedElement('p', 'inbox');
                        thisWeek.textContent = "NEXT 7 DAYS";
                    const important = createClassedElement('p', 'inbox');
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
            const todoContainer = createClassedElement('div', 'todos-container');
   
            


            const footer = () => {
                const element = createClassedElement('footer', 'footer');
                    const para = createClassedElement('a');
                        para.innerHTML = 'github.com/rubberteeth'
                        para.href = 'https://github.com/rubberteeth'
                        para.target = '_blank'
                    element.appendChild(para)
                return element
            }

            element.append(currentInbox, todoContainer, footer());
        return element;
    }
    



    element.append(sideBar(), content())
    
    return element;
}

const form = () => {
    const element = createClassedElement('div', 'task-form-container');
    element.classList.add('closed')

        const exitButton = createClassedElement('div', 'task-form-exit');
            const x = new Image();
            x.src = _plus_png__WEBPACK_IMPORTED_MODULE_4__;
            exitButton.append(x);

        const formTitle = createClassedElement('p', 'form-title');
            formTitle.textContent = 'New To-Do'

        const form = createClassedElement('form','task-form');
        form.method = '';
        form.action = '';

            const titleInput = createClassedElement('textarea', 'todo-form-title');
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

        element.append(exitButton, formTitle, form)
    return element;
}

try {
    document.querySelector('.main').append(header(), page(), form());
} catch (e){
    console.log(e)
}



/////
/////----------------------------------------------------//////
/////


const displayController = (() => {
    let activeInbox;


    const fullInbox = () => {
        // get array of todos
        let x = JSON.parse(localStorage.myTodoList);
        console.log(x);
    }
    
        // logic for selecting inbox and propagating with appropriate todos
    const selectInbox = (target) => {
        document.querySelectorAll('.inbox').forEach((target) => {
            target.classList.remove('active');
        })
        target.classList.add('active');

            // change title depending on current inbox
        document.querySelector('.inbox-h2').textContent = target.textContent;

        switch (target.textContent) {
            case 'INBOX':
                console.log(`You are now in the main inbox`);
                displayController.displayAllTodos();
                break;
            case 'TODAY':
                console.log(`You are now in Today's inbox`);
                displayController.displayTodayTodos();
                break;
            case 'NEXT 7 DAYS':
                console.log(`You are now in This Week's inbox`);
                displayController.displayThisWeekTodos();
                break;
            case 'IMPORTANT':
                console.log(`You are now in the High Priority inbox`);
                displayController.displayImportantTodos();
                break;
            default:
                console.log(`you are now in the ${target.textContent} inbox`)
                displayController.displayProjectTodos(target.textContent);
                break;
        }
    }

    const inboxIsEmpty = () => {
        if (JSON.parse(localStorage.myTodoList).length == 0) {
            return true 
        } 
        else {
            return false
        }
    }

    const getActiveProject = () => {
        let projectList = [...document.querySelectorAll('.project')]
        let currentProject = projectList.filter(project => {
            if ([...project.classList].indexOf('active') != -1) {
                return project;
            }
        })
        return currentProject[0].textContent;
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

            // add conditional for if inbox is empty below
        if (inboxIsEmpty()) {
            if (document.querySelector('.sleepy-container') == null) {
                content.append(div)
            }
        } else {
            if (document.querySelector('.sleepy-container') != null)
            document.querySelector('.sleepy-container').remove();
        }
    }

    const removeTodo = (id) => {
        let currentList = JSON.parse(localStorage.myTodoList);
        let newList = currentList.filter((todo) => {
            if (todo.id != id) {
                return todo
            }
        })

        localStorage.setItem('myTodoList', JSON.stringify(newList));
        displayController.displayAllTodos();
    }

    const createTodo = (todo) => {

        //create todo to add to container (title, date, options)
        const todoContainer = createClassedElement('div', 'todo');

        const priorityLine = createClassedElement('div', 'priority-line');
            switch (todo.priority) {
                case 'Low':
                    priorityLine.style.backgroundColor = 'green'
                    break;
                case 'Medium':
                    priorityLine.style.backgroundColor = 'yellow'
                    break;
                case 'High':
                    priorityLine.style.backgroundColor = 'red'
                    break
                default:
                    priorityLine.style.backgroundColor = 'grey'
                    break;
            }

        const titleP = createClassedElement('p', 'todo-title');
            titleP.textContent = todo.title;

        const dateP = createClassedElement('p', 'todo-date');
            dateP.textContent = todo.dueDate;

        const hiddenID = createClassedElement('p', 'hidden');
            hiddenID.id = 'id'
            hiddenID.textContent = todo.id;

            //options buttons
        const hiddenOptions = createClassedElement('div', 'hidden');
            hiddenOptions.id = 'hidden-options';

            const edit = createClassedElement('div', 'options-edit');
                edit.textContent = 'Edit';
                
            const cancel = createClassedElement('div', 'options-cancel');
                cancel.textContent = 'Cancel'
                cancel.addEventListener('click', () => {
                        document.querySelector('#hidden-options').classList.toggle('hidden');
                    })

            hiddenOptions.append(edit, cancel);

            // todo buttons
        const bin = new Image();
            bin.src = _bin_png__WEBPACK_IMPORTED_MODULE_5__;
            bin.id = 'bin';
            bin.addEventListener('click', (e) => {
                    // target hidden ID of todo;
                let x = e.target.parentElement.lastChild.textContent
                removeTodo(x);
                e.target.parentNode.remove();
            })

        const options = new Image();
            options.src = _dot_menu_png__WEBPACK_IMPORTED_MODULE_6__;
            options.id = 'options';
            options.addEventListener('click', (e) => {
                document.querySelector('#hidden-options').classList.toggle('hidden');
            })

        todoContainer.append(priorityLine, titleP, dateP, options, bin, hiddenOptions, hiddenID);
        document.querySelector('.todos-container').append(todoContainer);
    }

    const clearCurrentInbox = () => {
        const oldContainer = document.querySelector('.todos-container');
        oldContainer.remove();
        const container = createClassedElement('div', 'todos-container');
        document.querySelector('.content').append(container);
    }
    const displayAllTodos = () => {
        if (inboxIsEmpty() == false) {
            clearCurrentInbox();
            JSON.parse(localStorage.myTodoList).forEach((todo) => {
                createTodo(todo);
            })
        } 
        else {displaySleepyCat();}
    }

    const displayTodayTodos = () => {
        if (inboxIsEmpty() == false) {
            clearCurrentInbox();
            let todaysList = JSON.parse(localStorage.myTodoList).filter((todo) => {
                if (_index_js__WEBPACK_IMPORTED_MODULE_2__.dayFuncs.isWithinDay(_index_js__WEBPACK_IMPORTED_MODULE_2__.dayFuncs.today(), todo.dueDate.split('-')[2])) {
                    return todo;
                }
            })
            todaysList.forEach((todo) => {
                createTodo(todo);
            })
        } else {displaySleepyCat();}
    }

    const displayThisWeekTodos = () => {
        if (inboxIsEmpty() == false) {
            clearCurrentInbox();
            let ThisWeekList = JSON.parse(localStorage.myTodoList).filter((todo) => {
                if (_index_js__WEBPACK_IMPORTED_MODULE_2__.dayFuncs.isWithinWeek(_index_js__WEBPACK_IMPORTED_MODULE_2__.dayFuncs.now(), new Date(todo.dueDate).getTime())) {
                    return todo;
                }
            })
            ThisWeekList.forEach((todo) => {
                createTodo(todo);
            })
        } else {displaySleepyCat();}
    }

    const displayImportantTodos = () => {
        if (inboxIsEmpty() == false) {
            clearCurrentInbox();
            let importantList = JSON.parse(localStorage.myTodoList).filter((todo) => {
                if (todo.priority == 'High') return todo
            })
            importantList.forEach((todo) => {
                createTodo(todo);
            })
        } else {displaySleepyCat();}
    }

    const displayProjectTodos = (project) => {
        if (inboxIsEmpty() == false) {
            clearCurrentInbox();
            getActiveProject();
            let projectList = JSON.parse(localStorage.myTodoList).filter((todo) => {
                if(todo.project == getActiveProject()) return todo;
            })
            projectList.forEach((todo) => {
                createTodo(todo);
            })
        }
    }
    

    const clearTodoForm = () => {
        let title = document.querySelector('.todo-form-title');
        let description = document.querySelector('.todo-description');
        let date = document.querySelector('.todo-due-date');
        let priority = document.querySelector('.priority-menu');

        title.value = '';
        description.value = '';
        date.value = '';
        priority.value = '';
    }

    // manual display
    displaySleepyCat();
    displayAllTodos();

    return {
        fullInbox,
        selectInbox,
        displaySleepyCat,
        inboxIsEmpty,
        clearTodoForm,
        displayAllTodos,
        displayTodayTodos,
        displayThisWeekTodos,
        displayImportantTodos,
        displayProjectTodos
    }
})()




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
        let p = createClassedElement('p', 'inbox');
            p.classList.add('project');
            p.addEventListener('click', (e) => {
                displayController.selectInbox(e.target);
            })

        p.textContent = projectName;
        document.querySelector('.projects').appendChild(p);
        _index_js__WEBPACK_IMPORTED_MODULE_2__.storage.storeProject(projectName);
        toggleNewProjectForm();
        clearNewProjectForm();
    };
};

const addTodo = () => {
        // variables to acquire form input values 
    let title = document.querySelector('.todo-form-title');
    let description = document.querySelector('.todo-description');
    let date = document.querySelector('.todo-due-date');
    let priority = document.querySelector('.priority-menu');

        // sets current project key and gives value if a project is selected
    let currentProject;
    let projects = [...document.querySelectorAll('.project')]

    projects.forEach(project => {
        let list = [...project.classList];
        if (list.indexOf('active') != -1) {
            currentProject = project.textContent;
        }
    })

    let todo = new _index_js__WEBPACK_IMPORTED_MODULE_2__.Todo(localStorage.id, title.value, description.value, date.value, priority.value, currentProject);
    console.log(todo);
        // store todo in local storage
    _index_js__WEBPACK_IMPORTED_MODULE_2__.storage.storeItem(todo);

        // check if empty inbox image needs to be removed
    displayController.displaySleepyCat();

    displayController.clearTodoForm();
}

const addNotes = (id) => {
        //grab todo from storage
    let obj = JSON.parse(localStorage.myTodoList)[id];
        //make a copy of todos list;
    let newList = JSON.parse(localStorage.myTodoList);
        //set notes of todo
    obj.notes = 'do some stuff'
        // update value in todos list
    newList[id] = obj;
        // restore todos list in local storage
    localStorage.setItem('myTodoList', JSON.stringify(newList));
}



/////
/////-----------------------------------------------------------------------------------------
/////



/////
///// SIDEBAR MEDIA QUERY LISTENERS--------------------------------
/////

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


let hideMenu = window.matchMedia("(max-width: 400px)");
menuHider(hideMenu);
hideMenu.addEventListener('change', menuHider);

let sizeMenu = window.matchMedia("(max-width: 800px)");
sizeMenu.addEventListener('change', fullscreenMenu);


/////
/////--------------------------------------------------------------
/////



/////
///// SIDEBAR EVENT LISTENERS & FUNCTIONS--------------------------------------
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

    // hamburger menu button, toggles sidebar
document.querySelector('#menu-button').addEventListener('click', () => {
    toggleSidebar();
});

    // toggles new project form on click of new project button
document.querySelector('.new-project').addEventListener('click', () => {
    toggleNewProjectForm();
});

    // cancels and resets new project input 
document.querySelector('.new-project-cancel').addEventListener('click', () => {
    toggleNewProjectForm();
    clearNewProjectForm();
});
    // adds project to storage
document.querySelector('.add-button').addEventListener('click', addProject)

const loadProjects = () => {
    if (_index_js__WEBPACK_IMPORTED_MODULE_2__.storage.getProjects() !== null) {
        JSON.parse(_index_js__WEBPACK_IMPORTED_MODULE_2__.storage.getProjects()).forEach(project => {
            let p = createClassedElement('p', 'inbox');
            p.classList.add('project');
            p.textContent = project;
            p.addEventListener('click', (e) => {
                displayController.selectInbox(e.target);
                // console.log(e.target)
                //
                //
                //
                //
                //
                //
            })
            document.querySelector('.projects').appendChild(p)
        });
    }
}

    // prevent default of project form
document.querySelector('.project-form').addEventListener('keypress', () => {
    event.preventDefault();
})

document.addEventListener('DOMContentLoaded', () => {
        // display projects on page load
    loadProjects();
})
    // inbox selector listener
document.querySelectorAll('.inbox').forEach((node) => {
    node.addEventListener('click', (e) => {
        displayController.selectInbox(e.target)
    })
})


/////
/////------------------------------------------------------
/////



/////
/////
/////-----NEW TASK EVENT LISTENERS-----------------------------------
/////
/////

const toggleNewTaskWindow = () => {
    document.querySelector('.task-form-container').classList.toggle('closed');
}
    // open new task window on "add task" button click
document.querySelector('.add-task-button').addEventListener('click', () => {
    toggleNewTaskWindow();
})

    // close new task window and clear form with exit button
document.querySelector('.task-form-exit').addEventListener('click', () => {
    displayController.clearTodoForm();
    toggleNewTaskWindow();
})

    // add to do and close new task window
document.querySelector('.submit-task').addEventListener('click', (e) => {
    e.preventDefault();
    
    if (document.querySelector('.todo-form-title').value 
    && document.querySelector('.todo-description').value 
    && document.querySelector('.todo-due-date').value) {
        addTodo();    
        toggleNewTaskWindow();
    } else {
        alert('Please fill in all required fields');
    }
    
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
/* harmony export */   "dayFuncs": () => (/* binding */ dayFuncs),
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
    if (localStorage.getItem('myTodoList') == null) {
        localStorage.setItem('myTodoList', JSON.stringify([]))
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

    const today = () => {
        return new Date().getDate();
    }

    const isWithinDay = (today, day) => {
        return (today == day);
    }

    const isWithinWeek = (now, day) => {
        return ((day - now) < weekLength);
    }

    return {
        now, 
        today,
        isWithinDay,
        isWithinWeek
    }
})()









/////------------------- TESTING

// storage.storeItem(new Todo(storage.getID(), 'today', 'things to do today','april 10', 'low'));
// storage.storeItem(new Todo(storage.getID(), 'tomorrow', 'do stuff', 'tomorrow', 'medium'));







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

/***/ "./src/bin.png":
/*!*********************!*\
  !*** ./src/bin.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c008412cc22aa743721a.png";

/***/ }),

/***/ "./src/dot-menu.png":
/*!**************************!*\
  !*** ./src/dot-menu.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b101322e920e5d0a327.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksTUFBTSxLQUFLLFdBQVcsYUFBYSxZQUFZLGFBQWEsTUFBTSxNQUFNLGFBQWEsT0FBTyxNQUFNLGFBQWEsT0FBTyxNQUFNLFdBQVcsYUFBYSxjQUFjLE9BQU8sS0FBSyxXQUFXLGFBQWEsY0FBYyxZQUFZLGFBQWEsY0FBYyxjQUFjLGNBQWMsWUFBWSxXQUFXLGFBQWEsY0FBYyxNQUFNLE1BQU0sV0FBVyxhQUFhLFlBQVksTUFBTSxNQUFNLFdBQVcsYUFBYSxjQUFjLGNBQWMsT0FBTyxNQUFNLFdBQVcsYUFBYSxPQUFPLE1BQU0sYUFBYSxZQUFZLGFBQWEsT0FBTyxNQUFNLFdBQVcsV0FBVyxhQUFhLFlBQVksYUFBYSxjQUFjLGNBQWMsY0FBYyxZQUFZLE9BQU8sTUFBTSxhQUFhLGNBQWMsUUFBUSxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLGFBQWEsYUFBYSxNQUFNLEtBQUssYUFBYSxjQUFjLGNBQWMsT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLGFBQWEsY0FBYyxjQUFjLGNBQWMsWUFBWSxXQUFXLFdBQVcsY0FBYyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxhQUFhLGNBQWMsWUFBWSxPQUFPLE1BQU0sYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxhQUFhLGNBQWMsWUFBWSxTQUFTLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVB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b0Isc0NBQVE7QUFDNUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxvQkFBb0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdDQUFPO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdnJCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEVBQUU7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlpQzs7Ozs7O0FBTWxDOztBQUVBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLXN0dWZmLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9EZWtrby1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vUXVpY2tzYW5kLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IERla2tvO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1nYW1ib2dlOiAjRUM5QTI5O1xcbiAgICAtLWJsYWNrT2xpdmU6ICMzQjQxM0M7XFxuICAgIC0tYXNoR3JheTogIzlEQjVCMjtcXG4gICAgLS1saWdodEN5YW46ICNEQUYwRUU7XFxuICAgIC0tdGlmZmFueUJsdWU6ICM5NEQxQkU7XFxuICAgIC0tYnVmZjogI0VEQjg4QjtcXG4gICAgLS10YXVwZTogIzg1N0M4RDtcXG4gICAgLS1waW5lOiAjMTM2RjYzO1xcbiAgICAtLWFwcmljb3Q6ICNGRkM5QjU7XFxuICAgIC0tYmxhY2s6ICMwNTA1MDU7XFxuICAgIC0tbGlnaHRHcmF5OiAjQ0NDQ0NDO1xcbiAgICAtLXdoaXRlOiAjRjVGNUY1O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LCBcXG5odG1sIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogYXV0byAxZnIgYXV0byAvIGF1dG8gMWZyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgIGhlaWdodDogNTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTVweDtcXG4gICAgcGFkZGluZzogMC41cmVtIDByZW0gMC41cmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XFxufVxcblxcbiAgICAjbWVudS1idXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA4cHg7XFxuICAgICAgICBsZWZ0OiAzMnB4O1xcbiAgICB9XFxuICAgICAgICAjbWVudS1idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q3lhbik7XFxuICAgICAgICB9XFxuXFxuICAgIC5hZGQtdGFzay1idXR0b24ge1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICByaWdodDogNDBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGQxYmU1MjtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFzaEdyYXkpO1xcbiAgICB9XFxuICAgICNhZGQtdGFzay1wbHVzIHtcXG4gICAgICAgIGhlaWdodDogMTVweDtcXG4gICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgICAgICAuYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICB9XFxuXFxuLnBhZ2Uge1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q3lhbik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGQxYmU1MjsgICAgXFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZDogYXV0byAxZnIgLyAxZnI7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cywgd2lkdGggMC43NXMsIGhlaWdodCAwLjc1cyxcXG4gICAgICAgIG1hcmdpbiAwLjc1cywgdmlzaWJpbGl0eSAwLjVzO1xcbiAgICB9XFxuICAgICAgICAuc2lkZWJhci5jbG9zZWQsIFxcbiAgICAgICAgLnRhc2stZm9ybS1jb250YWluZXIuY2xvc2VkIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgICB3aWR0aDogMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuICAgICAgICAuZnVsbC1zY3JlZW4ge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIH1cXG4gICAgICAgIC5zaWRlYmFyIGgyIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxuICAgICAgICB9XFxuICAgICAgICAuc2lkZWJhciBwIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5zaWRlYmFyIHA6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAgICAgLnNpZGViYXIgLmhvbWUsIFxcbiAgICAgICAgLnNpZGViYXIgLnByb2plY3RzIHtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAubmV3LXByb2plY3Qge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5uZXctcHJvamVjdCBwIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnNpZGViYXIgLm5ldy1wcm9qZWN0OmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpZmZhbnlCbHVlKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjcGx1cyB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XFxuICAgICAgICAgICAgICAgICAgICBwbGFjZS1zZWxmOiBzdGFydDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgICBncmlkOiAxZnIgMWZyIC8gMWZyIDFmcjtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAwIDE1cHg7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDeWFuKTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXByaWNvdCk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNzVzLCBvcGFjaXR5IDAuNzVzLCB2aXNpYmlsaXR5IDAuNzVzO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnByb2plY3QtZm9ybS5oaWRkZW57XFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXByaWNvdCk7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnByb2plY3QtZm9ybSBpbnB1dDpmb2N1cyB7XFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYXByaWNvdCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmZvcm0tYnV0dG9ucyB7XFxuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnByb2plY3QtZm9ybSBidXR0b24ge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICB2YXIoLS1ibGFja09saXZlKTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHJpY290KTtcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAucHJvamVjdC1mb3JtIGJ1dHRvbjpudGgtY2hpbGQoMSl7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpZmZhbnlCbHVlKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAucHJvamVjdHMgLmluYm94IHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAuY29udGVudCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEN5YW4pO1xcbiAgICAgICAgZmxleDogYXV0bztcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIH1cXG5cXG4gICAgICAgIC5pbmJveC10aXRsZSB7XFxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDY3cHg7XFxuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHggcmlkZ2UgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIyNik7XFxuICAgICAgICB9IFxcbiAgICAgICAgLmluYm94LXRpdGxlIGgyIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvZG8ge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlmZmFueUJsdWUpO1xcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5wcmlvcml0eS1saW5lIHtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogN3B4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnRvZG8tdGl0bGUge1xcbiAgICAgICAgICAgICAgICBmbGV4OiBhdXRvO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC50b2RvOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IDJweCByZ2IoMCAwIDAgLyAyMCUpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnRvZG8gaW1nIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAjaGlkZGVuLW9wdGlvbnMge1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMzBweDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjaGlkZGVuLW9wdGlvbnMgZGl2IHtcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAjaGlkZGVuLW9wdGlvbnMgZGl2OmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLnNsZWVweS1jb250YWluZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5zbGVlcHkge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5zbGVlcHktdGV4dCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIFxcbiAgICAgIFxcbmZvb3RlciB7XFxuICAgIGZvbnQtZmFtaWx5OiBEZWtrbztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi50YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hc2hHcmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzLCB2aXNpYmlsaXR5IDAuMjVzLCBoZWlnaHQgMC43NXMsXFxuICAgICAgICAgICAgICAgIHdpZHRoIDAuNzVzO1xcbn0gXFxuICAgIC50YXNrLWZvcm0tY29udGFpbmVyLCBcXG4gICAgLnRhc2stZm9ybS1jb250YWluZXIuY2xvc2VkIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIG1hcmdpbjphdXRvO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgfVxcbiAgICAudGFzay1mb3JtIHtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQ6IGF1dG8gYXV0byBhdXRvIC8gMWZyIDFmcjtcXG4gICAgfVxcbiAgICAgICAgLnRhc2stZm9ybS1leGl0IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XFxuICAgICAgICAgICAgdG9wOiAxNXB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRhc2stZm9ybS1leGl0IGltZ3tcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmZvcm0tdGl0bGUge1xcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAycmVtIDAgMnJlbTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRvZG8tZm9ybS10aXRsZSxcXG4gICAgICAgIC50b2RvLWRlc2NyaXB0aW9uLFxcbiAgICAgICAgLnRvZG8tZHVlLWRhdGUsXFxuICAgICAgICAucHJpb3JpdHktbWVudSxcXG4gICAgICAgIC5zdWJtaXQtdGFzayB7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk0ZDFiZThjO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC50b2RvLWZvcm0tdGl0bGUge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDcwdnc7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZHVlLWRhdGUtcHJpby1jb250YWluZXIge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB9XFxuICAgICAgICAudG9kby1kdWUtZGF0ZSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhc2stZm9ybSB0ZXh0YXJlYTpmb2N1cyxcXG4gICAgICAgIC50YXNrLWZvcm0gaW5wdXQ6Zm9jdXMsXFxuICAgICAgICAucHJpb3JpdHktbWVudTpmb2N1cyB7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkMWJlMTM7XFxuICAgICAgICB9XFxuICAgICAgICAuc3VibWl0LXRhc2sge1xcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLnN1Ym1pdC10YXNrOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZDFiZWM1O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIH1cXG5cXG4uY2xvc2VkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjMzMzO1xcbn1cXG5hOmhvdmVyIHtcXG4gICAgY29sb3I6ICM0QjRCNEI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlmZmFueUJsdWUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQiw0Q0FBNkI7QUFDakM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qiw0Q0FBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFB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Q2IsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixlQUFlO1lBQ2YsbUJBQW1CO1FBQ3ZCO1lBQ0k7Z0JBQ0ksMkJBQTJCO2dCQUMzQixtQkFBbUI7WUFDdkI7O0FBRVo7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogRGVra287XFxuICAgIHNyYzogdXJsKC4vRGVra28tUmVndWxhci50dGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgc3JjOiB1cmwoLi9RdWlja3NhbmQudHRmKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWdhbWJvZ2U6ICNFQzlBMjk7XFxuICAgIC0tYmxhY2tPbGl2ZTogIzNCNDEzQztcXG4gICAgLS1hc2hHcmF5OiAjOURCNUIyO1xcbiAgICAtLWxpZ2h0Q3lhbjogI0RBRjBFRTtcXG4gICAgLS10aWZmYW55Qmx1ZTogIzk0RDFCRTtcXG4gICAgLS1idWZmOiAjRURCODhCO1xcbiAgICAtLXRhdXBlOiAjODU3QzhEO1xcbiAgICAtLXBpbmU6ICMxMzZGNjM7XFxuICAgIC0tYXByaWNvdDogI0ZGQzlCNTtcXG4gICAgLS1ibGFjazogIzA1MDUwNTtcXG4gICAgLS1saWdodEdyYXk6ICNDQ0NDQ0M7XFxuICAgIC0td2hpdGU6ICNGNUY1RjU7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksIFxcbmh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiBhdXRvIDFmciBhdXRvIC8gYXV0byAxZnI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgaGVpZ2h0OiA1NnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1NXB4O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMHJlbSAwLjVyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmF5KTtcXG59XFxuXFxuICAgICNtZW51LWJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDhweDtcXG4gICAgICAgIGxlZnQ6IDMycHg7XFxuICAgIH1cXG4gICAgICAgICNtZW51LWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDeWFuKTtcXG4gICAgICAgIH1cXG5cXG4gICAgLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiA0MHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZDFiZTUyO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXNoR3JheSk7XFxuICAgIH1cXG4gICAgI2FkZC10YXNrLXBsdXMge1xcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgICAgIC5hZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgIH1cXG5cXG4ucGFnZSB7XFxuICAgIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDeWFuKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZDFiZTUyOyAgICBcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkOiBhdXRvIDFmciAvIDFmcjtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzLCB3aWR0aCAwLjc1cywgaGVpZ2h0IDAuNzVzLFxcbiAgICAgICAgbWFyZ2luIDAuNzVzLCB2aXNpYmlsaXR5IDAuNXM7XFxuICAgIH1cXG4gICAgICAgIC5zaWRlYmFyLmNsb3NlZCwgXFxuICAgICAgICAudGFzay1mb3JtLWNvbnRhaW5lci5jbG9zZWQge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICAgIHdpZHRoOiAwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5mdWxsLXNjcmVlbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgfVxcbiAgICAgICAgLnNpZGViYXIgaDIge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5zaWRlYmFyIHAge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLnNpZGViYXIgcDpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpZmZhbnlCbHVlKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICAuc2lkZWJhciAuaG9tZSwgXFxuICAgICAgICAuc2lkZWJhciAucHJvamVjdHMge1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5uZXctcHJvamVjdCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgICAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLm5ldy1wcm9qZWN0IHAge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuc2lkZWJhciAubmV3LXByb2plY3Q6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlmZmFueUJsdWUpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNwbHVzIHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnByb2plY3QtZm9ybSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgICAgIGdyaWQ6IDFmciAxZnIgLyAxZnIgMWZyO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDAgMTVweDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEN5YW4pO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHJpY290KTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC43NXMsIG9wYWNpdHkgMC43NXMsIHZpc2liaWxpdHkgMC43NXM7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAucHJvamVjdC1mb3JtLmhpZGRlbntcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnByb2plY3QtZm9ybSBpbnB1dCB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHJpY290KTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAucHJvamVjdC1mb3JtIGlucHV0OmZvY3VzIHtcXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1hcHJpY290KTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuZm9ybS1idXR0b25zIHtcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMztcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAucHJvamVjdC1mb3JtIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTI1cHg7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIHZhcigtLWJsYWNrT2xpdmUpO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcmljb3QpO1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0gYnV0dG9uOm50aC1jaGlsZCgxKXtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlmZmFueUJsdWUpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC5wcm9qZWN0cyAuaW5ib3gge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q3lhbik7XFxuICAgICAgICBmbGV4OiBhdXRvO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgfVxcblxcbiAgICAgICAgLmluYm94LXRpdGxlIHtcXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgICAgIGhlaWdodDogNjdweDtcXG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCByaWRnZSByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjI2KTtcXG4gICAgICAgIH0gXFxuICAgICAgICAuaW5ib3gtdGl0bGUgaDIge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kbyB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLnByaW9yaXR5LWxpbmUge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA3cHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAudG9kby10aXRsZSB7XFxuICAgICAgICAgICAgICAgIGZsZXg6IGF1dG87XFxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnRvZG86aG92ZXIge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA1KTtcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggMnB4IHJnYigwIDAgMCAvIDIwJSk7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAudG9kbyBpbWcge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICNoaWRkZW4tb3B0aW9ucyB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgICAgICByaWdodDogNTBweDtcXG4gICAgICAgICAgICAgICAgYm90dG9tOiAzMHB4O1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNoaWRkZW4tb3B0aW9ucyBkaXYge1xcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICNoaWRkZW4tb3B0aW9ucyBkaXY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAuc2xlZXB5LWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLnNsZWVweSB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnNsZWVweS10ZXh0IHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgXFxuICAgICAgXFxuZm9vdGVyIHtcXG4gICAgZm9udC1mYW1pbHk6IERla2tvO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLnRhc2stZm9ybS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWFzaEdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMsIHZpc2liaWxpdHkgMC4yNXMsIGhlaWdodCAwLjc1cyxcXG4gICAgICAgICAgICAgICAgd2lkdGggMC43NXM7XFxufSBcXG4gICAgLnRhc2stZm9ybS1jb250YWluZXIsIFxcbiAgICAudGFzay1mb3JtLWNvbnRhaW5lci5jbG9zZWQge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgbWFyZ2luOmF1dG87XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB9XFxuICAgIC50YXNrLWZvcm0ge1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZDogYXV0byBhdXRvIGF1dG8gLyAxZnIgMWZyO1xcbiAgICB9XFxuICAgICAgICAudGFzay1mb3JtLWV4aXQge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICByaWdodDogMTVweDtcXG4gICAgICAgICAgICB0b3A6IDE1cHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICAudGFzay1mb3JtLWV4aXQgaW1ne1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICB9XFxuICAgICAgICAuZm9ybS10aXRsZSB7XFxuICAgICAgICAgICAgbWFyZ2luOiAycmVtIDJyZW0gMCAycmVtO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxuICAgICAgICB9XFxuICAgICAgICAudG9kby1mb3JtLXRpdGxlLFxcbiAgICAgICAgLnRvZG8tZGVzY3JpcHRpb24sXFxuICAgICAgICAudG9kby1kdWUtZGF0ZSxcXG4gICAgICAgIC5wcmlvcml0eS1tZW51LFxcbiAgICAgICAgLnN1Ym1pdC10YXNrIHtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTRkMWJlOGM7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRvZG8tZm9ybS10aXRsZSB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogNzB2dztcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMztcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgd2lkdGg6IDcwdnc7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5kdWUtZGF0ZS1wcmlvLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIH1cXG4gICAgICAgIC50b2RvLWR1ZS1kYXRlIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFzay1mb3JtIHRleHRhcmVhOmZvY3VzLFxcbiAgICAgICAgLnRhc2stZm9ybSBpbnB1dDpmb2N1cyxcXG4gICAgICAgIC5wcmlvcml0eS1tZW51OmZvY3VzIHtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGQxYmUxMztcXG4gICAgICAgIH1cXG4gICAgICAgIC5zdWJtaXQtdGFzayB7XFxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuc3VibWl0LXRhc2s6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkMWJlYzU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgfVxcblxcbi5jbG9zZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcbmE6aG92ZXIge1xcbiAgICBjb2xvcjogIzRCNEI0QjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBtZW51SWNvbiBmcm9tICcuL21lbnUuc3ZnJztcbmltcG9ydCAqIGFzIGluZGV4IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IGNhdEljb24gZnJvbSAnLi9zbGVlcHkucG5nJztcbmltcG9ydCBwbHVzSWNvbiBmcm9tICcuL3BsdXMucG5nJztcbmltcG9ydCBiaW5JY29uIGZyb20gJy4vYmluLnBuZyc7XG5pbXBvcnQgZG90TWVudUljb24gZnJvbSAnLi9kb3QtbWVudS5wbmcnO1xuXG5cblxuY29uc3QgY3JlYXRlQ2xhc3NlZEVsZW1lbnQgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYgKGNsYXNzTmFtZSkgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5jb25zdCBtYWluRGl2ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdtYWluJyk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBjb25zdCBtZW51QnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBtZW51QnV0dG9uLnNyYyA9IG1lbnVJY29uO1xuICAgICAgICAgICAgbWVudUJ1dHRvbi5pZCA9ICdtZW51LWJ1dHRvbic7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ2FkZC10YXNrLWJ1dHRvbicpO1xuICAgICAgICAgICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBREQgVEFTSydcbiAgICAgICAgICAgIGNvbnN0IHBsdXMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHBsdXMuc3JjID0gcGx1c0ljb247XG4gICAgICAgICAgICBwbHVzLmlkID0gJ2FkZC10YXNrLXBsdXMnXG4gICAgICAgICAgICBhZGRUYXNrQnV0dG9uLmFwcGVuZChwbHVzKTtcblxuICAgIGVsZW1lbnQuYXBwZW5kKG1lbnVCdXR0b24sIGFkZFRhc2tCdXR0b24pXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cblxuXG5jb25zdCBwYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ3BhZ2UnKTtcblxuXG5cbiAgICBjb25zdCBzaWRlQmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdzaWRlYmFyJyk7XG4gICAgICAgICAgICBjb25zdCBob21lID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ2hvbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaDIgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyLnRleHRDb250ZW50ID0gXCJIT01FXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluYm94ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAnaW5ib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluYm94LnRleHRDb250ZW50ID0gXCJJTkJPWFwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ2luYm94Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RheS50ZXh0Q29udGVudCA9IFwiVE9EQVlcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGhpc1dlZWsgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdpbmJveCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1dlZWsudGV4dENvbnRlbnQgPSBcIk5FWFQgNyBEQVlTXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltcG9ydGFudCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ2luYm94Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQudGV4dENvbnRlbnQgPSBcIklNUE9SVEFOVFwiO1xuXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGgyLCBpbmJveCwgdG9kYXksIHRoaXNXZWVrLCBpbXBvcnRhbnQpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAncHJvamVjdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaDIgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyLnRleHRDb250ZW50ID0gXCJQUk9KRUNUU1wiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2Zvcm0nLCAncHJvamVjdC1mb3JtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lTGFiZWwuSFRNTGZvciA9ICduZXctcHJvamVjdC1uYW1lJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gJ1Byb2plY3QgTmFtZTonXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lSW5wdXQuaWQgPSAnbmV3LXByb2plY3QtbmFtZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUlucHV0Lm1heCA9IDIwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b25zRGl2ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdmb3JtLWJ1dHRvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnYnV0dG9uJywgJ2FkZC1idXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uLnR5cGUgPSAnYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdidXR0b24nLCAnbmV3LXByb2plY3QtY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc0Rpdi5hcHBlbmQoYWRkQnV0dG9uLCBjYW5jZWxCdXR0b24pXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZChuYW1lTGFiZWwsIG5hbWVJbnB1dCwgYnV0dG9uc0RpdilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnbmV3LXByb2plY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSAnQUREIE5FVyBQUk9KRUNUJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsdXMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVzLnNyYyA9IHBsdXNJY29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdXMuaWQgPSAncGx1cydcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3QuYXBwZW5kKHAsIHBsdXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgbmV3IHByb2plY3QgKyBcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoaDIsIG5ld1Byb2plY3QsIGZvcm0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoaG9tZSgpLCBwcm9qZWN0cygpKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnY29udGVudCcpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEluYm94ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdpbmJveC10aXRsZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRIMiA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdoMicsICdpbmJveC1oMicpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRIMi50ZXh0Q29udGVudCA9IGBDdXJyZW50IEluYm94YFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmJveC5hcHBlbmRDaGlsZChjdXJyZW50SDIpO1xuICAgICAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAndG9kb3MtY29udGFpbmVyJyk7XG4gICBcbiAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgIGNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2Zvb3RlcicsICdmb290ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhLmlubmVySFRNTCA9ICdnaXRodWIuY29tL3J1YmJlcnRlZXRoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9ydWJiZXJ0ZWV0aCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmEudGFyZ2V0ID0gJ19ibGFuaydcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChwYXJhKVxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGN1cnJlbnRJbmJveCwgdG9kb0NvbnRhaW5lciwgZm9vdGVyKCkpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgXG5cblxuXG4gICAgZWxlbWVudC5hcHBlbmQoc2lkZUJhcigpLCBjb250ZW50KCkpXG4gICAgXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAndGFzay1mb3JtLWNvbnRhaW5lcicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJylcblxuICAgICAgICBjb25zdCBleGl0QnV0dG9uID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICd0YXNrLWZvcm0tZXhpdCcpO1xuICAgICAgICAgICAgY29uc3QgeCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgeC5zcmMgPSBwbHVzSWNvbjtcbiAgICAgICAgICAgIGV4aXRCdXR0b24uYXBwZW5kKHgpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1UaXRsZSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ2Zvcm0tdGl0bGUnKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdOZXcgVG8tRG8nXG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdmb3JtJywndGFzay1mb3JtJyk7XG4gICAgICAgIGZvcm0ubWV0aG9kID0gJyc7XG4gICAgICAgIGZvcm0uYWN0aW9uID0gJyc7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgndGV4dGFyZWEnLCAndG9kby1mb3JtLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGl0bGU6IGV4LiAnR3ltJ1wiO1xuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQucm93cyA9ICcyJ1xuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQubWF4ID0gNDA7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgndGV4dGFyZWEnLCAndG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uOiBleC4gJ1dvcmsgb24gY2FyZGlvJ1wiO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucm93cyA9ICc1J1xuXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ2R1ZS1kYXRlLXByaW8tY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2lucHV0JywgJ3RvZG8tZHVlLWRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5wbGFjZWhvbGRlciA9ICdERC9NTS9ZWVlZJztcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdzZWxlY3QnLCAncHJpb3JpdHktbWVudScpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eS5pbm5lckhUTUwgPSBgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPlByaW9yaXR5IChvcHRpb25hbCk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG93XCI+TG93PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+SGlnaDwvb3B0aW9uPmA7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChkdWVEYXRlSW5wdXQsIHByaW9yaXR5KVxuXG4gICAgICAgICAgICBjb25zdCBzdWJtaXRUYXNrID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2J1dHRvbicsICdzdWJtaXQtdGFzaycpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFRhc2sudHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFRhc2sudGV4dENvbnRlbnQgPSAnQUREIFRPIERPJ1xuXG4gICAgICAgICAgICBmb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBkZXNjcmlwdGlvbklucHV0LCBjb250YWluZXIsIHN1Ym1pdFRhc2spXG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmQoZXhpdEJ1dHRvbiwgZm9ybVRpdGxlLCBmb3JtKVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG50cnkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykuYXBwZW5kKGhlYWRlcigpLCBwYWdlKCksIGZvcm0oKSk7XG59IGNhdGNoIChlKXtcbiAgICBjb25zb2xlLmxvZyhlKVxufVxuXG5cblxuLy8vLy9cbi8vLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vLy8vL1xuLy8vLy9cblxuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgbGV0IGFjdGl2ZUluYm94O1xuXG5cbiAgICBjb25zdCBmdWxsSW5ib3ggPSAoKSA9PiB7XG4gICAgICAgIC8vIGdldCBhcnJheSBvZiB0b2Rvc1xuICAgICAgICBsZXQgeCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm15VG9kb0xpc3QpO1xuICAgICAgICBjb25zb2xlLmxvZyh4KTtcbiAgICB9XG4gICAgXG4gICAgICAgIC8vIGxvZ2ljIGZvciBzZWxlY3RpbmcgaW5ib3ggYW5kIHByb3BhZ2F0aW5nIHdpdGggYXBwcm9wcmlhdGUgdG9kb3NcbiAgICBjb25zdCBzZWxlY3RJbmJveCA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluYm94JykuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgLy8gY2hhbmdlIHRpdGxlIGRlcGVuZGluZyBvbiBjdXJyZW50IGluYm94XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC1oMicpLnRleHRDb250ZW50ID0gdGFyZ2V0LnRleHRDb250ZW50O1xuXG4gICAgICAgIHN3aXRjaCAodGFyZ2V0LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICBjYXNlICdJTkJPWCc6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFlvdSBhcmUgbm93IGluIHRoZSBtYWluIGluYm94YCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheUFsbFRvZG9zKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUT0RBWSc6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFlvdSBhcmUgbm93IGluIFRvZGF5J3MgaW5ib3hgKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5VG9kYXlUb2RvcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTkVYVCA3IERBWVMnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3UgYXJlIG5vdyBpbiBUaGlzIFdlZWsncyBpbmJveGApO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlUaGlzV2Vla1RvZG9zKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdJTVBPUlRBTlQnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3UgYXJlIG5vdyBpbiB0aGUgSGlnaCBQcmlvcml0eSBpbmJveGApO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlJbXBvcnRhbnRUb2RvcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgeW91IGFyZSBub3cgaW4gdGhlICR7dGFyZ2V0LnRleHRDb250ZW50fSBpbmJveGApXG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheVByb2plY3RUb2Rvcyh0YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5ib3hJc0VtcHR5ID0gKCkgPT4ge1xuICAgICAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UubXlUb2RvTGlzdCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlIFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JyldXG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0LmZpbHRlcihwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChbLi4ucHJvamVjdC5jbGFzc0xpc3RdLmluZGV4T2YoJ2FjdGl2ZScpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdFswXS50ZXh0Q29udGVudDtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5U2xlZXB5Q2F0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ3NsZWVweS1jb250YWluZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdzbGVlcHktdGV4dCcpO1xuICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSAnWW91IGhhdmUgbm8gY3VycmVudCB0YXNrcyc7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gY2F0SWNvbjtcbiAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnc2xlZXB5Jyk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kKGltZywgcCk7XG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICAgICAgICAgIC8vIGFkZCBjb25kaXRpb25hbCBmb3IgaWYgaW5ib3ggaXMgZW1wdHkgYmVsb3dcbiAgICAgICAgaWYgKGluYm94SXNFbXB0eSgpKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsZWVweS1jb250YWluZXInKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmQoZGl2KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGVlcHktY29udGFpbmVyJykgIT0gbnVsbClcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGVlcHktY29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUb2RvID0gKGlkKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm15VG9kb0xpc3QpO1xuICAgICAgICBsZXQgbmV3TGlzdCA9IGN1cnJlbnRMaXN0LmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8uaWQgIT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kb1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkobmV3TGlzdCkpO1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsVG9kb3MoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKHRvZG8pID0+IHtcblxuICAgICAgICAvL2NyZWF0ZSB0b2RvIHRvIGFkZCB0byBjb250YWluZXIgKHRpdGxlLCBkYXRlLCBvcHRpb25zKVxuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICd0b2RvJyk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlMaW5lID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdwcmlvcml0eS1saW5lJyk7XG4gICAgICAgICAgICBzd2l0Y2ggKHRvZG8ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdMb3cnOlxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxpbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdNZWRpdW0nOlxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxpbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdydcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnSGlnaCc6XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TGluZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJ1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TGluZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSdcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGl0bGVQID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAndG9kby10aXRsZScpO1xuICAgICAgICAgICAgdGl0bGVQLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgICAgICBjb25zdCBkYXRlUCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ3RvZG8tZGF0ZScpO1xuICAgICAgICAgICAgZGF0ZVAudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG5cbiAgICAgICAgY29uc3QgaGlkZGVuSUQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdoaWRkZW4nKTtcbiAgICAgICAgICAgIGhpZGRlbklELmlkID0gJ2lkJ1xuICAgICAgICAgICAgaGlkZGVuSUQudGV4dENvbnRlbnQgPSB0b2RvLmlkO1xuXG4gICAgICAgICAgICAvL29wdGlvbnMgYnV0dG9uc1xuICAgICAgICBjb25zdCBoaWRkZW5PcHRpb25zID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdoaWRkZW4nKTtcbiAgICAgICAgICAgIGhpZGRlbk9wdGlvbnMuaWQgPSAnaGlkZGVuLW9wdGlvbnMnO1xuXG4gICAgICAgICAgICBjb25zdCBlZGl0ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdvcHRpb25zLWVkaXQnKTtcbiAgICAgICAgICAgICAgICBlZGl0LnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2FuY2VsID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdvcHRpb25zLWNhbmNlbCcpO1xuICAgICAgICAgICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hpZGRlbi1vcHRpb25zJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGhpZGRlbk9wdGlvbnMuYXBwZW5kKGVkaXQsIGNhbmNlbCk7XG5cbiAgICAgICAgICAgIC8vIHRvZG8gYnV0dG9uc1xuICAgICAgICBjb25zdCBiaW4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGJpbi5zcmMgPSBiaW5JY29uO1xuICAgICAgICAgICAgYmluLmlkID0gJ2Jpbic7XG4gICAgICAgICAgICBiaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyB0YXJnZXQgaGlkZGVuIElEIG9mIHRvZG87XG4gICAgICAgICAgICAgICAgbGV0IHggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RDaGlsZC50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgIHJlbW92ZVRvZG8oeCk7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgb3B0aW9ucy5zcmMgPSBkb3RNZW51SWNvbjtcbiAgICAgICAgICAgIG9wdGlvbnMuaWQgPSAnb3B0aW9ucyc7XG4gICAgICAgICAgICBvcHRpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGlkZGVuLW9wdGlvbnMnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlMaW5lLCB0aXRsZVAsIGRhdGVQLCBvcHRpb25zLCBiaW4sIGhpZGRlbk9wdGlvbnMsIGhpZGRlbklEKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpLmFwcGVuZCh0b2RvQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhckN1cnJlbnRJbmJveCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb2xkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpO1xuICAgICAgICBvbGRDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAndG9kb3MtY29udGFpbmVyJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykuYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgfVxuICAgIGNvbnN0IGRpc3BsYXlBbGxUb2RvcyA9ICgpID0+IHtcbiAgICAgICAgaWYgKGluYm94SXNFbXB0eSgpID09IGZhbHNlKSB7XG4gICAgICAgICAgICBjbGVhckN1cnJlbnRJbmJveCgpO1xuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UubXlUb2RvTGlzdCkuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtkaXNwbGF5U2xlZXB5Q2F0KCk7fVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlUb2RheVRvZG9zID0gKCkgPT4ge1xuICAgICAgICBpZiAoaW5ib3hJc0VtcHR5KCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNsZWFyQ3VycmVudEluYm94KCk7XG4gICAgICAgICAgICBsZXQgdG9kYXlzTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm15VG9kb0xpc3QpLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleC5kYXlGdW5jcy5pc1dpdGhpbkRheShpbmRleC5kYXlGdW5jcy50b2RheSgpLCB0b2RvLmR1ZURhdGUuc3BsaXQoJy0nKVsyXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRvZGF5c0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge2Rpc3BsYXlTbGVlcHlDYXQoKTt9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVRoaXNXZWVrVG9kb3MgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpbmJveElzRW1wdHkoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgY2xlYXJDdXJyZW50SW5ib3goKTtcbiAgICAgICAgICAgIGxldCBUaGlzV2Vla0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5teVRvZG9MaXN0KS5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXguZGF5RnVuY3MuaXNXaXRoaW5XZWVrKGluZGV4LmRheUZ1bmNzLm5vdygpLCBuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFRoaXNXZWVrTGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlVG9kbyh0b2RvKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7ZGlzcGxheVNsZWVweUNhdCgpO31cbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5SW1wb3J0YW50VG9kb3MgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpbmJveElzRW1wdHkoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgY2xlYXJDdXJyZW50SW5ib3goKTtcbiAgICAgICAgICAgIGxldCBpbXBvcnRhbnRMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UubXlUb2RvTGlzdCkuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvZG8ucHJpb3JpdHkgPT0gJ0hpZ2gnKSByZXR1cm4gdG9kb1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGltcG9ydGFudExpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge2Rpc3BsYXlTbGVlcHlDYXQoKTt9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVByb2plY3RUb2RvcyA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChpbmJveElzRW1wdHkoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgY2xlYXJDdXJyZW50SW5ib3goKTtcbiAgICAgICAgICAgIGdldEFjdGl2ZVByb2plY3QoKTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm15VG9kb0xpc3QpLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRvZG8ucHJvamVjdCA9PSBnZXRBY3RpdmVQcm9qZWN0KCkpIHJldHVybiB0b2RvO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVUb2RvKHRvZG8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIGNvbnN0IGNsZWFyVG9kb0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tdGl0bGUnKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kdWUtZGF0ZScpO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktbWVudScpO1xuXG4gICAgICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgIGRhdGUudmFsdWUgPSAnJztcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvLyBtYW51YWwgZGlzcGxheVxuICAgIGRpc3BsYXlTbGVlcHlDYXQoKTtcbiAgICBkaXNwbGF5QWxsVG9kb3MoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGZ1bGxJbmJveCxcbiAgICAgICAgc2VsZWN0SW5ib3gsXG4gICAgICAgIGRpc3BsYXlTbGVlcHlDYXQsXG4gICAgICAgIGluYm94SXNFbXB0eSxcbiAgICAgICAgY2xlYXJUb2RvRm9ybSxcbiAgICAgICAgZGlzcGxheUFsbFRvZG9zLFxuICAgICAgICBkaXNwbGF5VG9kYXlUb2RvcyxcbiAgICAgICAgZGlzcGxheVRoaXNXZWVrVG9kb3MsXG4gICAgICAgIGRpc3BsYXlJbXBvcnRhbnRUb2RvcyxcbiAgICAgICAgZGlzcGxheVByb2plY3RUb2Rvc1xuICAgIH1cbn0pKClcblxuXG5cblxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBsZXQgZXhpc3RzO1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1uYW1lJykudmFsdWU7XG4gICAgaWYgKHByb2plY3ROYW1lLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHByb2plY3QgbmFtZSBpcyAke3Byb2plY3ROYW1lLmxlbmd0aH0gY2hhcnMgbG9uZ2ApXG4gICAgICAgIGFsZXJ0KCdQcm9qZWN0IG5hbWUgbXVzdCBiZSBiZXR3ZWVuIDMgYW5kIDE4IGNoYXJhY3RlcnMnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJvamVjdE5hbWUubGVuZ3RoID4gMTgpIHtcbiAgICAgICAgYWxlcnQoJ1Byb2plY3QgbmFtZSBtdXN0IGJlIGJldHdlZW4gMyBhbmQgMTggY2hhcmFjdGVycycpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgICAgLy8gY2hlY2sgaWYgcHJvamVjdCBhbHJlYWR5IGV4aXN0c1xuICAgIHByb2plY3RzLmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKG5vZGUudGV4dENvbnRlbnQgPT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQcm9qZWN0IGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICB9O1xuICAgIH0pXG4gICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgbGV0IHAgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdpbmJveCcpO1xuICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5zZWxlY3RJbmJveChlLnRhcmdldCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGluZGV4LnN0b3JhZ2Uuc3RvcmVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgdG9nZ2xlTmV3UHJvamVjdEZvcm0oKTtcbiAgICAgICAgY2xlYXJOZXdQcm9qZWN0Rm9ybSgpO1xuICAgIH07XG59O1xuXG5jb25zdCBhZGRUb2RvID0gKCkgPT4ge1xuICAgICAgICAvLyB2YXJpYWJsZXMgdG8gYWNxdWlyZSBmb3JtIGlucHV0IHZhbHVlcyBcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtLXRpdGxlJyk7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGVzY3JpcHRpb24nKTtcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWR1ZS1kYXRlJyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LW1lbnUnKTtcblxuICAgICAgICAvLyBzZXRzIGN1cnJlbnQgcHJvamVjdCBrZXkgYW5kIGdpdmVzIHZhbHVlIGlmIGEgcHJvamVjdCBpcyBzZWxlY3RlZFxuICAgIGxldCBjdXJyZW50UHJvamVjdDtcbiAgICBsZXQgcHJvamVjdHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKV1cblxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGxldCBsaXN0ID0gWy4uLnByb2plY3QuY2xhc3NMaXN0XTtcbiAgICAgICAgaWYgKGxpc3QuaW5kZXhPZignYWN0aXZlJykgIT0gLTEpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdC50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgdG9kbyA9IG5ldyBpbmRleC5Ub2RvKGxvY2FsU3RvcmFnZS5pZCwgdGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgY3VycmVudFByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgICAgICAvLyBzdG9yZSB0b2RvIGluIGxvY2FsIHN0b3JhZ2VcbiAgICBpbmRleC5zdG9yYWdlLnN0b3JlSXRlbSh0b2RvKTtcblxuICAgICAgICAvLyBjaGVjayBpZiBlbXB0eSBpbmJveCBpbWFnZSBuZWVkcyB0byBiZSByZW1vdmVkXG4gICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheVNsZWVweUNhdCgpO1xuXG4gICAgZGlzcGxheUNvbnRyb2xsZXIuY2xlYXJUb2RvRm9ybSgpO1xufVxuXG5jb25zdCBhZGROb3RlcyA9IChpZCkgPT4ge1xuICAgICAgICAvL2dyYWIgdG9kbyBmcm9tIHN0b3JhZ2VcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UubXlUb2RvTGlzdClbaWRdO1xuICAgICAgICAvL21ha2UgYSBjb3B5IG9mIHRvZG9zIGxpc3Q7XG4gICAgbGV0IG5ld0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5teVRvZG9MaXN0KTtcbiAgICAgICAgLy9zZXQgbm90ZXMgb2YgdG9kb1xuICAgIG9iai5ub3RlcyA9ICdkbyBzb21lIHN0dWZmJ1xuICAgICAgICAvLyB1cGRhdGUgdmFsdWUgaW4gdG9kb3MgbGlzdFxuICAgIG5ld0xpc3RbaWRdID0gb2JqO1xuICAgICAgICAvLyByZXN0b3JlIHRvZG9zIGxpc3QgaW4gbG9jYWwgc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkobmV3TGlzdCkpO1xufVxuXG5cblxuLy8vLy9cbi8vLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vLy8vXG5cblxuXG4vLy8vL1xuLy8vLy8gU0lERUJBUiBNRURJQSBRVUVSWSBMSVNURU5FUlMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8vLy9cblxuY29uc3QgbWVudUhpZGVyID0gKHgpID0+IHtcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zaWRlYmFyJyk7XG4gICAgaWYgKHgubWF0Y2hlcykge1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2VkJyk7XG4gICAgfVxufTtcblxuY29uc3QgZnVsbHNjcmVlbk1lbnUgPSAoeCkgPT4ge1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnNpZGViYXInKTtcbiAgICBpZih4Lm1hdGNoZXMpIHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdmdWxsLXNjcmVlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbC1zY3JlZW4nKTtcbiAgICB9O1xufTtcblxuXG5sZXQgaGlkZU1lbnUgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDQwMHB4KVwiKTtcbm1lbnVIaWRlcihoaWRlTWVudSk7XG5oaWRlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBtZW51SGlkZXIpO1xuXG5sZXQgc2l6ZU1lbnUgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDgwMHB4KVwiKTtcbnNpemVNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bGxzY3JlZW5NZW51KTtcblxuXG4vLy8vL1xuLy8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8vLy9cblxuXG5cbi8vLy8vXG4vLy8vLyBTSURFQkFSIEVWRU5UIExJU1RFTkVSUyAmIEZVTkNUSU9OUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLy8vL1xuY29uc3QgdG9nZ2xlU2lkZWJhciA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpLmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlZCcpO1xufVxuXG5jb25zdCB0b2dnbGVOZXdQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59O1xuXG5jb25zdCBjbGVhck5ld1Byb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1uYW1lJykudmFsdWUgPSAnJztcbn07XG5cbiAgICAvLyBoYW1idXJnZXIgbWVudSBidXR0b24sIHRvZ2dsZXMgc2lkZWJhclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlU2lkZWJhcigpO1xufSk7XG5cbiAgICAvLyB0b2dnbGVzIG5ldyBwcm9qZWN0IGZvcm0gb24gY2xpY2sgb2YgbmV3IHByb2plY3QgYnV0dG9uXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVOZXdQcm9qZWN0Rm9ybSgpO1xufSk7XG5cbiAgICAvLyBjYW5jZWxzIGFuZCByZXNldHMgbmV3IHByb2plY3QgaW5wdXQgXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtY2FuY2VsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlTmV3UHJvamVjdEZvcm0oKTtcbiAgICBjbGVhck5ld1Byb2plY3RGb3JtKCk7XG59KTtcbiAgICAvLyBhZGRzIHByb2plY3QgdG8gc3RvcmFnZVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpXG5cbmNvbnN0IGxvYWRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBpZiAoaW5kZXguc3RvcmFnZS5nZXRQcm9qZWN0cygpICE9PSBudWxsKSB7XG4gICAgICAgIEpTT04ucGFyc2UoaW5kZXguc3RvcmFnZS5nZXRQcm9qZWN0cygpKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgbGV0IHAgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdpbmJveCcpO1xuICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICBwLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnNlbGVjdEluYm94KGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS5hcHBlbmRDaGlsZChwKVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiAgICAvLyBwcmV2ZW50IGRlZmF1bHQgb2YgcHJvamVjdCBmb3JtXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIC8vIGRpc3BsYXkgcHJvamVjdHMgb24gcGFnZSBsb2FkXG4gICAgbG9hZFByb2plY3RzKCk7XG59KVxuICAgIC8vIGluYm94IHNlbGVjdG9yIGxpc3RlbmVyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5ib3gnKS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnNlbGVjdEluYm94KGUudGFyZ2V0KVxuICAgIH0pXG59KVxuXG5cbi8vLy8vXG4vLy8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8vLy9cblxuXG5cbi8vLy8vXG4vLy8vL1xuLy8vLy8tLS0tLU5FVyBUQVNLIEVWRU5UIExJU1RFTkVSUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLy8vL1xuLy8vLy9cblxuY29uc3QgdG9nZ2xlTmV3VGFza1dpbmRvdyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtLWNvbnRhaW5lcicpLmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlZCcpO1xufVxuICAgIC8vIG9wZW4gbmV3IHRhc2sgd2luZG93IG9uIFwiYWRkIHRhc2tcIiBidXR0b24gY2xpY2tcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVOZXdUYXNrV2luZG93KCk7XG59KVxuXG4gICAgLy8gY2xvc2UgbmV3IHRhc2sgd2luZG93IGFuZCBjbGVhciBmb3JtIHdpdGggZXhpdCBidXR0b25cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0tZXhpdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmNsZWFyVG9kb0Zvcm0oKTtcbiAgICB0b2dnbGVOZXdUYXNrV2luZG93KCk7XG59KVxuXG4gICAgLy8gYWRkIHRvIGRvIGFuZCBjbG9zZSBuZXcgdGFzayB3aW5kb3dcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tdGl0bGUnKS52YWx1ZSBcbiAgICAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kZXNjcmlwdGlvbicpLnZhbHVlIFxuICAgICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWR1ZS1kYXRlJykudmFsdWUpIHtcbiAgICAgICAgYWRkVG9kbygpOyAgICBcbiAgICAgICAgdG9nZ2xlTmV3VGFza1dpbmRvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgZmlsbCBpbiBhbGwgcmVxdWlyZWQgZmllbGRzJyk7XG4gICAgfVxuICAgIFxufSlcblxuXG5cblxuIiwiXG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yIChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgbm90ZXMpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7IFxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIH1cbn1cblxuXG5cbmNvbnN0IHN0b3JhZ2UgPSAoKCkgPT4ge1xuICAgICAgICAvLyBzZXR1cCBJRCBjb3VudGVyICAgIFxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKSA9PSBudWxsKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsICcwJyk7XG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUb2RvTGlzdCcpID09IG51bGwpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShbXSkpXG4gICAgfVxuICAgIFxuICAgIFxuXG4gICAgY29uc3QgaW5jcmVtZW50SUQgPSAoKSA9PiB7XG4gICAgICAgIGxldCB4ID0gcGFyc2VGbG9hdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKSk7XG4gICAgICAgIHgrKztcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgYCR7eH1gKVxuICAgIH1cblxuICAgIGNvbnN0IGdldElEID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmFnZUF2YWlsYWJsZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUb2RvTGlzdCcpID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUb2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KFtpdGVtXSkpO1xuICAgICAgICAgICAgICAgIHN0b3JhZ2UuaW5jcmVtZW50SUQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUb2RvTGlzdCcpLnNwbGl0KCcsJykpO1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUb2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTsgXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5pbmNyZW1lbnRJRCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoJ25vIHN0b3JhZ2UgYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIC8vIGZvciBub3cgbWFudWFsbHkgcmVtb3ZlIGl0ZW0gdyBwYXJhbVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShpdGVtLmlkKTtcblxuICAgICAgICAvLyBsb2dpYyB0byByZW1vdmUgaXRlbSBmcm9tIERPTTtcbiAgICAgICAgLy8gZ29lcyBoZXJlXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbSkpXG4gICAgfVxuXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgaXRlbSBpbiBzdG9yYWdlO1xuICAgIGNvbnN0IGl0ZW1JblN0b3JhZ2UgPSAodG9kbykgPT4ge1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSB0b2RvLnRpdGxlKSB7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3VuZCBpdGVtJyk7IHJldHVybiB0cnVlIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpdGVtIGRvZXNuXFwndCBleGlzdCcpOyByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVByb2plY3RMaXN0JykgPT0gbnVsbCApIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkoW3Byb2plY3RdKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdExpc3QnKS5zcGxpdCgnLCcpKTtcbiAgICAgICAgICAgIGxpc3QucHVzaChwcm9qZWN0KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkobGlzdCkpOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdExpc3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IGxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVByb2plY3RMaXN0Jykuc3BsaXQoJywnKSk7XG4gICAgICAgIGlmIChsaXN0LmluZGV4T2YocHJvamVjdCkgIT09IC0xKSB7XG4gICAgICAgICAgICBsaXN0LnNwbGljZShsaXN0LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215UHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShsaXN0KSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5jcmVtZW50SUQsXG4gICAgICAgIGdldElELFxuICAgICAgICBzdG9yYWdlQXZhaWxhYmxlLFxuICAgICAgICBzdG9yZUl0ZW0sXG4gICAgICAgIGdldCxcbiAgICAgICAgcmVtb3ZlSXRlbSxcbiAgICAgICAgaXRlbUluU3RvcmFnZSxcbiAgICAgICAgc3RvcmVQcm9qZWN0LFxuICAgICAgICBkZWxldGVQcm9qZWN0LFxuICAgICAgICBnZXRQcm9qZWN0c1xuICAgIH1cbn0pKCk7XG5cblxuY29uc3QgZGF5RnVuY3MgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRheUxlbmd0aCA9IDEwMDAqNjAqNjAqMjQ7XG4gICAgY29uc3Qgd2Vla0xlbmd0aCA9IGRheUxlbmd0aCAqIDc7XG5cbiAgICBjb25zdCBub3cgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RheSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzV2l0aGluRGF5ID0gKHRvZGF5LCBkYXkpID0+IHtcbiAgICAgICAgcmV0dXJuICh0b2RheSA9PSBkYXkpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzV2l0aGluV2VlayA9IChub3csIGRheSkgPT4ge1xuICAgICAgICByZXR1cm4gKChkYXkgLSBub3cpIDwgd2Vla0xlbmd0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbm93LCBcbiAgICAgICAgdG9kYXksXG4gICAgICAgIGlzV2l0aGluRGF5LFxuICAgICAgICBpc1dpdGhpbldlZWtcbiAgICB9XG59KSgpXG5cblxuXG5leHBvcnQgeyBzdG9yYWdlLCBUb2RvLCBkYXlGdW5jcyB9XG5cblxuXG5cblxuLy8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tIFRFU1RJTkdcblxuLy8gc3RvcmFnZS5zdG9yZUl0ZW0obmV3IFRvZG8oc3RvcmFnZS5nZXRJRCgpLCAndG9kYXknLCAndGhpbmdzIHRvIGRvIHRvZGF5JywnYXByaWwgMTAnLCAnbG93JykpO1xuLy8gc3RvcmFnZS5zdG9yZUl0ZW0obmV3IFRvZG8oc3RvcmFnZS5nZXRJRCgpLCAndG9tb3Jyb3cnLCAnZG8gc3R1ZmYnLCAndG9tb3Jyb3cnLCAnbWVkaXVtJykpO1xuXG5cblxuXG5cblxuXG4vLyBsZXQgeCA9IG5ldyBEYXRlKCdGZWIgMjggMjAyMyAxNDowMTowMCcpLmdldFRpbWUoKTtcbi8vIGNvbnNvbGUubG9nKGRheUZ1bmNzLm5vdygpKVxuLy8gY29uc29sZS5sb2coZGF5RnVuY3MuaXNXaXRoaW5XZWVrKGRheUZ1bmNzLm5vdygpLCB4KSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9