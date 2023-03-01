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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Dekko;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n    font-family: Quicksand;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n:root {\n    --gamboge: #EC9A29;\n    --blackOlive: #3B413C;\n    --ashGray: #9DB5B2;\n    --lightCyan: #DAF0EE;\n    --tiffanyBlue: #94D1BE;\n    --buff: #EDB88B;\n    --taupe: #857C8D;\n    --pine: #136F63;\n    --apricot: #FFC9B5;\n    --black: #050505;\n    --lightGray: #CCCCCC;\n    --white: #F5F5F5;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody, \nhtml {\n    min-height: 100vh;\n    min-width: 100vw;\n}\n\nbody {\n    display: flex;\n    align-items: stretch;\n    min-width: 100vw;\n}\n\n.main {\n    width: 100%;\n    min-width: 100vw;\n    display: grid;\n    grid: auto 1fr auto / auto 1fr;\n}\n\nheader {\n    grid-area: 1 / 1 / 2 / 3;\n    font-family: Quicksand;\n    height: 56px;\n    width: 100vw;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 55px;\n    padding: 0.5rem 2rem 0.5rem 2rem;\n    background-color: var(--white);\n    border-bottom: 1px solid var(--lightGray);\n}\n\n    #menu-button {\n        height: 40px;\n        cursor: pointer;\n        padding: 8px;\n        background-color: var(--white);\n        border-radius: 3px;\n        position: absolute;\n        top: 8px;\n        left: 32px;\n    }\n        #menu-button:hover {\n            background-color: var(--lightCyan);\n        }\n\n    .add-task-button {\n        padding: 5px 10px;\n        border-radius: 5px;\n        display: grid;\n        grid-template-columns: auto auto;\n        gap: 10px;\n        cursor: pointer;\n        background-color: #94d1be52;\n        border: 1px solid var(--ashGray);\n    }\n    #add-task-plus {\n        height: 15px;\n        place-self: center;\n        \n    }\n        .add-task-button:hover {\n            opacity: 0.8;\n        }\n\n.page {\n    grid-area: 2/2/3/3;\n    background-color: var(--lightCyan);\n    display: flex;\n    flex-wrap: wrap;\n}\n    .sidebar {\n        background-color: #94d1be52;    \n        border-right: 1px solid var(--lightGray);\n        width: 400px;\n        padding: 2rem;\n        padding-bottom: 0;\n        font-family: Quicksand;\n        font-weight: 400;\n        display: grid;\n        grid: auto 1fr / 1fr;\n        opacity: 1;\n        visibility: visible;\n        transition: opacity 0.5s, width 0.75s, height 0.75s,\n        margin 0.75s, visibility 0.5s;\n    }\n        .sidebar.closed, \n        .task-form-container.closed, \n        .project-delete-popup.closed {\n            opacity: 0;\n            visibility: hidden;\n            width: 0px;\n            padding: 0;\n            height: 0;\n            border: 0;\n            margin: 0;\n        }\n        .full-screen {\n            width: 100vw;\n        }\n        .sidebar h2 {\n            margin-bottom: 1.5rem;\n            padding-bottom: 5px;\n            border-bottom: 1px solid;\n        }\n        .sidebar p {\n            padding: 0.5rem;\n            padding-left: 1rem;\n            cursor: pointer;\n            font-size: 20px;\n            margin-bottom: 0.5rem;\n        }\n            .sidebar p:hover {\n                background-color: var(--tiffanyBlue);\n            }\n            \n        .sidebar .home, \n        .sidebar .projects {\n            padding-bottom: 3rem;\n        }\n            .new-project {\n                display: grid;\n                grid-template-columns: auto 1fr;\n                gap: 10px;\n                margin-bottom: 0.5rem;\n            }\n                .new-project p {\n                    margin-bottom: 0;\n                }\n                .sidebar .new-project:hover {\n                    background-color: var(--tiffanyBlue);\n                }\n                #plus {\n                    height: 15px;\n                    place-self: start;\n                    align-self: center;\n                }\n            .project-form {\n                display: grid;\n                grid: 1fr 1fr / 1fr 1fr;\n                align-items: center;\n                gap: 0 15px;\n                padding-left: 1rem;\n                background-color: var(--lightCyan);\n                border: 1px solid var(--apricot);\n                border-radius: 5px;\n                opacity: 1;\n                height: 100px;\n                visibility: visible;\n                transition: height 0.75s, opacity 0.75s, visibility 0.75s;\n            }\n                .project-form.hidden{\n                    opacity: 0;\n                    visibility: hidden;\n                    height: 0;\n                }\n                .project-form input {\n                    height: 25px;\n                    border: 1px solid var(--apricot);\n                    border-radius: 5px;\n                    margin-right: 10px;\n                }\n                .project-form input:focus {\n                    outline: none;\n                    border: 3px solid var(--apricot);\n                }\n                .form-buttons {\n                    grid-area: 2 / 1 / 3 / 3;\n                    display: flex;\n                    justify-content: space-evenly;\n                }\n                .project-form button {\n                    width: 125px;\n                    padding: 7px;\n                    border-radius: 5px;\n                    font-size: 14px;\n                    border: 1px solid red;\n                    color:  var(--blackOlive);\n                    font-weight: 700;\n                    background-color: var(--apricot);\n                    cursor: pointer;\n                }\n                .project-form button:nth-child(1){\n                    border: 1px solid green;\n                    background-color: var(--tiffanyBlue);\n                }\n                \n            .projects .inbox {\n                margin-left: 1rem;\n            }\n            div.project {\n                display: flex;\n                align-items: center;\n                margin-bottom: 0.5rem;\n            }\n            div.project:hover {\n                background-color: var(--tiffanyBlue);\n            }\n            div.project p {\n                flex: auto;\n                margin-bottom: 0;\n            }\n            #project-menu {\n                height: 41px;\n                padding: 10px 0;\n                width: 20px;\n            }\n            \n    .content {\n        background-color: var(--lightCyan);\n        flex: auto;\n        font-family: Quicksand;\n        position: relative;\n        padding-bottom: 2rem;\n        max-width: 100vw;\n    }\n\n        .inbox-title {\n            width: 90%;\n            height: 67px;\n            margin: 0px auto;\n            display: flex;\n            align-items: end;\n            padding-left: 3rem;\n            font-size: 22px;\n            border-bottom: 5px ridge rgba(128, 128, 128, 0.226);\n        } \n        .inbox-title h2 {\n            font-weight: 400;\n        }\n        .todos-container {\n            padding-top: 20px;\n        }\n\n        .todo {\n            position: relative;\n            border: 1px solid;\n            border-radius: 3px;\n            background-color: var(--tiffanyBlue);\n            width: 90%;\n            margin: 1rem auto;\n            padding: 5px;\n            display: flex;\n            align-items: center;\n            gap: 10px;\n            cursor: pointer;\n        }\n            .priority-line {\n                position: absolute;\n                left: 0;\n                width: 7px;\n                height: 100%;\n                opacity: 0.8;\n            }\n            .todo-title {\n                flex: auto;\n                padding-left: 15px;\n                font-size: 18px;\n            }\n            .todo:hover {\n                transform: scale(1.005);\n                box-shadow: 3px 3px 5px 2px rgb(0 0 0 / 20%);\n                transition: all 0.2s ease-out;\n            }\n\n            .todo img {\n                height: 25px;\n            }\n            #hidden-options {\n                border-radius: 5px;\n                border: 1px solid;\n                position: absolute;\n                background-color: var(--white);\n                right: 50px;\n                bottom: 30px;\n                display: flex;\n                flex-direction: column;\n                \n            }\n                #hidden-options div {\n                    opacity: 1;\n                    width: 80px;\n                    height: 30px;\n                    display: flex;\n                    align-items: center;\n                    border-radius: 5px;\n                    padding: 5px;\n                }\n                    #hidden-options div:hover {\n                        background-color: #eee;\n                    }\n\n        .sleepy-container {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n            .sleepy {\n                width: 300px;\n                height: 300px;\n            }\n            .sleepy-text {\n                margin-top: -50px;\n                padding-bottom: 50px;\n                font-size: 18px;\n            }\n\n        \n      \nfooter {\n    font-family: Dekko;\n    position: absolute;\n    bottom: 0;\n    right: 10px;\n    opacity: 0.8;\n}\n\n.task-form-container {\n    background-color: var(--white);\n    border: 4px solid var(--ashGray);\n    border-radius: 5px;\n    font-family: Quicksand;\n    transition: opacity 0.25s, visibility 0.25s, height 0.75s,\n                width 0.75s;\n} \n    .task-form-container, \n    .task-form-container.closed {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        margin:auto;\n        width: fit-content;\n        height: fit-content;\n    }\n    .task-form {\n        height: fit-content;\n        padding: 2rem;\n        display: grid;\n        grid: auto auto auto / 1fr 1fr;\n    }\n        .task-form-exit {\n            position: absolute;\n            right: 15px;\n            top: 15px;\n            cursor: pointer;\n            padding: 5px;\n            display: grid;\n            place-items: center;\n        }\n        .task-form-exit img{\n            height: 20px;\n            width: 20px;\n            transform: rotate(45deg);\n        }\n        .form-title {\n            margin: 2rem 2rem 0 2rem;\n            font-size: 26px;\n            border-bottom: 1px solid;\n        }\n        .todo-form-title,\n        .todo-description,\n        .todo-due-date,\n        .priority-menu,\n        .submit-task {\n            border: none;\n            border-radius: 5px;\n            margin-bottom: 1rem;\n            padding: 8px;\n            background-color: var(--white);\n            border: 1px solid #94d1be8c;\n            font-size: 16px;\n        }\n        .todo-form-title {\n            grid-area: 1 / 1 / 2 / 3;\n            height: 50px;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .todo-description {\n            grid-area: 2 / 1 / 3 / 3;\n            height: auto;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .due-date-prio-container {\n            grid-area: 3 / 1 / 4 / 2;\n            display: flex;\n            flex-direction: column;\n        }\n        .todo-due-date {\n            height: 50px;\n        }\n\n        .task-form textarea:focus,\n        .task-form input:focus,\n        .priority-menu:focus {\n            outline: none;\n            background-color: #94d1be13;\n        }\n        .submit-task {\n            width: fit-content;\n            height: auto;\n            padding: 1rem;\n            justify-self: end;\n            align-self: end;\n            cursor: pointer;\n            color: var(--black);\n        }\n            .submit-task:hover {\n                background-color: #94d1bec5;\n                color: var(--white);\n            }\n.project-delete-popup {\n    width: fit-content;\n    max-width: 80vw;\n    height: fit-content;\n    padding: 2rem;\n    background-color: var(--white);\n    border: 4px solid var(--ashGray);\n    border-radius: 5px;\n    font-family: Quicksand;\n    font-size: 20px;\n    font-weight: bold;\n    transition: opacity 0.25s, visibility 0.25s, height 0.75s,\n                width 0.75s;\n}   \n    .project-delete-popup,\n    .project-delete-popup.closed {\n            position: absolute;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            margin: 10vh auto;\n    }\n    .project-delete-exit {\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        border: none;\n        width: 25px;\n        height: 25px;\n        font-size: 20px;\n        cursor: pointer;\n        display: grid;\n    }\n        .project-delete-exit img {\n            place-self: center;\n            transform: rotate(45deg);\n            height: 20px;\n        }\n    .project-delete-popup p {\n        padding: 0.5rem;\n        margin-bottom: 2rem;\n        border-bottom: 1px solid;\n    }\n    .project-delete-buttons {\n        width: 200px;\n        margin: auto;\n        display: flex;\n        justify-content: space-between;\n        \n    }\n        .project-delete-buttons button {\n            width: 90px;\n            height: 40px;\n            border-radius: 5px;\n            font-size: 20px;\n            border: 1px solid;\n            cursor: pointer;\n        }\n        .project-delete-buttons button:hover {\n            background-color: #94d1bec5;\n        }\n\n.closed {\n    pointer-events: none;\n}\n\na {\n    text-decoration: none;\n    color: #333;\n}\na:hover {\n    color: #4B4B4B;\n}\n\n.hidden {\n    position: absolute;\n    opacity: 0;\n    visibility: 0;\n    pointer-events: none;\n}\n\n.active {\n    background-color: var(--tiffanyBlue);\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Dekko;\n    src: url(./Dekko-Regular.ttf);\n}\n@font-face {\n    font-family: Quicksand;\n    src: url(./Quicksand.ttf);\n}\n\n:root {\n    --gamboge: #EC9A29;\n    --blackOlive: #3B413C;\n    --ashGray: #9DB5B2;\n    --lightCyan: #DAF0EE;\n    --tiffanyBlue: #94D1BE;\n    --buff: #EDB88B;\n    --taupe: #857C8D;\n    --pine: #136F63;\n    --apricot: #FFC9B5;\n    --black: #050505;\n    --lightGray: #CCCCCC;\n    --white: #F5F5F5;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody, \nhtml {\n    min-height: 100vh;\n    min-width: 100vw;\n}\n\nbody {\n    display: flex;\n    align-items: stretch;\n    min-width: 100vw;\n}\n\n.main {\n    width: 100%;\n    min-width: 100vw;\n    display: grid;\n    grid: auto 1fr auto / auto 1fr;\n}\n\nheader {\n    grid-area: 1 / 1 / 2 / 3;\n    font-family: Quicksand;\n    height: 56px;\n    width: 100vw;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 55px;\n    padding: 0.5rem 2rem 0.5rem 2rem;\n    background-color: var(--white);\n    border-bottom: 1px solid var(--lightGray);\n}\n\n    #menu-button {\n        height: 40px;\n        cursor: pointer;\n        padding: 8px;\n        background-color: var(--white);\n        border-radius: 3px;\n        position: absolute;\n        top: 8px;\n        left: 32px;\n    }\n        #menu-button:hover {\n            background-color: var(--lightCyan);\n        }\n\n    .add-task-button {\n        padding: 5px 10px;\n        border-radius: 5px;\n        display: grid;\n        grid-template-columns: auto auto;\n        gap: 10px;\n        cursor: pointer;\n        background-color: #94d1be52;\n        border: 1px solid var(--ashGray);\n    }\n    #add-task-plus {\n        height: 15px;\n        place-self: center;\n        \n    }\n        .add-task-button:hover {\n            opacity: 0.8;\n        }\n\n.page {\n    grid-area: 2/2/3/3;\n    background-color: var(--lightCyan);\n    display: flex;\n    flex-wrap: wrap;\n}\n    .sidebar {\n        background-color: #94d1be52;    \n        border-right: 1px solid var(--lightGray);\n        width: 400px;\n        padding: 2rem;\n        padding-bottom: 0;\n        font-family: Quicksand;\n        font-weight: 400;\n        display: grid;\n        grid: auto 1fr / 1fr;\n        opacity: 1;\n        visibility: visible;\n        transition: opacity 0.5s, width 0.75s, height 0.75s,\n        margin 0.75s, visibility 0.5s;\n    }\n        .sidebar.closed, \n        .task-form-container.closed, \n        .project-delete-popup.closed {\n            opacity: 0;\n            visibility: hidden;\n            width: 0px;\n            padding: 0;\n            height: 0;\n            border: 0;\n            margin: 0;\n        }\n        .full-screen {\n            width: 100vw;\n        }\n        .sidebar h2 {\n            margin-bottom: 1.5rem;\n            padding-bottom: 5px;\n            border-bottom: 1px solid;\n        }\n        .sidebar p {\n            padding: 0.5rem;\n            padding-left: 1rem;\n            cursor: pointer;\n            font-size: 20px;\n            margin-bottom: 0.5rem;\n        }\n            .sidebar p:hover {\n                background-color: var(--tiffanyBlue);\n            }\n            \n        .sidebar .home, \n        .sidebar .projects {\n            padding-bottom: 3rem;\n        }\n            .new-project {\n                display: grid;\n                grid-template-columns: auto 1fr;\n                gap: 10px;\n                margin-bottom: 0.5rem;\n            }\n                .new-project p {\n                    margin-bottom: 0;\n                }\n                .sidebar .new-project:hover {\n                    background-color: var(--tiffanyBlue);\n                }\n                #plus {\n                    height: 15px;\n                    place-self: start;\n                    align-self: center;\n                }\n            .project-form {\n                display: grid;\n                grid: 1fr 1fr / 1fr 1fr;\n                align-items: center;\n                gap: 0 15px;\n                padding-left: 1rem;\n                background-color: var(--lightCyan);\n                border: 1px solid var(--apricot);\n                border-radius: 5px;\n                opacity: 1;\n                height: 100px;\n                visibility: visible;\n                transition: height 0.75s, opacity 0.75s, visibility 0.75s;\n            }\n                .project-form.hidden{\n                    opacity: 0;\n                    visibility: hidden;\n                    height: 0;\n                }\n                .project-form input {\n                    height: 25px;\n                    border: 1px solid var(--apricot);\n                    border-radius: 5px;\n                    margin-right: 10px;\n                }\n                .project-form input:focus {\n                    outline: none;\n                    border: 3px solid var(--apricot);\n                }\n                .form-buttons {\n                    grid-area: 2 / 1 / 3 / 3;\n                    display: flex;\n                    justify-content: space-evenly;\n                }\n                .project-form button {\n                    width: 125px;\n                    padding: 7px;\n                    border-radius: 5px;\n                    font-size: 14px;\n                    border: 1px solid red;\n                    color:  var(--blackOlive);\n                    font-weight: 700;\n                    background-color: var(--apricot);\n                    cursor: pointer;\n                }\n                .project-form button:nth-child(1){\n                    border: 1px solid green;\n                    background-color: var(--tiffanyBlue);\n                }\n                \n            .projects .inbox {\n                margin-left: 1rem;\n            }\n            div.project {\n                display: flex;\n                align-items: center;\n                margin-bottom: 0.5rem;\n            }\n            div.project:hover {\n                background-color: var(--tiffanyBlue);\n            }\n            div.project p {\n                flex: auto;\n                margin-bottom: 0;\n            }\n            #project-menu {\n                height: 41px;\n                padding: 10px 0;\n                width: 20px;\n            }\n            \n    .content {\n        background-color: var(--lightCyan);\n        flex: auto;\n        font-family: Quicksand;\n        position: relative;\n        padding-bottom: 2rem;\n        max-width: 100vw;\n    }\n\n        .inbox-title {\n            width: 90%;\n            height: 67px;\n            margin: 0px auto;\n            display: flex;\n            align-items: end;\n            padding-left: 3rem;\n            font-size: 22px;\n            border-bottom: 5px ridge rgba(128, 128, 128, 0.226);\n        } \n        .inbox-title h2 {\n            font-weight: 400;\n        }\n        .todos-container {\n            padding-top: 20px;\n        }\n\n        .todo {\n            position: relative;\n            border: 1px solid;\n            border-radius: 3px;\n            background-color: var(--tiffanyBlue);\n            width: 90%;\n            margin: 1rem auto;\n            padding: 5px;\n            display: flex;\n            align-items: center;\n            gap: 10px;\n            cursor: pointer;\n        }\n            .priority-line {\n                position: absolute;\n                left: 0;\n                width: 7px;\n                height: 100%;\n                opacity: 0.8;\n            }\n            .todo-title {\n                flex: auto;\n                padding-left: 15px;\n                font-size: 18px;\n            }\n            .todo:hover {\n                transform: scale(1.005);\n                box-shadow: 3px 3px 5px 2px rgb(0 0 0 / 20%);\n                transition: all 0.2s ease-out;\n            }\n\n            .todo img {\n                height: 25px;\n            }\n            #hidden-options {\n                border-radius: 5px;\n                border: 1px solid;\n                position: absolute;\n                background-color: var(--white);\n                right: 50px;\n                bottom: 30px;\n                display: flex;\n                flex-direction: column;\n                \n            }\n                #hidden-options div {\n                    opacity: 1;\n                    width: 80px;\n                    height: 30px;\n                    display: flex;\n                    align-items: center;\n                    border-radius: 5px;\n                    padding: 5px;\n                }\n                    #hidden-options div:hover {\n                        background-color: #eee;\n                    }\n\n        .sleepy-container {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n            .sleepy {\n                width: 300px;\n                height: 300px;\n            }\n            .sleepy-text {\n                margin-top: -50px;\n                padding-bottom: 50px;\n                font-size: 18px;\n            }\n\n        \n      \nfooter {\n    font-family: Dekko;\n    position: absolute;\n    bottom: 0;\n    right: 10px;\n    opacity: 0.8;\n}\n\n.task-form-container {\n    background-color: var(--white);\n    border: 4px solid var(--ashGray);\n    border-radius: 5px;\n    font-family: Quicksand;\n    transition: opacity 0.25s, visibility 0.25s, height 0.75s,\n                width 0.75s;\n} \n    .task-form-container, \n    .task-form-container.closed {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        margin:auto;\n        width: fit-content;\n        height: fit-content;\n    }\n    .task-form {\n        height: fit-content;\n        padding: 2rem;\n        display: grid;\n        grid: auto auto auto / 1fr 1fr;\n    }\n        .task-form-exit {\n            position: absolute;\n            right: 15px;\n            top: 15px;\n            cursor: pointer;\n            padding: 5px;\n            display: grid;\n            place-items: center;\n        }\n        .task-form-exit img{\n            height: 20px;\n            width: 20px;\n            transform: rotate(45deg);\n        }\n        .form-title {\n            margin: 2rem 2rem 0 2rem;\n            font-size: 26px;\n            border-bottom: 1px solid;\n        }\n        .todo-form-title,\n        .todo-description,\n        .todo-due-date,\n        .priority-menu,\n        .submit-task {\n            border: none;\n            border-radius: 5px;\n            margin-bottom: 1rem;\n            padding: 8px;\n            background-color: var(--white);\n            border: 1px solid #94d1be8c;\n            font-size: 16px;\n        }\n        .todo-form-title {\n            grid-area: 1 / 1 / 2 / 3;\n            height: 50px;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .todo-description {\n            grid-area: 2 / 1 / 3 / 3;\n            height: auto;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .due-date-prio-container {\n            grid-area: 3 / 1 / 4 / 2;\n            display: flex;\n            flex-direction: column;\n        }\n        .todo-due-date {\n            height: 50px;\n        }\n\n        .task-form textarea:focus,\n        .task-form input:focus,\n        .priority-menu:focus {\n            outline: none;\n            background-color: #94d1be13;\n        }\n        .submit-task {\n            width: fit-content;\n            height: auto;\n            padding: 1rem;\n            justify-self: end;\n            align-self: end;\n            cursor: pointer;\n            color: var(--black);\n        }\n            .submit-task:hover {\n                background-color: #94d1bec5;\n                color: var(--white);\n            }\n.project-delete-popup {\n    width: fit-content;\n    max-width: 80vw;\n    height: fit-content;\n    padding: 2rem;\n    background-color: var(--white);\n    border: 4px solid var(--ashGray);\n    border-radius: 5px;\n    font-family: Quicksand;\n    font-size: 20px;\n    font-weight: bold;\n    transition: opacity 0.25s, visibility 0.25s, height 0.75s,\n                width 0.75s;\n}   \n    .project-delete-popup,\n    .project-delete-popup.closed {\n            position: absolute;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            margin: 10vh auto;\n    }\n    .project-delete-exit {\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        border: none;\n        width: 25px;\n        height: 25px;\n        font-size: 20px;\n        cursor: pointer;\n        display: grid;\n    }\n        .project-delete-exit img {\n            place-self: center;\n            transform: rotate(45deg);\n            height: 20px;\n        }\n    .project-delete-popup p {\n        padding: 0.5rem;\n        margin-bottom: 2rem;\n        border-bottom: 1px solid;\n    }\n    .project-delete-buttons {\n        width: 200px;\n        margin: auto;\n        display: flex;\n        justify-content: space-between;\n        \n    }\n        .project-delete-buttons button {\n            width: 90px;\n            height: 40px;\n            border-radius: 5px;\n            font-size: 20px;\n            border: 1px solid;\n            cursor: pointer;\n        }\n        .project-delete-buttons button:hover {\n            background-color: #94d1bec5;\n        }\n\n.closed {\n    pointer-events: none;\n}\n\na {\n    text-decoration: none;\n    color: #333;\n}\na:hover {\n    color: #4B4B4B;\n}\n\n.hidden {\n    position: absolute;\n    opacity: 0;\n    visibility: 0;\n    pointer-events: none;\n}\n\n.active {\n    background-color: var(--tiffanyBlue);\n}\n"],"sourceRoot":""}]);
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
                        inbox.id = 'inbox';
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

                        //new project form
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
                currentH2.textContent = `INBOX`
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

const projectDeletePopup = () => {
    const element = createClassedElement('div', 'project-delete-popup');
    element.classList.add('closed');
        const exit = createClassedElement('div', 'project-delete-exit');
            const x = new Image();
            x.src = _plus_png__WEBPACK_IMPORTED_MODULE_4__;
            exit.append(x)

        const p = createClassedElement('p');
            p.textContent = `Are you sure you want to delete this project and all 'to-dos' associated with it?`
        const buttonContainer = createClassedElement('div', 'project-delete-buttons');
            const confirm = createClassedElement('button');
                confirm.textContent = 'confirm'
            const cancel = createClassedElement('button');
                cancel.textContent = 'cancel'
            buttonContainer.append(confirm, cancel);
        element.append(exit, p, buttonContainer)
    return element;
}

try {
    document.querySelector('.main').append(header(), page(), form(), projectDeletePopup());
} catch (e){
    console.log(e)
}



/////
/////----------------------------------------------------//////
/////


const displayController = (() => {

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
        if (JSON.parse(localStorage.myTodoList).length == 0) {return true;} 
        else {return false;}
    }


    const getActiveProject = () => {
        let projectList = [...document.querySelectorAll('.project')];
        let currentProject = projectList.filter(project => {
            if ([...project.classList].indexOf('active') != -1) {
                return project;
            }
        })
        return currentProject[0].textContent;
    }

    const getActiveInbox = () => {
        let inboxList = [...document.querySelectorAll('.inbox')];
        let currentInbox = inboxList.filter(inbox => {
            if([...inbox.classList].indexOf('active') != -1) {
                return inbox;
            }
        })
        return currentInbox[0];
    }

    const currentInboxEmpty = () => {
        return document.querySelectorAll('.todo').length == 0
    }

    const displaySleepyCat = () => {
        if (inboxIsEmpty()) {
            const div = createClassedElement('div', 'sleepy-container');
            const p = createClassedElement('p', 'sleepy-text');
                p.textContent = 'You have no current tasks';
            const img = new Image();
                img.src = _sleepy_png__WEBPACK_IMPORTED_MODULE_3__;
                img.classList.add('sleepy');
            div.append(img, p);
            let content = document.querySelector('.content');
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
        displayController.selectInbox(displayController.getActiveInbox());
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
                hiddenOptions.classList.toggle('hidden');
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
                let dayList = todo.dueDate.split('-');
                if (new Date().getDate() == dayList[2]
                        && new Date().getMonth() == parseInt(dayList[1]) - 1
                        && new Date().getFullYear() == dayList[0]) {
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
                if (_index_js__WEBPACK_IMPORTED_MODULE_2__.dayFuncs.isWithinWeek(new Date().getTime(), new Date(todo.dueDate).getTime())) {
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
        } else {displaySleepyCat();}
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
            let div = createClassedElement('div', 'inbox');
            div.classList.add('project');
            div.addEventListener('click', (e) => {
                displayController.selectInbox(e.target.parentElement);
                console.log(e.target)
            })
                let p = createClassedElement('p');
                p.textContent = projectName;
                div.append(p)
            document.querySelector('.projects').appendChild(div);
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


    // manual display
    document.querySelector('#inbox').classList.add('active')
    displayAllTodos();

    return {
        selectInbox,
        displaySleepyCat,
        inboxIsEmpty,
        clearTodoForm,
        displayAllTodos,
        displayTodayTodos,
        displayThisWeekTodos,
        displayImportantTodos,
        displayProjectTodos,
        getActiveInbox,
        addProject,
        addTodo
    }
})()







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
document.querySelector('.add-button').addEventListener('click', displayController.addProject)

const loadProjects = () => {
    if (_index_js__WEBPACK_IMPORTED_MODULE_2__.storage.getProjects() !== null) {
        JSON.parse(_index_js__WEBPACK_IMPORTED_MODULE_2__.storage.getProjects()).forEach(project => {
            let div = createClassedElement('div', 'inbox');
            div.classList.add('project');
            div.addEventListener('click', (e) => {
                displayController.selectInbox(e.target.parentElement);
                console.log(e.target.parentElement.textContent)
            })
                let p = createClassedElement('p');
                p.textContent = project;

                let img = new Image();
                    img.src = _dot_menu_png__WEBPACK_IMPORTED_MODULE_6__;
                    img.id = 'project-menu'

                div.append(p, img)

                
            document.querySelector('.projects').appendChild(div);
        });
    }
}

    // prevent default of project form on enter press
document.querySelector('.project-form').addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        event.preventDefault();
    }
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
        displayController.addTodo();    
        toggleNewTaskWindow();
        
        let inbox = displayController.getActiveInbox();
        displayController.selectInbox(inbox);
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

    const isWithinWeek = (now, day) => {
        return ((day - now) < weekLength);
    }

    return {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sT0FBTyxNQUFNLE9BQU8sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sWUFBWSxNQUFNLEtBQUssV0FBVyxhQUFhLFlBQVksYUFBYSxNQUFNLE1BQU0sYUFBYSxPQUFPLE1BQU0sYUFBYSxPQUFPLE1BQU0sV0FBVyxhQUFhLGNBQWMsT0FBTyxLQUFLLFdBQVcsYUFBYSxjQUFjLFlBQVksYUFBYSxjQUFjLGNBQWMsY0FBYyxZQUFZLFdBQVcsYUFBYSxjQUFjLE1BQU0sTUFBTSxXQUFXLGFBQWEsWUFBWSxNQUFNLE1BQU0sV0FBVyxhQUFhLGNBQWMsY0FBYyxPQUFPLE1BQU0sV0FBVyxhQUFhLE9BQU8sTUFBTSxhQUFhLFlBQVksYUFBYSxPQUFPLE1BQU0sV0FBVyxXQUFXLGFBQWEsWUFBWSxhQUFhLGNBQWMsY0FBYyxjQUFjLFlBQVksT0FBTyxNQUFNLGFBQWEsY0FBYyxRQUFRLEtBQUssYUFBYSxNQUFNLEtBQUssV0FBVyxhQUFhLGNBQWMsTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFdBQVcsYUFBYSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLGFBQWEsWUFBWSxNQUFNLEtBQUssYUFBYSxjQUFjLGNBQWMsT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLGFBQWEsY0FBYyxjQUFjLGNBQWMsWUFBWSxXQUFXLFdBQVcsY0FBYyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxhQUFhLGNBQWMsWUFBWSxPQUFPLE1BQU0sYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxhQUFhLGNBQWMsWUFBWSxTQUFTLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxTQUFTLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFB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QUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsdUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSWlDOzs7Ozs7QUFNbEM7O0FBRUE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20tc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0Rla2tvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9RdWlja3NhbmQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogRGVra287XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWdhbWJvZ2U6ICNFQzlBMjk7XFxuICAgIC0tYmxhY2tPbGl2ZTogIzNCNDEzQztcXG4gICAgLS1hc2hHcmF5OiAjOURCNUIyO1xcbiAgICAtLWxpZ2h0Q3lhbjogI0RBRjBFRTtcXG4gICAgLS10aWZmYW55Qmx1ZTogIzk0RDFCRTtcXG4gICAgLS1idWZmOiAjRURCODhCO1xcbiAgICAtLXRhdXBlOiAjODU3QzhEO1xcbiAgICAtLXBpbmU6ICMxMzZGNjM7XFxuICAgIC0tYXByaWNvdDogI0ZGQzlCNTtcXG4gICAgLS1ibGFjazogIzA1MDUwNTtcXG4gICAgLS1saWdodEdyYXk6ICNDQ0NDQ0M7XFxuICAgIC0td2hpdGU6ICNGNUY1RjU7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksIFxcbmh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiBhdXRvIDFmciBhdXRvIC8gYXV0byAxZnI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgaGVpZ2h0OiA1NnB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTVweDtcXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW0gMC41cmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XFxufVxcblxcbiAgICAjbWVudS1idXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA4cHg7XFxuICAgICAgICBsZWZ0OiAzMnB4O1xcbiAgICB9XFxuICAgICAgICAjbWVudS1idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q3lhbik7XFxuICAgICAgICB9XFxuXFxuICAgIC5hZGQtdGFzay1idXR0b24ge1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkMWJlNTI7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hc2hHcmF5KTtcXG4gICAgfVxcbiAgICAjYWRkLXRhc2stcGx1cyB7XFxuICAgICAgICBoZWlnaHQ6IDE1cHg7XFxuICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICAgICAgLmFkZC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgfVxcblxcbi5wYWdlIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEN5YW4pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkMWJlNTI7ICAgIFxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmF5KTtcXG4gICAgICAgIHdpZHRoOiA0MDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQ6IGF1dG8gMWZyIC8gMWZyO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMsIHdpZHRoIDAuNzVzLCBoZWlnaHQgMC43NXMsXFxuICAgICAgICBtYXJnaW4gMC43NXMsIHZpc2liaWxpdHkgMC41cztcXG4gICAgfVxcbiAgICAgICAgLnNpZGViYXIuY2xvc2VkLCBcXG4gICAgICAgIC50YXNrLWZvcm0tY29udGFpbmVyLmNsb3NlZCwgXFxuICAgICAgICAucHJvamVjdC1kZWxldGUtcG9wdXAuY2xvc2VkIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgICB3aWR0aDogMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuICAgICAgICAuZnVsbC1zY3JlZW4ge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIH1cXG4gICAgICAgIC5zaWRlYmFyIGgyIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxuICAgICAgICB9XFxuICAgICAgICAuc2lkZWJhciBwIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5zaWRlYmFyIHA6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAgICAgLnNpZGViYXIgLmhvbWUsIFxcbiAgICAgICAgLnNpZGViYXIgLnByb2plY3RzIHtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAubmV3LXByb2plY3Qge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5uZXctcHJvamVjdCBwIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnNpZGViYXIgLm5ldy1wcm9qZWN0OmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpZmZhbnlCbHVlKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjcGx1cyB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XFxuICAgICAgICAgICAgICAgICAgICBwbGFjZS1zZWxmOiBzdGFydDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgICBncmlkOiAxZnIgMWZyIC8gMWZyIDFmcjtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAwIDE1cHg7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDeWFuKTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXByaWNvdCk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNzVzLCBvcGFjaXR5IDAuNzVzLCB2aXNpYmlsaXR5IDAuNzVzO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnByb2plY3QtZm9ybS5oaWRkZW57XFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXByaWNvdCk7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnByb2plY3QtZm9ybSBpbnB1dDpmb2N1cyB7XFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYXByaWNvdCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmZvcm0tYnV0dG9ucyB7XFxuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnByb2plY3QtZm9ybSBidXR0b24ge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICB2YXIoLS1ibGFja09saXZlKTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHJpY290KTtcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAucHJvamVjdC1mb3JtIGJ1dHRvbjpudGgtY2hpbGQoMSl7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpZmZhbnlCbHVlKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAucHJvamVjdHMgLmluYm94IHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGRpdi5wcm9qZWN0IHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBkaXYucHJvamVjdDpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpZmZhbnlCbHVlKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgZGl2LnByb2plY3QgcCB7XFxuICAgICAgICAgICAgICAgIGZsZXg6IGF1dG87XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICNwcm9qZWN0LW1lbnUge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQxcHg7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAuY29udGVudCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEN5YW4pO1xcbiAgICAgICAgZmxleDogYXV0bztcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIH1cXG5cXG4gICAgICAgIC5pbmJveC10aXRsZSB7XFxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDY3cHg7XFxuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHggcmlkZ2UgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIyNik7XFxuICAgICAgICB9IFxcbiAgICAgICAgLmluYm94LXRpdGxlIGgyIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRvZG9zLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kbyB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLnByaW9yaXR5LWxpbmUge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA3cHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAudG9kby10aXRsZSB7XFxuICAgICAgICAgICAgICAgIGZsZXg6IGF1dG87XFxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAudG9kbzpob3ZlciB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDUpO1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAycHggcmdiKDAgMCAwIC8gMjAlKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC50b2RvIGltZyB7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgI2hpZGRlbi1vcHRpb25zIHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgICAgICBib3R0b206IDMwcHg7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI2hpZGRlbi1vcHRpb25zIGRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgI2hpZGRlbi1vcHRpb25zIGRpdjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIC5zbGVlcHktY29udGFpbmVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuc2xlZXB5IHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuc2xlZXB5LXRleHQge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICBcXG4gICAgICBcXG5mb290ZXIge1xcbiAgICBmb250LWZhbWlseTogRGVra287XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMTBweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4udGFzay1mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYXNoR3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cywgdmlzaWJpbGl0eSAwLjI1cywgaGVpZ2h0IDAuNzVzLFxcbiAgICAgICAgICAgICAgICB3aWR0aCAwLjc1cztcXG59IFxcbiAgICAudGFzay1mb3JtLWNvbnRhaW5lciwgXFxuICAgIC50YXNrLWZvcm0tY29udGFpbmVyLmNsb3NlZCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBtYXJnaW46YXV0bztcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG4gICAgLnRhc2stZm9ybSB7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkOiBhdXRvIGF1dG8gYXV0byAvIDFmciAxZnI7XFxuICAgIH1cXG4gICAgICAgIC50YXNrLWZvcm0tZXhpdCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xcbiAgICAgICAgICAgIHRvcDogMTVweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgIC50YXNrLWZvcm0tZXhpdCBpbWd7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5mb3JtLXRpdGxlIHtcXG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMnJlbSAwIDJyZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcXG4gICAgICAgIH1cXG4gICAgICAgIC50b2RvLWZvcm0tdGl0bGUsXFxuICAgICAgICAudG9kby1kZXNjcmlwdGlvbixcXG4gICAgICAgIC50b2RvLWR1ZS1kYXRlLFxcbiAgICAgICAgLnByaW9yaXR5LW1lbnUsXFxuICAgICAgICAuc3VibWl0LXRhc2sge1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NGQxYmU4YztcXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgICAudG9kby1mb3JtLXRpdGxlIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAudG9kby1kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICB3aWR0aDogNzB2dztcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmR1ZS1kYXRlLXByaW8tY29udGFpbmVyIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRvZG8tZHVlLWRhdGUge1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YXNrLWZvcm0gdGV4dGFyZWE6Zm9jdXMsXFxuICAgICAgICAudGFzay1mb3JtIGlucHV0OmZvY3VzLFxcbiAgICAgICAgLnByaW9yaXR5LW1lbnU6Zm9jdXMge1xcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZDFiZTEzO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnN1Ym1pdC10YXNrIHtcXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5zdWJtaXQtdGFzazpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGQxYmVjNTtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICB9XFxuLnByb2plY3QtZGVsZXRlLXBvcHVwIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDgwdnc7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYXNoR3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cywgdmlzaWJpbGl0eSAwLjI1cywgaGVpZ2h0IDAuNzVzLFxcbiAgICAgICAgICAgICAgICB3aWR0aCAwLjc1cztcXG59ICAgXFxuICAgIC5wcm9qZWN0LWRlbGV0ZS1wb3B1cCxcXG4gICAgLnByb2plY3QtZGVsZXRlLXBvcHVwLmNsb3NlZCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgICAgICBtYXJnaW46IDEwdmggYXV0bztcXG4gICAgfVxcbiAgICAucHJvamVjdC1kZWxldGUtZXhpdCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDVweDtcXG4gICAgICAgIHJpZ2h0OiA1cHg7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIH1cXG4gICAgICAgIC5wcm9qZWN0LWRlbGV0ZS1leGl0IGltZyB7XFxuICAgICAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICB9XFxuICAgIC5wcm9qZWN0LWRlbGV0ZS1wb3B1cCBwIHtcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxuICAgIH1cXG4gICAgLnByb2plY3QtZGVsZXRlLWJ1dHRvbnMge1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgICAgICAucHJvamVjdC1kZWxldGUtYnV0dG9ucyBidXR0b24ge1xcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgIC5wcm9qZWN0LWRlbGV0ZS1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZDFiZWM1O1xcbiAgICAgICAgfVxcblxcbi5jbG9zZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcbmE6aG92ZXIge1xcbiAgICBjb2xvcjogIzRCNEI0QjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRDQUE2QjtBQUNqQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIseUNBQXlDO0FBQzdDOztJQUVJO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZixZQUFZO1FBQ1osOEJBQThCO1FBQzlCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFVBQVU7SUFDZDtRQUNJO1lBQ0ksa0NBQWtDO1FBQ3RDOztJQUVKO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsZ0NBQWdDO1FBQ2hDLFNBQVM7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O1FBQ1osZUFBZTtRQUNmLGVBQWU7UUFDZixhQUFhO0lBQ2pCO1FBQ0k7WUFDSSxrQkFBa0I7WUFDbEIsd0JBQXdCO1lBQ3hCLFlBQVk7UUFDaEI7SUFDSjtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7UUFDYiw4QkFBOEI7O0lBRWxDO1FBQ0k7WUFDSSxXQUFXO1lBQ1gsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGVBQWU7UUFDbkI7UUFDQTtZQUNJLDJCQUEyQjtRQUMvQjs7QUFFUjtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBEZWtrbztcXG4gICAgc3JjOiB1cmwoLi9EZWtrby1SZWd1bGFyLnR0Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICBzcmM6IHVybCguL1F1aWNrc2FuZC50dGYpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZ2FtYm9nZTogI0VDOUEyOTtcXG4gICAgLS1ibGFja09saXZlOiAjM0I0MTNDO1xcbiAgICAtLWFzaEdyYXk6ICM5REI1QjI7XFxuICAgIC0tbGlnaHRDeWFuOiAjREFGMEVFO1xcbiAgICAtLXRpZmZhbnlCbHVlOiAjOTREMUJFO1xcbiAgICAtLWJ1ZmY6ICNFREI4OEI7XFxuICAgIC0tdGF1cGU6ICM4NTdDOEQ7XFxuICAgIC0tcGluZTogIzEzNkY2MztcXG4gICAgLS1hcHJpY290OiAjRkZDOUI1O1xcbiAgICAtLWJsYWNrOiAjMDUwNTA1O1xcbiAgICAtLWxpZ2h0R3JheTogI0NDQ0NDQztcXG4gICAgLS13aGl0ZTogI0Y1RjVGNTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSwgXFxuaHRtbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IGF1dG8gMWZyIGF1dG8gLyBhdXRvIDFmcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICBoZWlnaHQ6IDU2cHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1NXB4O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbSAwLjVyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmF5KTtcXG59XFxuXFxuICAgICNtZW51LWJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDhweDtcXG4gICAgICAgIGxlZnQ6IDMycHg7XFxuICAgIH1cXG4gICAgICAgICNtZW51LWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDeWFuKTtcXG4gICAgICAgIH1cXG5cXG4gICAgLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGQxYmU1MjtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFzaEdyYXkpO1xcbiAgICB9XFxuICAgICNhZGQtdGFzay1wbHVzIHtcXG4gICAgICAgIGhlaWdodDogMTVweDtcXG4gICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgICAgICAuYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICB9XFxuXFxuLnBhZ2Uge1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q3lhbik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGQxYmU1MjsgICAgXFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZDogYXV0byAxZnIgLyAxZnI7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cywgd2lkdGggMC43NXMsIGhlaWdodCAwLjc1cyxcXG4gICAgICAgIG1hcmdpbiAwLjc1cywgdmlzaWJpbGl0eSAwLjVzO1xcbiAgICB9XFxuICAgICAgICAuc2lkZWJhci5jbG9zZWQsIFxcbiAgICAgICAgLnRhc2stZm9ybS1jb250YWluZXIuY2xvc2VkLCBcXG4gICAgICAgIC5wcm9qZWN0LWRlbGV0ZS1wb3B1cC5jbG9zZWQge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICAgIHdpZHRoOiAwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5mdWxsLXNjcmVlbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgfVxcbiAgICAgICAgLnNpZGViYXIgaDIge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5zaWRlYmFyIHAge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLnNpZGViYXIgcDpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpZmZhbnlCbHVlKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICAuc2lkZWJhciAuaG9tZSwgXFxuICAgICAgICAuc2lkZWJhciAucHJvamVjdHMge1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5uZXctcHJvamVjdCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgICAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLm5ldy1wcm9qZWN0IHAge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuc2lkZWJhciAubmV3LXByb2plY3Q6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlmZmFueUJsdWUpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNwbHVzIHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnByb2plY3QtZm9ybSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgICAgIGdyaWQ6IDFmciAxZnIgLyAxZnIgMWZyO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDAgMTVweDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEN5YW4pO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHJpY290KTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC43NXMsIG9wYWNpdHkgMC43NXMsIHZpc2liaWxpdHkgMC43NXM7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAucHJvamVjdC1mb3JtLmhpZGRlbntcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnByb2plY3QtZm9ybSBpbnB1dCB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHJpY290KTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAucHJvamVjdC1mb3JtIGlucHV0OmZvY3VzIHtcXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1hcHJpY290KTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuZm9ybS1idXR0b25zIHtcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMztcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAucHJvamVjdC1mb3JtIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTI1cHg7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIHZhcigtLWJsYWNrT2xpdmUpO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcmljb3QpO1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0gYnV0dG9uOm50aC1jaGlsZCgxKXtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlmZmFueUJsdWUpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC5wcm9qZWN0cyAuaW5ib3gge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgZGl2LnByb2plY3Qge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGRpdi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlmZmFueUJsdWUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBkaXYucHJvamVjdCBwIHtcXG4gICAgICAgICAgICAgICAgZmxleDogYXV0bztcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgI3Byb2plY3QtbWVudSB7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDFweDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q3lhbik7XFxuICAgICAgICBmbGV4OiBhdXRvO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgfVxcblxcbiAgICAgICAgLmluYm94LXRpdGxlIHtcXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgICAgIGhlaWdodDogNjdweDtcXG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCByaWRnZSByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjI2KTtcXG4gICAgICAgIH0gXFxuICAgICAgICAuaW5ib3gtdGl0bGUgaDIge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICB9XFxuICAgICAgICAudG9kb3MtY29udGFpbmVyIHtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpZmZhbnlCbHVlKTtcXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAucHJpb3JpdHktbGluZSB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDdweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC50b2RvLXRpdGxlIHtcXG4gICAgICAgICAgICAgICAgZmxleDogYXV0bztcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC50b2RvOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IDJweCByZ2IoMCAwIDAgLyAyMCUpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnRvZG8gaW1nIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAjaGlkZGVuLW9wdGlvbnMge1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMzBweDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjaGlkZGVuLW9wdGlvbnMgZGl2IHtcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAjaGlkZGVuLW9wdGlvbnMgZGl2OmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLnNsZWVweS1jb250YWluZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5zbGVlcHkge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5zbGVlcHktdGV4dCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIFxcbiAgICAgIFxcbmZvb3RlciB7XFxuICAgIGZvbnQtZmFtaWx5OiBEZWtrbztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi50YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hc2hHcmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzLCB2aXNpYmlsaXR5IDAuMjVzLCBoZWlnaHQgMC43NXMsXFxuICAgICAgICAgICAgICAgIHdpZHRoIDAuNzVzO1xcbn0gXFxuICAgIC50YXNrLWZvcm0tY29udGFpbmVyLCBcXG4gICAgLnRhc2stZm9ybS1jb250YWluZXIuY2xvc2VkIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIG1hcmdpbjphdXRvO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgfVxcbiAgICAudGFzay1mb3JtIHtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQ6IGF1dG8gYXV0byBhdXRvIC8gMWZyIDFmcjtcXG4gICAgfVxcbiAgICAgICAgLnRhc2stZm9ybS1leGl0IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XFxuICAgICAgICAgICAgdG9wOiAxNXB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRhc2stZm9ybS1leGl0IGltZ3tcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmZvcm0tdGl0bGUge1xcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAycmVtIDAgMnJlbTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRvZG8tZm9ybS10aXRsZSxcXG4gICAgICAgIC50b2RvLWRlc2NyaXB0aW9uLFxcbiAgICAgICAgLnRvZG8tZHVlLWRhdGUsXFxuICAgICAgICAucHJpb3JpdHktbWVudSxcXG4gICAgICAgIC5zdWJtaXQtdGFzayB7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk0ZDFiZThjO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC50b2RvLWZvcm0tdGl0bGUge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDcwdnc7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZHVlLWRhdGUtcHJpby1jb250YWluZXIge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB9XFxuICAgICAgICAudG9kby1kdWUtZGF0ZSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhc2stZm9ybSB0ZXh0YXJlYTpmb2N1cyxcXG4gICAgICAgIC50YXNrLWZvcm0gaW5wdXQ6Zm9jdXMsXFxuICAgICAgICAucHJpb3JpdHktbWVudTpmb2N1cyB7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkMWJlMTM7XFxuICAgICAgICB9XFxuICAgICAgICAuc3VibWl0LXRhc2sge1xcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLnN1Ym1pdC10YXNrOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZDFiZWM1O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIH1cXG4ucHJvamVjdC1kZWxldGUtcG9wdXAge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hc2hHcmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzLCB2aXNpYmlsaXR5IDAuMjVzLCBoZWlnaHQgMC43NXMsXFxuICAgICAgICAgICAgICAgIHdpZHRoIDAuNzVzO1xcbn0gICBcXG4gICAgLnByb2plY3QtZGVsZXRlLXBvcHVwLFxcbiAgICAucHJvamVjdC1kZWxldGUtcG9wdXAuY2xvc2VkIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgICAgIG1hcmdpbjogMTB2aCBhdXRvO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0LWRlbGV0ZS1leGl0IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNXB4O1xcbiAgICAgICAgcmlnaHQ6IDVweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgfVxcbiAgICAgICAgLnByb2plY3QtZGVsZXRlLWV4aXQgaW1nIHtcXG4gICAgICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIH1cXG4gICAgLnByb2plY3QtZGVsZXRlLXBvcHVwIHAge1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcXG4gICAgfVxcbiAgICAucHJvamVjdC1kZWxldGUtYnV0dG9ucyB7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgICAgIC5wcm9qZWN0LWRlbGV0ZS1idXR0b25zIGJ1dHRvbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnByb2plY3QtZGVsZXRlLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkMWJlYzU7XFxuICAgICAgICB9XFxuXFxuLmNsb3NlZCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuYTpob3ZlciB7XFxuICAgIGNvbG9yOiAjNEI0QjRCO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpZmZhbnlCbHVlKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IG1lbnVJY29uIGZyb20gJy4vbWVudS5zdmcnO1xuaW1wb3J0ICogYXMgaW5kZXggZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgY2F0SWNvbiBmcm9tICcuL3NsZWVweS5wbmcnO1xuaW1wb3J0IHBsdXNJY29uIGZyb20gJy4vcGx1cy5wbmcnO1xuaW1wb3J0IGJpbkljb24gZnJvbSAnLi9iaW4ucG5nJztcbmltcG9ydCBkb3RNZW51SWNvbiBmcm9tICcuL2RvdC1tZW51LnBuZyc7XG5cblxuXG5jb25zdCBjcmVhdGVDbGFzc2VkRWxlbWVudCA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBpZiAoY2xhc3NOYW1lKSBjb21wb25lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmNvbnN0IG1haW5EaXYgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ21haW4nKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IG1lbnVCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIG1lbnVCdXR0b24uc3JjID0gbWVudUljb247XG4gICAgICAgICAgICBtZW51QnV0dG9uLmlkID0gJ21lbnUtYnV0dG9uJztcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnYWRkLXRhc2stYnV0dG9uJyk7XG4gICAgICAgICAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0FERCBUQVNLJ1xuICAgICAgICAgICAgY29uc3QgcGx1cyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgcGx1cy5zcmMgPSBwbHVzSWNvbjtcbiAgICAgICAgICAgIHBsdXMuaWQgPSAnYWRkLXRhc2stcGx1cydcbiAgICAgICAgICAgIGFkZFRhc2tCdXR0b24uYXBwZW5kKHBsdXMpO1xuXG4gICAgZWxlbWVudC5hcHBlbmQobWVudUJ1dHRvbiwgYWRkVGFza0J1dHRvbilcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuXG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAncGFnZScpO1xuXG5cblxuICAgIGNvbnN0IHNpZGVCYXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ3NpZGViYXInKTtcbiAgICAgICAgICAgIGNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnaG9tZScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoMiA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaDIudGV4dENvbnRlbnQgPSBcIkhPTUVcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5ib3ggPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdpbmJveCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5ib3guaWQgPSAnaW5ib3gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5ib3gudGV4dENvbnRlbnQgPSBcIklOQk9YXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAnaW5ib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZGF5LnRleHRDb250ZW50ID0gXCJUT0RBWVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aGlzV2VlayA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ2luYm94Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzV2Vlay50ZXh0Q29udGVudCA9IFwiTkVYVCA3IERBWVNcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1wb3J0YW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAnaW5ib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudC50ZXh0Q29udGVudCA9IFwiSU1QT1JUQU5UXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoaDIsIGluYm94LCB0b2RheSwgdGhpc1dlZWssIGltcG9ydGFudClcblxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdwcm9qZWN0cycpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoMiA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaDIudGV4dENvbnRlbnQgPSBcIlBST0pFQ1RTXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbmV3IHByb2plY3QgZm9ybVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2Zvcm0nLCAncHJvamVjdC1mb3JtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lTGFiZWwuSFRNTGZvciA9ICduZXctcHJvamVjdC1uYW1lJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gJ1Byb2plY3QgTmFtZTonXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lSW5wdXQuaWQgPSAnbmV3LXByb2plY3QtbmFtZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUlucHV0Lm1heCA9IDIwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b25zRGl2ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdmb3JtLWJ1dHRvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnYnV0dG9uJywgJ2FkZC1idXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uLnR5cGUgPSAnYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdidXR0b24nLCAnbmV3LXByb2plY3QtY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc0Rpdi5hcHBlbmQoYWRkQnV0dG9uLCBjYW5jZWxCdXR0b24pXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZChuYW1lTGFiZWwsIG5hbWVJbnB1dCwgYnV0dG9uc0RpdilcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICduZXctcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9ICdBREQgTkVXIFBST0pFQ1QnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGx1cyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdXMuc3JjID0gcGx1c0ljb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1cy5pZCA9ICdwbHVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdC5hcHBlbmQocCwgcGx1cyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZChoMiwgbmV3UHJvamVjdCwgZm9ybSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZChob21lKCksIHByb2plY3RzKCkpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdjb250ZW50Jyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW5ib3ggPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ2luYm94LXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEgyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2gyJywgJ2luYm94LWgyJyk7XG4gICAgICAgICAgICAgICAgY3VycmVudEgyLnRleHRDb250ZW50ID0gYElOQk9YYFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmJveC5hcHBlbmRDaGlsZChjdXJyZW50SDIpO1xuICAgICAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAndG9kb3MtY29udGFpbmVyJyk7XG4gICBcbiAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgIGNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2Zvb3RlcicsICdmb290ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhLmlubmVySFRNTCA9ICdnaXRodWIuY29tL3J1YmJlcnRlZXRoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9ydWJiZXJ0ZWV0aCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmEudGFyZ2V0ID0gJ19ibGFuaydcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChwYXJhKVxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGN1cnJlbnRJbmJveCwgdG9kb0NvbnRhaW5lciwgZm9vdGVyKCkpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgXG5cblxuXG4gICAgZWxlbWVudC5hcHBlbmQoc2lkZUJhcigpLCBjb250ZW50KCkpXG4gICAgXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAndGFzay1mb3JtLWNvbnRhaW5lcicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJylcblxuICAgICAgICBjb25zdCBleGl0QnV0dG9uID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICd0YXNrLWZvcm0tZXhpdCcpO1xuICAgICAgICAgICAgY29uc3QgeCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgeC5zcmMgPSBwbHVzSWNvbjtcbiAgICAgICAgICAgIGV4aXRCdXR0b24uYXBwZW5kKHgpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1UaXRsZSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ2Zvcm0tdGl0bGUnKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdOZXcgVG8tRG8nXG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdmb3JtJywndGFzay1mb3JtJyk7XG4gICAgICAgIGZvcm0ubWV0aG9kID0gJyc7XG4gICAgICAgIGZvcm0uYWN0aW9uID0gJyc7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgndGV4dGFyZWEnLCAndG9kby1mb3JtLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGl0bGU6IGV4LiAnR3ltJ1wiO1xuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQucm93cyA9ICcyJ1xuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQubWF4ID0gNDA7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgndGV4dGFyZWEnLCAndG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uOiBleC4gJ1dvcmsgb24gY2FyZGlvJ1wiO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucm93cyA9ICc1J1xuXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ2R1ZS1kYXRlLXByaW8tY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2lucHV0JywgJ3RvZG8tZHVlLWRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5wbGFjZWhvbGRlciA9ICdERC9NTS9ZWVlZJztcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdzZWxlY3QnLCAncHJpb3JpdHktbWVudScpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eS5pbm5lckhUTUwgPSBgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPlByaW9yaXR5IChvcHRpb25hbCk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG93XCI+TG93PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+SGlnaDwvb3B0aW9uPmA7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChkdWVEYXRlSW5wdXQsIHByaW9yaXR5KVxuXG4gICAgICAgICAgICBjb25zdCBzdWJtaXRUYXNrID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2J1dHRvbicsICdzdWJtaXQtdGFzaycpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFRhc2sudHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFRhc2sudGV4dENvbnRlbnQgPSAnQUREIFRPIERPJ1xuXG4gICAgICAgICAgICBmb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBkZXNjcmlwdGlvbklucHV0LCBjb250YWluZXIsIHN1Ym1pdFRhc2spXG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmQoZXhpdEJ1dHRvbiwgZm9ybVRpdGxlLCBmb3JtKVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBwcm9qZWN0RGVsZXRlUG9wdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAncHJvamVjdC1kZWxldGUtcG9wdXAnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xuICAgICAgICBjb25zdCBleGl0ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdwcm9qZWN0LWRlbGV0ZS1leGl0Jyk7XG4gICAgICAgICAgICBjb25zdCB4ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICB4LnNyYyA9IHBsdXNJY29uO1xuICAgICAgICAgICAgZXhpdC5hcHBlbmQoeClcblxuICAgICAgICBjb25zdCBwID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHByb2plY3QgYW5kIGFsbCAndG8tZG9zJyBhc3NvY2lhdGVkIHdpdGggaXQ/YFxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ3Byb2plY3QtZGVsZXRlLWJ1dHRvbnMnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm0gPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY29uZmlybS50ZXh0Q29udGVudCA9ICdjb25maXJtJ1xuICAgICAgICAgICAgY29uc3QgY2FuY2VsID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdjYW5jZWwnXG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGNvbmZpcm0sIGNhbmNlbCk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kKGV4aXQsIHAsIGJ1dHRvbkNvbnRhaW5lcilcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxudHJ5IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLmFwcGVuZChoZWFkZXIoKSwgcGFnZSgpLCBmb3JtKCksIHByb2plY3REZWxldGVQb3B1cCgpKTtcbn0gY2F0Y2ggKGUpe1xuICAgIGNvbnNvbGUubG9nKGUpXG59XG5cblxuXG4vLy8vL1xuLy8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vLy8vXG4vLy8vL1xuXG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcblxuICAgICAgICAvLyBsb2dpYyBmb3Igc2VsZWN0aW5nIGluYm94IGFuZCBwcm9wYWdhdGluZyB3aXRoIGFwcHJvcHJpYXRlIHRvZG9zXG4gICAgY29uc3Qgc2VsZWN0SW5ib3ggPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmJveCcpLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIC8vIGNoYW5nZSB0aXRsZSBkZXBlbmRpbmcgb24gY3VycmVudCBpbmJveFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtaDInKS50ZXh0Q29udGVudCA9IHRhcmdldC50ZXh0Q29udGVudDtcblxuICAgICAgICBzd2l0Y2ggKHRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgY2FzZSAnSU5CT1gnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3UgYXJlIG5vdyBpbiB0aGUgbWFpbiBpbmJveGApO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGxUb2RvcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVE9EQVknOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3UgYXJlIG5vdyBpbiBUb2RheSdzIGluYm94YCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheVRvZGF5VG9kb3MoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ05FWFQgNyBEQVlTJzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWW91IGFyZSBub3cgaW4gVGhpcyBXZWVrJ3MgaW5ib3hgKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5VGhpc1dlZWtUb2RvcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSU1QT1JUQU5UJzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWW91IGFyZSBub3cgaW4gdGhlIEhpZ2ggUHJpb3JpdHkgaW5ib3hgKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5SW1wb3J0YW50VG9kb3MoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHlvdSBhcmUgbm93IGluIHRoZSAke3RhcmdldC50ZXh0Q29udGVudH0gaW5ib3hgKVxuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlQcm9qZWN0VG9kb3ModGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluYm94SXNFbXB0eSA9ICgpID0+IHtcbiAgICAgICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm15VG9kb0xpc3QpLmxlbmd0aCA9PSAwKSB7cmV0dXJuIHRydWU7fSBcbiAgICAgICAgZWxzZSB7cmV0dXJuIGZhbHNlO31cbiAgICB9XG5cblxuICAgIGNvbnN0IGdldEFjdGl2ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpXTtcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZmlsdGVyKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYgKFsuLi5wcm9qZWN0LmNsYXNzTGlzdF0uaW5kZXhPZignYWN0aXZlJykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0WzBdLnRleHRDb250ZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldEFjdGl2ZUluYm94ID0gKCkgPT4ge1xuICAgICAgICBsZXQgaW5ib3hMaXN0ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmJveCcpXTtcbiAgICAgICAgbGV0IGN1cnJlbnRJbmJveCA9IGluYm94TGlzdC5maWx0ZXIoaW5ib3ggPT4ge1xuICAgICAgICAgICAgaWYoWy4uLmluYm94LmNsYXNzTGlzdF0uaW5kZXhPZignYWN0aXZlJykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5ib3g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBjdXJyZW50SW5ib3hbMF07XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudEluYm94RW1wdHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpLmxlbmd0aCA9PSAwXG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVNsZWVweUNhdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGluYm94SXNFbXB0eSgpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ3NsZWVweS1jb250YWluZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdzbGVlcHktdGV4dCcpO1xuICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSAnWW91IGhhdmUgbm8gY3VycmVudCB0YXNrcyc7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gY2F0SWNvbjtcbiAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnc2xlZXB5Jyk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kKGltZywgcCk7XG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsZWVweS1jb250YWluZXInKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmQoZGl2KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGVlcHktY29udGFpbmVyJykgIT0gbnVsbClcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGVlcHktY29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUb2RvID0gKGlkKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm15VG9kb0xpc3QpO1xuICAgICAgICBsZXQgbmV3TGlzdCA9IGN1cnJlbnRMaXN0LmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8uaWQgIT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kb1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUb2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KG5ld0xpc3QpKTtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuc2VsZWN0SW5ib3goZGlzcGxheUNvbnRyb2xsZXIuZ2V0QWN0aXZlSW5ib3goKSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9ICh0b2RvKSA9PiB7XG5cbiAgICAgICAgLy9jcmVhdGUgdG9kbyB0byBhZGQgdG8gY29udGFpbmVyICh0aXRsZSwgZGF0ZSwgb3B0aW9ucylcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAndG9kbycpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGluZSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAncHJpb3JpdHktbGluZScpO1xuICAgICAgICAgICAgc3dpdGNoICh0b2RvLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnTG93JzpcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMaW5lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnTWVkaXVtJzpcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMaW5lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0hpZ2gnOlxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxpbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCdcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxpbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpdGxlUCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlUC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICAgICAgY29uc3QgZGF0ZVAgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICd0b2RvLWRhdGUnKTtcbiAgICAgICAgICAgIGRhdGVQLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuXG4gICAgICAgIGNvbnN0IGhpZGRlbklEID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICBoaWRkZW5JRC5pZCA9ICdpZCdcbiAgICAgICAgICAgIGhpZGRlbklELnRleHRDb250ZW50ID0gdG9kby5pZDtcblxuICAgICAgICAgICAgLy9vcHRpb25zIGJ1dHRvbnNcbiAgICAgICAgY29uc3QgaGlkZGVuT3B0aW9ucyA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICBoaWRkZW5PcHRpb25zLmlkID0gJ2hpZGRlbi1vcHRpb25zJztcblxuICAgICAgICAgICAgY29uc3QgZWRpdCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnb3B0aW9ucy1lZGl0Jyk7XG4gICAgICAgICAgICAgICAgZWRpdC50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnb3B0aW9ucy1jYW5jZWwnKTtcbiAgICAgICAgICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJ1xuICAgICAgICAgICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoaWRkZW4tb3B0aW9ucycpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBoaWRkZW5PcHRpb25zLmFwcGVuZChlZGl0LCBjYW5jZWwpO1xuXG4gICAgICAgICAgICAvLyB0b2RvIGJ1dHRvbnNcbiAgICAgICAgY29uc3QgYmluID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBiaW4uc3JjID0gYmluSWNvbjtcbiAgICAgICAgICAgIGJpbi5pZCA9ICdiaW4nO1xuICAgICAgICAgICAgYmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFyZ2V0IGhpZGRlbiBJRCBvZiB0b2RvO1xuICAgICAgICAgICAgICAgIGxldCB4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5sYXN0Q2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICByZW1vdmVUb2RvKHgpO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIG9wdGlvbnMuc3JjID0gZG90TWVudUljb247XG4gICAgICAgICAgICBvcHRpb25zLmlkID0gJ29wdGlvbnMnO1xuICAgICAgICAgICAgb3B0aW9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaGlkZGVuT3B0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlMaW5lLCB0aXRsZVAsIGRhdGVQLCBvcHRpb25zLCBiaW4sIGhpZGRlbk9wdGlvbnMsIGhpZGRlbklEKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpLmFwcGVuZCh0b2RvQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhckN1cnJlbnRJbmJveCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb2xkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpO1xuICAgICAgICBvbGRDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAndG9kb3MtY29udGFpbmVyJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykuYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgfVxuICAgIGNvbnN0IGRpc3BsYXlBbGxUb2RvcyA9ICgpID0+IHtcbiAgICAgICAgaWYgKGluYm94SXNFbXB0eSgpID09IGZhbHNlKSB7XG4gICAgICAgICAgICBjbGVhckN1cnJlbnRJbmJveCgpO1xuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UubXlUb2RvTGlzdCkuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtkaXNwbGF5U2xlZXB5Q2F0KCk7fVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlUb2RheVRvZG9zID0gKCkgPT4ge1xuICAgICAgICBpZiAoaW5ib3hJc0VtcHR5KCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNsZWFyQ3VycmVudEluYm94KCk7XG4gICAgICAgICAgICBsZXQgdG9kYXlzTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm15VG9kb0xpc3QpLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXlMaXN0ID0gdG9kby5kdWVEYXRlLnNwbGl0KCctJyk7XG4gICAgICAgICAgICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpID09IGRheUxpc3RbMl1cbiAgICAgICAgICAgICAgICAgICAgICAgICYmIG5ldyBEYXRlKCkuZ2V0TW9udGgoKSA9PSBwYXJzZUludChkYXlMaXN0WzFdKSAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSA9PSBkYXlMaXN0WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2RvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0b2RheXNMaXN0LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVUb2RvKHRvZG8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtkaXNwbGF5U2xlZXB5Q2F0KCk7fVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlUaGlzV2Vla1RvZG9zID0gKCkgPT4ge1xuICAgICAgICBpZiAoaW5ib3hJc0VtcHR5KCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNsZWFyQ3VycmVudEluYm94KCk7XG4gICAgICAgICAgICBsZXQgVGhpc1dlZWtMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UubXlUb2RvTGlzdCkuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4LmRheUZ1bmNzLmlzV2l0aGluV2VlayhuZXcgRGF0ZSgpLmdldFRpbWUoKSwgbmV3IERhdGUodG9kby5kdWVEYXRlKS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2RvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBUaGlzV2Vla0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge2Rpc3BsYXlTbGVlcHlDYXQoKTt9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheUltcG9ydGFudFRvZG9zID0gKCkgPT4ge1xuICAgICAgICBpZiAoaW5ib3hJc0VtcHR5KCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNsZWFyQ3VycmVudEluYm94KCk7XG4gICAgICAgICAgICBsZXQgaW1wb3J0YW50TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm15VG9kb0xpc3QpLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0b2RvLnByaW9yaXR5ID09ICdIaWdoJykgcmV0dXJuIHRvZG9cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpbXBvcnRhbnRMaXN0LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVUb2RvKHRvZG8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtkaXNwbGF5U2xlZXB5Q2F0KCk7fVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0VG9kb3MgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAoaW5ib3hJc0VtcHR5KCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNsZWFyQ3VycmVudEluYm94KCk7XG4gICAgICAgICAgICBnZXRBY3RpdmVQcm9qZWN0KCk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5teVRvZG9MaXN0KS5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICBpZih0b2RvLnByb2plY3QgPT0gZ2V0QWN0aXZlUHJvamVjdCgpKSByZXR1cm4gdG9kbztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlVG9kbyh0b2RvKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7ZGlzcGxheVNsZWVweUNhdCgpO31cbiAgICB9XG4gICAgXG4gICAgY29uc3QgY2xlYXJUb2RvRm9ybSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybS10aXRsZScpO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWR1ZS1kYXRlJyk7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1tZW51Jyk7XG5cbiAgICAgICAgdGl0bGUudmFsdWUgPSAnJztcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgZGF0ZS52YWx1ZSA9ICcnO1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBleGlzdHM7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1uYW1lJykudmFsdWU7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZS5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcHJvamVjdCBuYW1lIGlzICR7cHJvamVjdE5hbWUubGVuZ3RofSBjaGFycyBsb25nYClcbiAgICAgICAgICAgIGFsZXJ0KCdQcm9qZWN0IG5hbWUgbXVzdCBiZSBiZXR3ZWVuIDMgYW5kIDE4IGNoYXJhY3RlcnMnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvamVjdE5hbWUubGVuZ3RoID4gMTgpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQcm9qZWN0IG5hbWUgbXVzdCBiZSBiZXR3ZWVuIDMgYW5kIDE4IGNoYXJhY3RlcnMnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICAgICAgLy8gY2hlY2sgaWYgcHJvamVjdCBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBwcm9qZWN0cy5jaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZS50ZXh0Q29udGVudCA9PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdQcm9qZWN0IGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICBsZXQgZGl2ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdpbmJveCcpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuc2VsZWN0SW5ib3goZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGxldCBwID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBwLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZChwKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIGluZGV4LnN0b3JhZ2Uuc3RvcmVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9nZ2xlTmV3UHJvamVjdEZvcm0oKTtcbiAgICAgICAgICAgIGNsZWFyTmV3UHJvamVjdEZvcm0oKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkVG9kbyA9ICgpID0+IHtcbiAgICAgICAgLy8gdmFyaWFibGVzIHRvIGFjcXVpcmUgZm9ybSBpbnB1dCB2YWx1ZXMgXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tdGl0bGUnKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kdWUtZGF0ZScpO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktbWVudScpO1xuXG4gICAgICAgICAgICAvLyBzZXRzIGN1cnJlbnQgcHJvamVjdCBrZXkgYW5kIGdpdmVzIHZhbHVlIGlmIGEgcHJvamVjdCBpcyBzZWxlY3RlZFxuICAgICAgICBsZXQgY3VycmVudFByb2plY3Q7XG4gICAgICAgIGxldCBwcm9qZWN0cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpXVxuXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgbGlzdCA9IFsuLi5wcm9qZWN0LmNsYXNzTGlzdF07XG4gICAgICAgICAgICBpZiAobGlzdC5pbmRleE9mKCdhY3RpdmUnKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgdG9kbyA9IG5ldyBpbmRleC5Ub2RvKGxvY2FsU3RvcmFnZS5pZCwgdGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgY3VycmVudFByb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvKTtcbiAgICAgICAgICAgIC8vIHN0b3JlIHRvZG8gaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgICBpbmRleC5zdG9yYWdlLnN0b3JlSXRlbSh0b2RvKTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgZW1wdHkgaW5ib3ggaW1hZ2UgbmVlZHMgdG8gYmUgcmVtb3ZlZFxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5U2xlZXB5Q2F0KCk7XG5cbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY2xlYXJUb2RvRm9ybSgpO1xuICAgIH1cblxuXG4gICAgLy8gbWFudWFsIGRpc3BsYXlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5ib3gnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIGRpc3BsYXlBbGxUb2RvcygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0SW5ib3gsXG4gICAgICAgIGRpc3BsYXlTbGVlcHlDYXQsXG4gICAgICAgIGluYm94SXNFbXB0eSxcbiAgICAgICAgY2xlYXJUb2RvRm9ybSxcbiAgICAgICAgZGlzcGxheUFsbFRvZG9zLFxuICAgICAgICBkaXNwbGF5VG9kYXlUb2RvcyxcbiAgICAgICAgZGlzcGxheVRoaXNXZWVrVG9kb3MsXG4gICAgICAgIGRpc3BsYXlJbXBvcnRhbnRUb2RvcyxcbiAgICAgICAgZGlzcGxheVByb2plY3RUb2RvcyxcbiAgICAgICAgZ2V0QWN0aXZlSW5ib3gsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGFkZFRvZG9cbiAgICB9XG59KSgpXG5cblxuXG5cblxuXG5cbmNvbnN0IGFkZE5vdGVzID0gKGlkKSA9PiB7XG4gICAgICAgIC8vZ3JhYiB0b2RvIGZyb20gc3RvcmFnZVxuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5teVRvZG9MaXN0KVtpZF07XG4gICAgICAgIC8vbWFrZSBhIGNvcHkgb2YgdG9kb3MgbGlzdDtcbiAgICBsZXQgbmV3TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm15VG9kb0xpc3QpO1xuICAgICAgICAvL3NldCBub3RlcyBvZiB0b2RvXG4gICAgb2JqLm5vdGVzID0gJ2RvIHNvbWUgc3R1ZmYnXG4gICAgICAgIC8vIHVwZGF0ZSB2YWx1ZSBpbiB0b2RvcyBsaXN0XG4gICAgbmV3TGlzdFtpZF0gPSBvYmo7XG4gICAgICAgIC8vIHJlc3RvcmUgdG9kb3MgbGlzdCBpbiBsb2NhbCBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShuZXdMaXN0KSk7XG59XG5cblxuXG4vLy8vL1xuLy8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8vLy9cblxuXG5cbi8vLy8vXG4vLy8vLyBTSURFQkFSIE1FRElBIFFVRVJZIExJU1RFTkVSUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLy8vL1xuXG5jb25zdCBtZW51SGlkZXIgPSAoeCkgPT4ge1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnNpZGViYXInKTtcbiAgICBpZiAoeC5tYXRjaGVzKSB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZWQnKTtcbiAgICB9XG59O1xuXG5jb25zdCBmdWxsc2NyZWVuTWVudSA9ICh4KSA9PiB7XG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuc2lkZWJhcicpO1xuICAgIGlmKHgubWF0Y2hlcykge1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2Z1bGwtc2NyZWVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsLXNjcmVlbicpO1xuICAgIH07XG59O1xuXG5cbmxldCBoaWRlTWVudSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNDAwcHgpXCIpO1xubWVudUhpZGVyKGhpZGVNZW51KTtcbmhpZGVNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG1lbnVIaWRlcik7XG5cbmxldCBzaXplTWVudSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogODAwcHgpXCIpO1xuc2l6ZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVsbHNjcmVlbk1lbnUpO1xuXG5cbi8vLy8vXG4vLy8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLy8vL1xuXG5cblxuLy8vLy9cbi8vLy8vIFNJREVCQVIgRVZFTlQgTElTVEVORVJTICYgRlVOQ1RJT05TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vLy8vXG5jb25zdCB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2VkJyk7XG59XG5cbmNvbnN0IHRvZ2dsZU5ld1Byb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn07XG5cbmNvbnN0IGNsZWFyTmV3UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LW5hbWUnKS52YWx1ZSA9ICcnO1xufTtcblxuICAgIC8vIGhhbWJ1cmdlciBtZW51IGJ1dHRvbiwgdG9nZ2xlcyBzaWRlYmFyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVTaWRlYmFyKCk7XG59KTtcblxuICAgIC8vIHRvZ2dsZXMgbmV3IHByb2plY3QgZm9ybSBvbiBjbGljayBvZiBuZXcgcHJvamVjdCBidXR0b25cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZ2dsZU5ld1Byb2plY3RGb3JtKCk7XG59KTtcblxuICAgIC8vIGNhbmNlbHMgYW5kIHJlc2V0cyBuZXcgcHJvamVjdCBpbnB1dCBcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1jYW5jZWwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVOZXdQcm9qZWN0Rm9ybSgpO1xuICAgIGNsZWFyTmV3UHJvamVjdEZvcm0oKTtcbn0pO1xuICAgIC8vIGFkZHMgcHJvamVjdCB0byBzdG9yYWdlXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUNvbnRyb2xsZXIuYWRkUHJvamVjdClcblxuY29uc3QgbG9hZFByb2plY3RzID0gKCkgPT4ge1xuICAgIGlmIChpbmRleC5zdG9yYWdlLmdldFByb2plY3RzKCkgIT09IG51bGwpIHtcbiAgICAgICAgSlNPTi5wYXJzZShpbmRleC5zdG9yYWdlLmdldFByb2plY3RzKCkpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgZGl2ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdpbmJveCcpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuc2VsZWN0SW5ib3goZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50RWxlbWVudC50ZXh0Q29udGVudClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbGV0IHAgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuXG4gICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gZG90TWVudUljb247XG4gICAgICAgICAgICAgICAgICAgIGltZy5pZCA9ICdwcm9qZWN0LW1lbnUnXG5cbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKHAsIGltZylcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4gICAgLy8gcHJldmVudCBkZWZhdWx0IG9mIHByb2plY3QgZm9ybSBvbiBlbnRlciBwcmVzc1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgLy8gZGlzcGxheSBwcm9qZWN0cyBvbiBwYWdlIGxvYWRcbiAgICBsb2FkUHJvamVjdHMoKTtcbn0pXG4gICAgLy8gaW5ib3ggc2VsZWN0b3IgbGlzdGVuZXJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmJveCcpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuc2VsZWN0SW5ib3goZS50YXJnZXQpXG4gICAgfSlcbn0pXG5cblxuLy8vLy9cbi8vLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLy8vL1xuXG5cblxuLy8vLy9cbi8vLy8vXG4vLy8vLy0tLS0tTkVXIFRBU0sgRVZFTlQgTElTVEVORVJTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vLy8vXG4vLy8vL1xuXG5jb25zdCB0b2dnbGVOZXdUYXNrV2luZG93ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0tY29udGFpbmVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2VkJyk7XG59XG4gICAgLy8gb3BlbiBuZXcgdGFzayB3aW5kb3cgb24gXCJhZGQgdGFza1wiIGJ1dHRvbiBjbGlja1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZ2dsZU5ld1Rhc2tXaW5kb3coKTtcbn0pXG5cbiAgICAvLyBjbG9zZSBuZXcgdGFzayB3aW5kb3cgYW5kIGNsZWFyIGZvcm0gd2l0aCBleGl0IGJ1dHRvblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybS1leGl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuY2xlYXJUb2RvRm9ybSgpO1xuICAgIHRvZ2dsZU5ld1Rhc2tXaW5kb3coKTtcbn0pXG5cbiAgICAvLyBhZGQgdG8gZG8gYW5kIGNsb3NlIG5ldyB0YXNrIHdpbmRvd1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybS10aXRsZScpLnZhbHVlIFxuICAgICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRlc2NyaXB0aW9uJykudmFsdWUgXG4gICAgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZHVlLWRhdGUnKS52YWx1ZSkge1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5hZGRUb2RvKCk7ICAgIFxuICAgICAgICB0b2dnbGVOZXdUYXNrV2luZG93KCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgaW5ib3ggPSBkaXNwbGF5Q29udHJvbGxlci5nZXRBY3RpdmVJbmJveCgpO1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5zZWxlY3RJbmJveChpbmJveCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBmaWxsIGluIGFsbCByZXF1aXJlZCBmaWVsZHMnKTtcbiAgICB9XG4gICAgXG59KVxuXG5cblxuXG4iLCJcblxuY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IgKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBub3Rlcykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTsgXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgfVxufVxuXG5cblxuY29uc3Qgc3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgICAgIC8vIHNldHVwIElEIGNvdW50ZXIgICAgXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpID09IG51bGwpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgJzAnKTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRvZG9MaXN0JykgPT0gbnVsbCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUb2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KFtdKSlcbiAgICB9XG4gICAgXG4gICAgXG5cbiAgICBjb25zdCBpbmNyZW1lbnRJRCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHggPSBwYXJzZUZsb2F0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpKTtcbiAgICAgICAgeCsrO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCBgJHt4fWApXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SUQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yYWdlQXZhaWxhYmxlID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZSAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdG9yZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSkge1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRvZG9MaXN0JykgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoW2l0ZW1dKSk7XG4gICAgICAgICAgICAgICAgc3RvcmFnZS5pbmNyZW1lbnRJRCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRvZG9MaXN0Jykuc3BsaXQoJywnKSk7XG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkobGlzdCkpOyBcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmluY3JlbWVudElEKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnbm8gc3RvcmFnZSBhdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgLy8gZm9yIG5vdyBtYW51YWxseSByZW1vdmUgaXRlbSB3IHBhcmFtXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGl0ZW0uaWQpO1xuXG4gICAgICAgIC8vIGxvZ2ljIHRvIHJlbW92ZSBpdGVtIGZyb20gRE9NO1xuICAgICAgICAvLyBnb2VzIGhlcmVcbiAgICB9XG5cbiAgICBjb25zdCBnZXQgPSAoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtKSlcbiAgICB9XG5cblxuICAgICAgICAvLyBjaGVjayBpZiBpdGVtIGluIHN0b3JhZ2U7XG4gICAgY29uc3QgaXRlbUluU3RvcmFnZSA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IHRvZG8udGl0bGUpIHsgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZvdW5kIGl0ZW0nKTsgcmV0dXJuIHRydWUgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGl0ZW0gZG9lc25cXCd0IGV4aXN0Jyk7IHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdExpc3QnKSA9PSBudWxsICkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215UHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShbcHJvamVjdF0pKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcpLnNwbGl0KCcsJykpO1xuICAgICAgICAgICAgbGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215UHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBsZXQgbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdExpc3QnKS5zcGxpdCgnLCcpKTtcbiAgICAgICAgaWYgKGxpc3QuaW5kZXhPZihwcm9qZWN0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGxpc3Quc3BsaWNlKGxpc3QuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KGxpc3QpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbmNyZW1lbnRJRCxcbiAgICAgICAgZ2V0SUQsXG4gICAgICAgIHN0b3JhZ2VBdmFpbGFibGUsXG4gICAgICAgIHN0b3JlSXRlbSxcbiAgICAgICAgZ2V0LFxuICAgICAgICByZW1vdmVJdGVtLFxuICAgICAgICBpdGVtSW5TdG9yYWdlLFxuICAgICAgICBzdG9yZVByb2plY3QsXG4gICAgICAgIGRlbGV0ZVByb2plY3QsXG4gICAgICAgIGdldFByb2plY3RzXG4gICAgfVxufSkoKTtcblxuXG5jb25zdCBkYXlGdW5jcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGF5TGVuZ3RoID0gMTAwMCo2MCo2MCoyNDtcbiAgICBjb25zdCB3ZWVrTGVuZ3RoID0gZGF5TGVuZ3RoICogNztcblxuICAgIGNvbnN0IGlzV2l0aGluV2VlayA9IChub3csIGRheSkgPT4ge1xuICAgICAgICByZXR1cm4gKChkYXkgLSBub3cpIDwgd2Vla0xlbmd0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNXaXRoaW5XZWVrXG4gICAgfVxufSkoKVxuXG5cblxuZXhwb3J0IHsgc3RvcmFnZSwgVG9kbywgZGF5RnVuY3MgfVxuXG5cblxuXG5cbi8vLy8vLS0tLS0tLS0tLS0tLS0tLS0tLSBURVNUSU5HXG5cbi8vIHN0b3JhZ2Uuc3RvcmVJdGVtKG5ldyBUb2RvKHN0b3JhZ2UuZ2V0SUQoKSwgJ3RvZGF5JywgJ3RoaW5ncyB0byBkbyB0b2RheScsJ2FwcmlsIDEwJywgJ2xvdycpKTtcbi8vIHN0b3JhZ2Uuc3RvcmVJdGVtKG5ldyBUb2RvKHN0b3JhZ2UuZ2V0SUQoKSwgJ3RvbW9ycm93JywgJ2RvIHN0dWZmJywgJ3RvbW9ycm93JywgJ21lZGl1bScpKTtcblxuXG5cblxuXG5cblxuLy8gbGV0IHggPSBuZXcgRGF0ZSgnRmViIDI4IDIwMjMgMTQ6MDE6MDAnKS5nZXRUaW1lKCk7XG4vLyBjb25zb2xlLmxvZyhkYXlGdW5jcy5ub3coKSlcbi8vIGNvbnNvbGUubG9nKGRheUZ1bmNzLmlzV2l0aGluV2VlayhkYXlGdW5jcy5ub3coKSwgeCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==