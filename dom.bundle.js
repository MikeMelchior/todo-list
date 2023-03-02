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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Dekko;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n    font-family: Quicksand;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n:root {\n    --gamboge: #EC9A29;\n    --blackOlive: #3B413C;\n    --ashGray: #9DB5B2;\n    --lightCyan: #DAF0EE;\n    --tiffanyBlue: #94D1BE;\n    --buff: #EDB88B;\n    --taupe: #857C8D;\n    --pine: #136F63;\n    --apricot: #FFC9B5;\n    --black: #050505;\n    --lightGray: #CCCCCC;\n    --white: #F5F5F5;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody, \nhtml {\n    min-height: 100vh;\n    min-width: 100vw;\n}\n\nbody {\n    display: flex;\n    align-items: stretch;\n    min-width: 100vw;\n}\n\n.main {\n    width: 100%;\n    min-width: 100vw;\n    display: grid;\n    grid: auto 1fr auto / auto 1fr;\n}\n\nheader {\n    grid-area: 1 / 1 / 2 / 3;\n    font-family: Quicksand;\n    height: 56px;\n    width: 100vw;\n    min-width: 400px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 55px;\n    padding: 0.5rem 2rem 0.5rem 2rem;\n    background-color: var(--white);\n    border-bottom: 1px solid var(--lightGray);\n}\n\n    #menu-button {\n        height: 40px;\n        cursor: pointer;\n        padding: 8px;\n        background-color: var(--white);\n        border-radius: 3px;\n        position: absolute;\n        top: 8px;\n        left: 32px;\n    }\n        #menu-button:hover {\n            background-color: var(--lightCyan);\n        }\n\n    .add-task-button {\n        padding: 5px 10px;\n        border-radius: 5px;\n        display: grid;\n        grid-template-columns: auto auto;\n        gap: 10px;\n        cursor: pointer;\n        background-color: #94d1be52;\n        border: 1px solid var(--ashGray);\n    }\n    #add-task-plus {\n        height: 15px;\n        place-self: center;\n        \n    }\n        .add-task-button:hover {\n            opacity: 0.8;\n        }\n\n.page {\n    grid-area: 2/2/3/3;\n    background-color: var(--lightCyan);\n    display: flex;\n    flex-wrap: wrap;\n}\n    .sidebar {\n        background-color: #94d1be52;    \n        border-right: 1px solid var(--lightGray);\n        width: 100%;\n        max-width: 800px;\n        padding: 2rem;\n        font-family: Quicksand;\n        font-weight: 400;\n        display: grid;\n        grid: auto 1fr / 1fr;\n        opacity: 1;\n        visibility: visible;\n        transition: all 1s ease-in-out;\n    }\n        .sidebar.closed, \n        .task-form-container.closed, \n        .project-delete-popup.closed {\n            opacity: 0;\n            visibility: hidden;\n            width: 0;\n            padding: 0;\n            height: 0;\n            border: 0;\n            margin: 0;\n        }\n        .full-screen {\n            width: 100%;\n        }\n        .sidebar h2 {\n            margin-bottom: 1.5rem;\n            padding-bottom: 5px;\n            border-bottom: 1px solid;\n        }\n        .sidebar p {\n            padding: 0.5rem;\n            padding-left: 1rem;\n            cursor: pointer;\n            font-size: 20px;\n            margin-bottom: 0.5rem;\n        }\n            .sidebar p:hover {\n                background-color: var(--tiffanyBlue);\n            }\n            \n        .sidebar .home, \n        .sidebar .projects {\n            padding-bottom: 3rem;\n        }\n            .new-project {\n                display: grid;\n                grid-template-columns: auto 1fr;\n                gap: 10px;\n                margin-bottom: 0.5rem;\n            }\n                .new-project p {\n                    margin-bottom: 0;\n                }\n                .sidebar .new-project:hover {\n                    background-color: var(--tiffanyBlue);\n                }\n                #plus {\n                    height: 15px;\n                    place-self: start;\n                    align-self: center;\n                }\n            .project-form {\n                display: grid;\n                grid: 1fr 1fr / 1fr 1fr;\n                align-items: center;\n                gap: 0 15px;\n                padding-left: 1rem;\n                background-color: var(--lightCyan);\n                border: 1px solid var(--apricot);\n                border-radius: 5px;\n                opacity: 1;\n                height: 100px;\n                visibility: visible;\n                transition: height 0.75s, opacity 0.75s, visibility 0.75s;\n            }\n                .project-form.hidden{\n                    opacity: 0;\n                    visibility: hidden;\n                    height: 0;\n                }\n                .project-form input {\n                    height: 25px;\n                    border: 1px solid var(--apricot);\n                    border-radius: 5px;\n                    margin-right: 10px;\n                }\n                .project-form input:focus {\n                    outline: none;\n                    border: 3px solid var(--apricot);\n                }\n                .form-buttons {\n                    grid-area: 2 / 1 / 3 / 3;\n                    display: flex;\n                    justify-content: space-evenly;\n                }\n                .project-form button {\n                    width: 125px;\n                    padding: 7px;\n                    border-radius: 5px;\n                    font-size: 14px;\n                    border: 1px solid red;\n                    color:  var(--blackOlive);\n                    font-weight: 700;\n                    background-color: var(--apricot);\n                    cursor: pointer;\n                }\n                .project-form button:nth-child(1){\n                    border: 1px solid green;\n                    background-color: var(--tiffanyBlue);\n                }\n                \n            .projects .inbox {\n                margin-left: 2rem;\n                margin-bottom: 0.5rem;\n                height: 40px;\n                display: grid;\n                place-self: center;\n            }\n            .project:hover {\n                background-color: var(--tiffanyBlue);\n            }\n            .project p {\n                flex: auto;\n                margin-bottom: 0;\n            }\n            \n    .content {\n        background-color: var(--lightCyan);\n        flex: auto;\n        font-family: Quicksand;\n        position: relative;\n        padding-bottom: 2rem;\n        min-width: 400px;\n        max-width: 100vw;\n        height: 100vh;\n    }\n\n        .inbox-title {\n            width: 90%;\n            height: 67px;\n            margin: 0px auto;\n            display: flex;\n            align-items: end;\n            padding-left: 3rem;\n            font-size: 22px;\n            border-bottom: 5px ridge rgba(128, 128, 128, 0.226);\n        } \n        .inbox-title h2 {\n            font-weight: 400;\n        }\n\n        .todo {\n            position: relative;\n            border: 1px solid;\n            border-radius: 3px;\n            background-color: var(--tiffanyBlue);\n            width: 90%;\n            margin: 1rem auto;\n            display: flex;\n            align-items: center;\n            gap: 10px;\n            cursor: pointer;\n        }\n            .priority-line {\n                position: absolute;\n                left: 0;\n                width: 7px;\n                height: 100%;\n                opacity: 0.8;\n            }\n            .todo-title {\n                flex: auto;\n                padding: 5px 5px 5px 15px;\n                font-size: 18px;\n            }\n            .todo:hover {\n                transform: scale(1.005);\n                box-shadow: 3px 3px 5px 2px rgb(0 0 0 / 20%);\n                transition: all 0.2s ease-out;\n            }\n\n            .todo img {\n                height: 25px;\n            }\n            #hidden-options{\n                border-radius: 5px;\n                border: 1px solid;\n                position: absolute;\n                background-color: var(--white);\n                right: 50px;\n                bottom: 30px;\n                display: flex;\n                flex-direction: column;\n                \n            }\n                #hidden-options div{\n                    width: 80px;\n                    height: 30px;\n                    display: flex;\n                    align-items: center;\n                    border-radius: 5px;\n                    padding: 5px;\n                }\n                    #hidden-options div:hover{\n                        background-color: #eee;\n                    }\n\n        .sleepy-container {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n            .sleepy {\n                width: 300px;\n                height: 300px;\n            }\n            .sleepy-text {\n                margin-top: -50px;\n                padding-bottom: 50px;\n                font-size: 18px;\n            }\n\n        \n      \nfooter {\n    font-family: Dekko;\n    position: absolute;\n    bottom: 0;\n    right: 10px;\n    opacity: 0.8;\n}\n\n.task-form-container {\n    background-color: var(--white);\n    border: 4px solid var(--ashGray);\n    border-radius: 5px;\n    font-family: Quicksand;\n    transition: opacity 0.25s, visibility 0.25s, height 0.75s,\n                width 0.75s;\n} \n    .task-form-container, \n    .task-form-container.closed {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        margin:auto;\n        width: fit-content;\n        height: fit-content;\n    }\n    .task-form {\n        height: fit-content;\n        padding: 2rem;\n        display: grid;\n        grid: auto auto auto / 1fr 1fr;\n    }\n        .task-form-exit {\n            position: absolute;\n            right: 15px;\n            top: 15px;\n            cursor: pointer;\n            padding: 5px;\n            display: grid;\n            place-items: center;\n        }\n        .task-form-exit img{\n            height: 20px;\n            width: 20px;\n            transform: rotate(45deg);\n        }\n        .form-title {\n            margin: 2rem 2rem 0 2rem;\n            font-size: 26px;\n            border-bottom: 1px solid;\n        }\n        .todo-form-title,\n        .todo-description,\n        .todo-due-date,\n        .priority-menu,\n        .submit-task {\n            border: none;\n            border-radius: 5px;\n            margin-bottom: 1rem;\n            padding: 8px;\n            background-color: var(--white);\n            border: 1px solid #94d1be8c;\n            font-size: 16px;\n        }\n        .todo-form-title {\n            grid-area: 1 / 1 / 2 / 3;\n            height: 50px;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .todo-description {\n            grid-area: 2 / 1 / 3 / 3;\n            height: auto;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .due-date-prio-container {\n            grid-area: 3 / 1 / 4 / 2;\n            display: flex;\n            flex-direction: column;\n        }\n        .todo-due-date {\n            height: 50px;\n        }\n\n        .task-form textarea:focus,\n        .task-form input:focus,\n        .priority-menu:focus {\n            outline: none;\n            background-color: #94d1be13;\n        }\n        .submit-task {\n            width: fit-content;\n            height: auto;\n            padding: 1rem;\n            justify-self: end;\n            align-self: end;\n            cursor: pointer;\n            color: var(--black);\n        }\n            .submit-task:hover {\n                background-color: #94d1bec5;\n                color: var(--white);\n            }\n.project-delete-popup {\n    width: fit-content;\n    max-width: 80vw;\n    height: fit-content;\n    padding: 2rem;\n    background-color: var(--white);\n    border: 4px solid var(--ashGray);\n    border-radius: 5px;\n    font-family: Quicksand;\n    font-size: 20px;\n    font-weight: bold;\n    transition: opacity 0.25s, visibility 0.25s, height 0.75s,\n                width 0.75s;\n}   \n    .project-delete-popup,\n    .project-delete-popup.closed {\n            position: absolute;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            margin: 10vh auto;\n    }\n    .project-delete-exit {\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        border: none;\n        width: 25px;\n        height: 25px;\n        font-size: 20px;\n        cursor: pointer;\n        display: grid;\n    }\n        .project-delete-exit img {\n            place-self: center;\n            transform: rotate(45deg);\n            height: 20px;\n        }\n    .project-delete-popup p {\n        padding: 0.5rem;\n        margin-bottom: 2rem;\n        border-bottom: 1px solid;\n    }\n    .project-delete-buttons {\n        width: 200px;\n        margin: auto;\n        display: flex;\n        justify-content: space-between;\n        \n    }\n        .project-delete-buttons button {\n            width: 90px;\n            height: 40px;\n            border-radius: 5px;\n            font-size: 20px;\n            border: 1px solid;\n            cursor: pointer;\n        }\n        .project-delete-buttons button:hover {\n            background-color: #94d1bec5;\n        }\n\n.summary {\n    position: absolute;\n    width: 600px;\n    max-width: 85vw;\n    height: 400px;\n    max-height: 70vh;\n    background-color: var(--white);\n    border: 2px solid var(--ashGray);\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    padding: 3rem;\n    margin: auto;\n    font-size: 20px;\n    display: grid;\n    align-items: center;\n    font-family: Quicksand;\n}\n    .summary-exit {\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        height: 20px;\n        transform: rotate(45deg);\n        cursor: pointer;\n    }\n    \n\n\n\n.closed {\n    pointer-events: none;\n}\n\na {\n    text-decoration: none;\n    color: #333;\n}\na:hover {\n    color: #4B4B4B;\n}\n\n.hidden {\n    opacity: 0;\n    visibility: none;\n    pointer-events: none;\n}\n\n.active {\n    background-color: var(--tiffanyBlue);\n}\n \n.no-pointer-events {\n    pointer-events: none;\n    opacity: 0.6;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Dekko;\n    src: url(./Dekko-Regular.ttf);\n}\n@font-face {\n    font-family: Quicksand;\n    src: url(./Quicksand.ttf);\n}\n\n:root {\n    --gamboge: #EC9A29;\n    --blackOlive: #3B413C;\n    --ashGray: #9DB5B2;\n    --lightCyan: #DAF0EE;\n    --tiffanyBlue: #94D1BE;\n    --buff: #EDB88B;\n    --taupe: #857C8D;\n    --pine: #136F63;\n    --apricot: #FFC9B5;\n    --black: #050505;\n    --lightGray: #CCCCCC;\n    --white: #F5F5F5;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody, \nhtml {\n    min-height: 100vh;\n    min-width: 100vw;\n}\n\nbody {\n    display: flex;\n    align-items: stretch;\n    min-width: 100vw;\n}\n\n.main {\n    width: 100%;\n    min-width: 100vw;\n    display: grid;\n    grid: auto 1fr auto / auto 1fr;\n}\n\nheader {\n    grid-area: 1 / 1 / 2 / 3;\n    font-family: Quicksand;\n    height: 56px;\n    width: 100vw;\n    min-width: 400px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 55px;\n    padding: 0.5rem 2rem 0.5rem 2rem;\n    background-color: var(--white);\n    border-bottom: 1px solid var(--lightGray);\n}\n\n    #menu-button {\n        height: 40px;\n        cursor: pointer;\n        padding: 8px;\n        background-color: var(--white);\n        border-radius: 3px;\n        position: absolute;\n        top: 8px;\n        left: 32px;\n    }\n        #menu-button:hover {\n            background-color: var(--lightCyan);\n        }\n\n    .add-task-button {\n        padding: 5px 10px;\n        border-radius: 5px;\n        display: grid;\n        grid-template-columns: auto auto;\n        gap: 10px;\n        cursor: pointer;\n        background-color: #94d1be52;\n        border: 1px solid var(--ashGray);\n    }\n    #add-task-plus {\n        height: 15px;\n        place-self: center;\n        \n    }\n        .add-task-button:hover {\n            opacity: 0.8;\n        }\n\n.page {\n    grid-area: 2/2/3/3;\n    background-color: var(--lightCyan);\n    display: flex;\n    flex-wrap: wrap;\n}\n    .sidebar {\n        background-color: #94d1be52;    \n        border-right: 1px solid var(--lightGray);\n        width: 100%;\n        max-width: 800px;\n        padding: 2rem;\n        font-family: Quicksand;\n        font-weight: 400;\n        display: grid;\n        grid: auto 1fr / 1fr;\n        opacity: 1;\n        visibility: visible;\n        transition: all 1s ease-in-out;\n    }\n        .sidebar.closed, \n        .task-form-container.closed, \n        .project-delete-popup.closed {\n            opacity: 0;\n            visibility: hidden;\n            width: 0;\n            padding: 0;\n            height: 0;\n            border: 0;\n            margin: 0;\n        }\n        .full-screen {\n            width: 100%;\n        }\n        .sidebar h2 {\n            margin-bottom: 1.5rem;\n            padding-bottom: 5px;\n            border-bottom: 1px solid;\n        }\n        .sidebar p {\n            padding: 0.5rem;\n            padding-left: 1rem;\n            cursor: pointer;\n            font-size: 20px;\n            margin-bottom: 0.5rem;\n        }\n            .sidebar p:hover {\n                background-color: var(--tiffanyBlue);\n            }\n            \n        .sidebar .home, \n        .sidebar .projects {\n            padding-bottom: 3rem;\n        }\n            .new-project {\n                display: grid;\n                grid-template-columns: auto 1fr;\n                gap: 10px;\n                margin-bottom: 0.5rem;\n            }\n                .new-project p {\n                    margin-bottom: 0;\n                }\n                .sidebar .new-project:hover {\n                    background-color: var(--tiffanyBlue);\n                }\n                #plus {\n                    height: 15px;\n                    place-self: start;\n                    align-self: center;\n                }\n            .project-form {\n                display: grid;\n                grid: 1fr 1fr / 1fr 1fr;\n                align-items: center;\n                gap: 0 15px;\n                padding-left: 1rem;\n                background-color: var(--lightCyan);\n                border: 1px solid var(--apricot);\n                border-radius: 5px;\n                opacity: 1;\n                height: 100px;\n                visibility: visible;\n                transition: height 0.75s, opacity 0.75s, visibility 0.75s;\n            }\n                .project-form.hidden{\n                    opacity: 0;\n                    visibility: hidden;\n                    height: 0;\n                }\n                .project-form input {\n                    height: 25px;\n                    border: 1px solid var(--apricot);\n                    border-radius: 5px;\n                    margin-right: 10px;\n                }\n                .project-form input:focus {\n                    outline: none;\n                    border: 3px solid var(--apricot);\n                }\n                .form-buttons {\n                    grid-area: 2 / 1 / 3 / 3;\n                    display: flex;\n                    justify-content: space-evenly;\n                }\n                .project-form button {\n                    width: 125px;\n                    padding: 7px;\n                    border-radius: 5px;\n                    font-size: 14px;\n                    border: 1px solid red;\n                    color:  var(--blackOlive);\n                    font-weight: 700;\n                    background-color: var(--apricot);\n                    cursor: pointer;\n                }\n                .project-form button:nth-child(1){\n                    border: 1px solid green;\n                    background-color: var(--tiffanyBlue);\n                }\n                \n            .projects .inbox {\n                margin-left: 2rem;\n                margin-bottom: 0.5rem;\n                height: 40px;\n                display: grid;\n                place-self: center;\n            }\n            .project:hover {\n                background-color: var(--tiffanyBlue);\n            }\n            .project p {\n                flex: auto;\n                margin-bottom: 0;\n            }\n            \n    .content {\n        background-color: var(--lightCyan);\n        flex: auto;\n        font-family: Quicksand;\n        position: relative;\n        padding-bottom: 2rem;\n        min-width: 400px;\n        max-width: 100vw;\n        height: 100vh;\n    }\n\n        .inbox-title {\n            width: 90%;\n            height: 67px;\n            margin: 0px auto;\n            display: flex;\n            align-items: end;\n            padding-left: 3rem;\n            font-size: 22px;\n            border-bottom: 5px ridge rgba(128, 128, 128, 0.226);\n        } \n        .inbox-title h2 {\n            font-weight: 400;\n        }\n\n        .todo {\n            position: relative;\n            border: 1px solid;\n            border-radius: 3px;\n            background-color: var(--tiffanyBlue);\n            width: 90%;\n            margin: 1rem auto;\n            display: flex;\n            align-items: center;\n            gap: 10px;\n            cursor: pointer;\n        }\n            .priority-line {\n                position: absolute;\n                left: 0;\n                width: 7px;\n                height: 100%;\n                opacity: 0.8;\n            }\n            .todo-title {\n                flex: auto;\n                padding: 5px 5px 5px 15px;\n                font-size: 18px;\n            }\n            .todo:hover {\n                transform: scale(1.005);\n                box-shadow: 3px 3px 5px 2px rgb(0 0 0 / 20%);\n                transition: all 0.2s ease-out;\n            }\n\n            .todo img {\n                height: 25px;\n            }\n            #hidden-options{\n                border-radius: 5px;\n                border: 1px solid;\n                position: absolute;\n                background-color: var(--white);\n                right: 50px;\n                bottom: 30px;\n                display: flex;\n                flex-direction: column;\n                \n            }\n                #hidden-options div{\n                    width: 80px;\n                    height: 30px;\n                    display: flex;\n                    align-items: center;\n                    border-radius: 5px;\n                    padding: 5px;\n                }\n                    #hidden-options div:hover{\n                        background-color: #eee;\n                    }\n\n        .sleepy-container {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n            .sleepy {\n                width: 300px;\n                height: 300px;\n            }\n            .sleepy-text {\n                margin-top: -50px;\n                padding-bottom: 50px;\n                font-size: 18px;\n            }\n\n        \n      \nfooter {\n    font-family: Dekko;\n    position: absolute;\n    bottom: 0;\n    right: 10px;\n    opacity: 0.8;\n}\n\n.task-form-container {\n    background-color: var(--white);\n    border: 4px solid var(--ashGray);\n    border-radius: 5px;\n    font-family: Quicksand;\n    transition: opacity 0.25s, visibility 0.25s, height 0.75s,\n                width 0.75s;\n} \n    .task-form-container, \n    .task-form-container.closed {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        margin:auto;\n        width: fit-content;\n        height: fit-content;\n    }\n    .task-form {\n        height: fit-content;\n        padding: 2rem;\n        display: grid;\n        grid: auto auto auto / 1fr 1fr;\n    }\n        .task-form-exit {\n            position: absolute;\n            right: 15px;\n            top: 15px;\n            cursor: pointer;\n            padding: 5px;\n            display: grid;\n            place-items: center;\n        }\n        .task-form-exit img{\n            height: 20px;\n            width: 20px;\n            transform: rotate(45deg);\n        }\n        .form-title {\n            margin: 2rem 2rem 0 2rem;\n            font-size: 26px;\n            border-bottom: 1px solid;\n        }\n        .todo-form-title,\n        .todo-description,\n        .todo-due-date,\n        .priority-menu,\n        .submit-task {\n            border: none;\n            border-radius: 5px;\n            margin-bottom: 1rem;\n            padding: 8px;\n            background-color: var(--white);\n            border: 1px solid #94d1be8c;\n            font-size: 16px;\n        }\n        .todo-form-title {\n            grid-area: 1 / 1 / 2 / 3;\n            height: 50px;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .todo-description {\n            grid-area: 2 / 1 / 3 / 3;\n            height: auto;\n            width: 70vw;\n            max-width: 700px;\n        }\n        .due-date-prio-container {\n            grid-area: 3 / 1 / 4 / 2;\n            display: flex;\n            flex-direction: column;\n        }\n        .todo-due-date {\n            height: 50px;\n        }\n\n        .task-form textarea:focus,\n        .task-form input:focus,\n        .priority-menu:focus {\n            outline: none;\n            background-color: #94d1be13;\n        }\n        .submit-task {\n            width: fit-content;\n            height: auto;\n            padding: 1rem;\n            justify-self: end;\n            align-self: end;\n            cursor: pointer;\n            color: var(--black);\n        }\n            .submit-task:hover {\n                background-color: #94d1bec5;\n                color: var(--white);\n            }\n.project-delete-popup {\n    width: fit-content;\n    max-width: 80vw;\n    height: fit-content;\n    padding: 2rem;\n    background-color: var(--white);\n    border: 4px solid var(--ashGray);\n    border-radius: 5px;\n    font-family: Quicksand;\n    font-size: 20px;\n    font-weight: bold;\n    transition: opacity 0.25s, visibility 0.25s, height 0.75s,\n                width 0.75s;\n}   \n    .project-delete-popup,\n    .project-delete-popup.closed {\n            position: absolute;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            margin: 10vh auto;\n    }\n    .project-delete-exit {\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        border: none;\n        width: 25px;\n        height: 25px;\n        font-size: 20px;\n        cursor: pointer;\n        display: grid;\n    }\n        .project-delete-exit img {\n            place-self: center;\n            transform: rotate(45deg);\n            height: 20px;\n        }\n    .project-delete-popup p {\n        padding: 0.5rem;\n        margin-bottom: 2rem;\n        border-bottom: 1px solid;\n    }\n    .project-delete-buttons {\n        width: 200px;\n        margin: auto;\n        display: flex;\n        justify-content: space-between;\n        \n    }\n        .project-delete-buttons button {\n            width: 90px;\n            height: 40px;\n            border-radius: 5px;\n            font-size: 20px;\n            border: 1px solid;\n            cursor: pointer;\n        }\n        .project-delete-buttons button:hover {\n            background-color: #94d1bec5;\n        }\n\n.summary {\n    position: absolute;\n    width: 600px;\n    max-width: 85vw;\n    height: 400px;\n    max-height: 70vh;\n    background-color: var(--white);\n    border: 2px solid var(--ashGray);\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    padding: 3rem;\n    margin: auto;\n    font-size: 20px;\n    display: grid;\n    align-items: center;\n    font-family: Quicksand;\n}\n    .summary-exit {\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        height: 20px;\n        transform: rotate(45deg);\n        cursor: pointer;\n    }\n    \n\n\n\n.closed {\n    pointer-events: none;\n}\n\na {\n    text-decoration: none;\n    color: #333;\n}\na:hover {\n    color: #4B4B4B;\n}\n\n.hidden {\n    opacity: 0;\n    visibility: none;\n    pointer-events: none;\n}\n\n.active {\n    background-color: var(--tiffanyBlue);\n}\n \n.no-pointer-events {\n    pointer-events: none;\n    opacity: 0.6;\n}"],"sourceRoot":""}]);
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
                document.querySelector('.inbox-h2').textContent = target.textContent
                console.log(`you are now in the ${target.textContent} inbox`)
                displayController.displayProjectTodos(target.textContent);
                break;
        }
        displayController.displaySleepyCat();
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

    const noTodos = () => {
        return document.querySelectorAll('.todo').length == 0;
    }

    const sleepyCat = () => {
        const div = createClassedElement('div', 'sleepy-container');
        const p = createClassedElement('p', 'sleepy-text');
            p.textContent = 'You have no current tasks';
        const img = new Image();
            img.src = _sleepy_png__WEBPACK_IMPORTED_MODULE_3__;
            img.classList.add('sleepy');
        div.append(img, p);
        return div
    }

    const displaySleepyCat = () => {
        let content = document.querySelector('.content');
        if (noTodos()) {
            if (document.querySelector('.sleepy-container') == null) {
                content.append(sleepyCat())
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

    const hideOptionsMenus = () => {
        document.querySelectorAll('#hidden-options').forEach(node => {
            node.classList.add('hidden')
        })
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

                // event listener to create summary window on click
            titleP.addEventListener('click', (e) => {
                let todolist = JSON.parse(localStorage.myTodoList);
                todolist.filter(todo => {
                    if (todo.id == e.target.parentElement.lastChild.textContent) {
                        console.log(todo)
                        const summaryWindow = createClassedElement('div', 'summary');
                            const exitButton = new Image();
                                exitButton.src = _plus_png__WEBPACK_IMPORTED_MODULE_4__;
                                exitButton.classList.add('summary-exit');
                                exitButton.addEventListener('click', () => {
                                    document.querySelector('.summary').remove();
                                    displayController.togglePageClickEvents();
                                })
                            const titleP = createClassedElement('p');
                                titleP.innerHTML = `<strong>Title:</strong> ${todo.title}`;
                            const descriptionP = createClassedElement('p');
                                descriptionP.innerHTML = `<strong>Description:</strong> ${todo.description}`;
                            const projectP = createClassedElement('p');
                                let project;
                                if (todo.project != undefined) {
                                    project = todo.project;
                                } else {
                                    project = 'none';
                                }
                                projectP.innerHTML = `<strong>Project:</strong> ${project}`;
                            const dueDate = createClassedElement('p');
                                dueDate.innerHTML = `<strong>Due Date:</strong> ${todo.dueDate}`;
                            const priority = createClassedElement('p');
                                priority.innerHTML = `<strong>Priority:</strong> ${todo.priority}`;
                        summaryWindow.append(exitButton, titleP, descriptionP, projectP, dueDate, priority)
                        document.querySelector('.main').append(summaryWindow)
                        displayController.togglePageClickEvents();
                    }
                })
            })

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
                edit.addEventListener('click', () => {
                    alert('coming soon')
                })
                
            const cancel = createClassedElement('div', 'options-cancel');
                cancel.textContent = 'Cancel'
                cancel.addEventListener('click', () => {
                        hideOptionsMenus();
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
                displaySleepyCat();
            })

        const options = new Image();
            options.src = _dot_menu_png__WEBPACK_IMPORTED_MODULE_6__;
            options.id = 'options';
            options.addEventListener('click', (e) => {
                hideOptionsMenus();
                setTimeout(() => {
                    hiddenOptions.classList.toggle('hidden');
                }, 1);
                
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
        }
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
        }
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
        }
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
            const p = createClassedElement('p', 'inbox');
                p.classList.add('project');
                p.textContent = projectName;
                p.addEventListener('click', (e) => {
                    displayController.selectInbox(e.target)
                })
            document.querySelector('.projects').appendChild(p);
            _index_js__WEBPACK_IMPORTED_MODULE_2__.storage.storeProject(projectName);
            toggleNewProjectForm();
            clearNewProjectForm();
        };
    };

    const removeProject = (project) => {
        _index_js__WEBPACK_IMPORTED_MODULE_2__.storage.removeProject(project);
    }

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

        displayController.clearTodoForm();
    }

    const togglePageClickEvents = () => {
        document.querySelector('.page').classList.toggle('no-pointer-events');
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
        addTodo,
        hideOptionsMenus,
        togglePageClickEvents
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


let hideMenu = window.matchMedia("(max-width: 350px)");
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
            const p = createClassedElement('p', 'inbox');
                p.classList.add('project');
                p.textContent = project;
                p.addEventListener('click', (e) => {
                    displayController.selectInbox(e.target)
                })
            document.querySelector('.projects').appendChild(p);
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
    displayController.displaySleepyCat();
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
    displayController.togglePageClickEvents();
})

    // close new task window and clear form with exit button
document.querySelector('.task-form-exit').addEventListener('click', () => {
    displayController.clearTodoForm();
    toggleNewTaskWindow();
    displayController.togglePageClickEvents();
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
        displayController.togglePageClickEvents();
    } else {
        alert('Please fill in all required fields');
    }
})

//-------------------------------------------------------------------------


document.querySelector('.page').addEventListener('click', () => {
    document.querySelectorAll('#hidden-options').forEach(node => {
        if (node.classList.value != 'hidden') {
            displayController.hideOptionsMenus();
        }
    })
})

document.querySelector('.sidebar').classList.add('closed')







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



// storage.storeProject('stuff');
// storage.deleteProject('stuff'); 



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0QywyR0FBa0M7QUFDOUUsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QseUJBQXlCLDJEQUEyRCxHQUFHLGNBQWMsNkJBQTZCLDJEQUEyRCxHQUFHLFdBQVcseUJBQXlCLDRCQUE0Qix5QkFBeUIsMkJBQTJCLDZCQUE2QixzQkFBc0IsdUJBQXVCLHNCQUFzQix5QkFBeUIsdUJBQXVCLDJCQUEyQix1QkFBdUIsR0FBRyxPQUFPLGdCQUFnQiw2QkFBNkIsR0FBRyxrQkFBa0Isd0JBQXdCLHVCQUF1QixHQUFHLFVBQVUsb0JBQW9CLDJCQUEyQix1QkFBdUIsR0FBRyxXQUFXLGtCQUFrQix1QkFBdUIsb0JBQW9CLHFDQUFxQyxHQUFHLFlBQVksK0JBQStCLDZCQUE2QixtQkFBbUIsbUJBQW1CLHVCQUF1QixvQkFBb0IsZ0NBQWdDLDBCQUEwQixnQkFBZ0IsdUNBQXVDLHFDQUFxQyxnREFBZ0QsR0FBRyxzQkFBc0IsdUJBQXVCLDBCQUEwQix1QkFBdUIseUNBQXlDLDZCQUE2Qiw2QkFBNkIsbUJBQW1CLHFCQUFxQixPQUFPLDhCQUE4QixpREFBaUQsV0FBVywwQkFBMEIsNEJBQTRCLDZCQUE2Qix3QkFBd0IsMkNBQTJDLG9CQUFvQiwwQkFBMEIsc0NBQXNDLDJDQUEyQyxPQUFPLHNCQUFzQix1QkFBdUIsNkJBQTZCLGlCQUFpQixrQ0FBa0MsMkJBQTJCLFdBQVcsV0FBVyx5QkFBeUIseUNBQXlDLG9CQUFvQixzQkFBc0IsR0FBRyxnQkFBZ0IsMENBQTBDLG1EQUFtRCxzQkFBc0IsMkJBQTJCLHdCQUF3QixpQ0FBaUMsMkJBQTJCLHdCQUF3QiwrQkFBK0IscUJBQXFCLDhCQUE4Qix5Q0FBeUMsT0FBTywwR0FBMEcseUJBQXlCLGlDQUFpQyx1QkFBdUIseUJBQXlCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLFdBQVcsd0JBQXdCLDBCQUEwQixXQUFXLHVCQUF1QixvQ0FBb0Msa0NBQWtDLHVDQUF1QyxXQUFXLHNCQUFzQiw4QkFBOEIsaUNBQWlDLDhCQUE4Qiw4QkFBOEIsb0NBQW9DLFdBQVcsZ0NBQWdDLHVEQUF1RCxlQUFlLHNFQUFzRSxtQ0FBbUMsV0FBVyw0QkFBNEIsZ0NBQWdDLGtEQUFrRCw0QkFBNEIsd0NBQXdDLGVBQWUsa0NBQWtDLHVDQUF1QyxtQkFBbUIsK0NBQStDLDJEQUEyRCxtQkFBbUIseUJBQXlCLG1DQUFtQyx3Q0FBd0MseUNBQXlDLG1CQUFtQiw2QkFBNkIsZ0NBQWdDLDBDQUEwQyxzQ0FBc0MsOEJBQThCLHFDQUFxQyxxREFBcUQsbURBQW1ELHFDQUFxQyw2QkFBNkIsZ0NBQWdDLHNDQUFzQyw0RUFBNEUsZUFBZSx1Q0FBdUMsaUNBQWlDLHlDQUF5QyxnQ0FBZ0MsbUJBQW1CLHVDQUF1QyxtQ0FBbUMsdURBQXVELHlDQUF5Qyx5Q0FBeUMsbUJBQW1CLDZDQUE2QyxvQ0FBb0MsdURBQXVELG1CQUFtQixpQ0FBaUMsK0NBQStDLG9DQUFvQyxvREFBb0QsbUJBQW1CLHdDQUF3QyxtQ0FBbUMsbUNBQW1DLHlDQUF5QyxzQ0FBc0MsNENBQTRDLGdEQUFnRCx1Q0FBdUMsdURBQXVELHNDQUFzQyxtQkFBbUIsb0RBQW9ELDhDQUE4QywyREFBMkQsbUJBQW1CLGtEQUFrRCxvQ0FBb0Msd0NBQXdDLCtCQUErQixnQ0FBZ0MscUNBQXFDLGVBQWUsOEJBQThCLHVEQUF1RCxlQUFlLDBCQUEwQiw2QkFBNkIsbUNBQW1DLGVBQWUsOEJBQThCLDZDQUE2QyxxQkFBcUIsaUNBQWlDLDZCQUE2QiwrQkFBK0IsMkJBQTJCLDJCQUEyQix3QkFBd0IsT0FBTywwQkFBMEIseUJBQXlCLDJCQUEyQiwrQkFBK0IsNEJBQTRCLCtCQUErQixpQ0FBaUMsOEJBQThCLGtFQUFrRSxZQUFZLDJCQUEyQiwrQkFBK0IsV0FBVyxtQkFBbUIsaUNBQWlDLGdDQUFnQyxpQ0FBaUMsbURBQW1ELHlCQUF5QixnQ0FBZ0MsNEJBQTRCLGtDQUFrQyx3QkFBd0IsOEJBQThCLFdBQVcsOEJBQThCLHFDQUFxQywwQkFBMEIsNkJBQTZCLCtCQUErQiwrQkFBK0IsZUFBZSwyQkFBMkIsNkJBQTZCLDRDQUE0QyxrQ0FBa0MsZUFBZSwyQkFBMkIsMENBQTBDLCtEQUErRCxnREFBZ0QsZUFBZSwyQkFBMkIsK0JBQStCLGVBQWUsOEJBQThCLHFDQUFxQyxvQ0FBb0MscUNBQXFDLGlEQUFpRCw4QkFBOEIsK0JBQStCLGdDQUFnQyx5Q0FBeUMsaUNBQWlDLHNDQUFzQyxrQ0FBa0MsbUNBQW1DLG9DQUFvQywwQ0FBMEMseUNBQXlDLG1DQUFtQyxtQkFBbUIsZ0RBQWdELGlEQUFpRCx1QkFBdUIsK0JBQStCLDRCQUE0QixxQ0FBcUMsc0NBQXNDLGtDQUFrQyxXQUFXLHVCQUF1QiwrQkFBK0IsZ0NBQWdDLGVBQWUsNEJBQTRCLG9DQUFvQyx1Q0FBdUMsa0NBQWtDLGVBQWUsOEJBQThCLHlCQUF5Qix5QkFBeUIsZ0JBQWdCLGtCQUFrQixtQkFBbUIsR0FBRywwQkFBMEIscUNBQXFDLHVDQUF1Qyx5QkFBeUIsNkJBQTZCLDhGQUE4RixJQUFJLCtEQUErRCw2QkFBNkIsa0JBQWtCLG1CQUFtQixpQkFBaUIsb0JBQW9CLHNCQUFzQiw2QkFBNkIsOEJBQThCLE9BQU8sa0JBQWtCLDhCQUE4Qix3QkFBd0Isd0JBQXdCLHlDQUF5QyxPQUFPLDJCQUEyQixpQ0FBaUMsMEJBQTBCLHdCQUF3Qiw4QkFBOEIsMkJBQTJCLDRCQUE0QixrQ0FBa0MsV0FBVyw4QkFBOEIsMkJBQTJCLDBCQUEwQix1Q0FBdUMsV0FBVyx1QkFBdUIsdUNBQXVDLDhCQUE4Qix1Q0FBdUMsV0FBVyxpSUFBaUksMkJBQTJCLGlDQUFpQyxrQ0FBa0MsMkJBQTJCLDZDQUE2QywwQ0FBMEMsOEJBQThCLFdBQVcsNEJBQTRCLHVDQUF1QywyQkFBMkIsMEJBQTBCLCtCQUErQixXQUFXLDZCQUE2Qix1Q0FBdUMsMkJBQTJCLDBCQUEwQiwrQkFBK0IsV0FBVyxvQ0FBb0MsdUNBQXVDLDRCQUE0QixxQ0FBcUMsV0FBVywwQkFBMEIsMkJBQTJCLFdBQVcsdUdBQXVHLDRCQUE0QiwwQ0FBMEMsV0FBVyx3QkFBd0IsaUNBQWlDLDJCQUEyQiw0QkFBNEIsZ0NBQWdDLDhCQUE4Qiw4QkFBOEIsa0NBQWtDLFdBQVcsa0NBQWtDLDhDQUE4QyxzQ0FBc0MsZUFBZSx5QkFBeUIseUJBQXlCLHNCQUFzQiwwQkFBMEIsb0JBQW9CLHFDQUFxQyx1Q0FBdUMseUJBQXlCLDZCQUE2QixzQkFBc0Isd0JBQXdCLDhGQUE4RixNQUFNLGdFQUFnRSxpQ0FBaUMsc0JBQXNCLHVCQUF1QixxQkFBcUIsd0JBQXdCLGdDQUFnQyxPQUFPLDRCQUE0Qiw2QkFBNkIsbUJBQW1CLHFCQUFxQix1QkFBdUIsc0JBQXNCLHVCQUF1QiwwQkFBMEIsMEJBQTBCLHdCQUF3QixPQUFPLG9DQUFvQyxpQ0FBaUMsdUNBQXVDLDJCQUEyQixXQUFXLCtCQUErQiwwQkFBMEIsOEJBQThCLG1DQUFtQyxPQUFPLCtCQUErQix1QkFBdUIsdUJBQXVCLHdCQUF3Qix5Q0FBeUMsaUJBQWlCLDBDQUEwQywwQkFBMEIsMkJBQTJCLGlDQUFpQyw4QkFBOEIsZ0NBQWdDLDhCQUE4QixXQUFXLGdEQUFnRCwwQ0FBMEMsV0FBVyxjQUFjLHlCQUF5QixtQkFBbUIsc0JBQXNCLG9CQUFvQix1QkFBdUIscUNBQXFDLHVDQUF1QyxhQUFhLGNBQWMsZUFBZSxnQkFBZ0Isb0JBQW9CLG1CQUFtQixzQkFBc0Isb0JBQW9CLDBCQUEwQiw2QkFBNkIsR0FBRyxxQkFBcUIsNkJBQTZCLG1CQUFtQixxQkFBcUIsdUJBQXVCLG1DQUFtQywwQkFBMEIsT0FBTyx1QkFBdUIsMkJBQTJCLEdBQUcsT0FBTyw0QkFBNEIsa0JBQWtCLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxhQUFhLGlCQUFpQix1QkFBdUIsMkJBQTJCLEdBQUcsYUFBYSwyQ0FBMkMsR0FBRyx5QkFBeUIsMkJBQTJCLG1CQUFtQixHQUFHLE9BQU8saUZBQWlGLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxPQUFPLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLFlBQVksTUFBTSxLQUFLLFdBQVcsYUFBYSxZQUFZLGFBQWEsTUFBTSxNQUFNLGFBQWEsT0FBTyxNQUFNLGFBQWEsT0FBTyxNQUFNLFdBQVcsYUFBYSxjQUFjLE9BQU8sS0FBSyxXQUFXLGFBQWEsY0FBYyxZQUFZLGFBQWEsY0FBYyxjQUFjLGNBQWMsWUFBWSxXQUFXLGFBQWEsY0FBYyxNQUFNLE1BQU0sV0FBVyxhQUFhLFlBQVksTUFBTSxNQUFNLFdBQVcsYUFBYSxjQUFjLGNBQWMsT0FBTyxNQUFNLFdBQVcsYUFBYSxPQUFPLE1BQU0sYUFBYSxZQUFZLGFBQWEsT0FBTyxNQUFNLFdBQVcsV0FBVyxhQUFhLFlBQVksYUFBYSxjQUFjLGNBQWMsY0FBYyxZQUFZLE9BQU8sTUFBTSxhQUFhLGNBQWMsUUFBUSxLQUFLLGFBQWEsY0FBYyxZQUFZLFdBQVcsYUFBYSxNQUFNLEtBQUssYUFBYSxNQUFNLEtBQUssV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLGFBQWEsWUFBWSxNQUFNLEtBQUssYUFBYSxjQUFjLGNBQWMsT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLGFBQWEsY0FBYyxjQUFjLGNBQWMsWUFBWSxXQUFXLFdBQVcsY0FBYyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsYUFBYSxjQUFjLFlBQVksT0FBTyxNQUFNLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssYUFBYSxjQUFjLFlBQVksU0FBUyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0s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QTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDBEQUF5QjtBQUNqQyxtQkFBbUIsMERBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLENBQUM7O0FBRUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaHlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEVBQUU7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlpQzs7Ozs7O0FBTWxDOzs7O0FBSUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS1zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vRGVra28tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL1F1aWNrc2FuZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBEZWtrbztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZ2FtYm9nZTogI0VDOUEyOTtcXG4gICAgLS1ibGFja09saXZlOiAjM0I0MTNDO1xcbiAgICAtLWFzaEdyYXk6ICM5REI1QjI7XFxuICAgIC0tbGlnaHRDeWFuOiAjREFGMEVFO1xcbiAgICAtLXRpZmZhbnlCbHVlOiAjOTREMUJFO1xcbiAgICAtLWJ1ZmY6ICNFREI4OEI7XFxuICAgIC0tdGF1cGU6ICM4NTdDOEQ7XFxuICAgIC0tcGluZTogIzEzNkY2MztcXG4gICAgLS1hcHJpY290OiAjRkZDOUI1O1xcbiAgICAtLWJsYWNrOiAjMDUwNTA1O1xcbiAgICAtLWxpZ2h0R3JheTogI0NDQ0NDQztcXG4gICAgLS13aGl0ZTogI0Y1RjVGNTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSwgXFxuaHRtbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IGF1dG8gMWZyIGF1dG8gLyBhdXRvIDFmcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICBoZWlnaHQ6IDU2cHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1NXB4O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbSAwLjVyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmF5KTtcXG59XFxuXFxuICAgICNtZW51LWJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDhweDtcXG4gICAgICAgIGxlZnQ6IDMycHg7XFxuICAgIH1cXG4gICAgICAgICNtZW51LWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDeWFuKTtcXG4gICAgICAgIH1cXG5cXG4gICAgLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGQxYmU1MjtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFzaEdyYXkpO1xcbiAgICB9XFxuICAgICNhZGQtdGFzay1wbHVzIHtcXG4gICAgICAgIGhlaWdodDogMTVweDtcXG4gICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgICAgICAuYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICB9XFxuXFxuLnBhZ2Uge1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q3lhbik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGQxYmU1MjsgICAgXFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQ6IGF1dG8gMWZyIC8gMWZyO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG4gICAgICAgIC5zaWRlYmFyLmNsb3NlZCwgXFxuICAgICAgICAudGFzay1mb3JtLWNvbnRhaW5lci5jbG9zZWQsIFxcbiAgICAgICAgLnByb2plY3QtZGVsZXRlLXBvcHVwLmNsb3NlZCB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5mdWxsLXNjcmVlbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgICAgICAuc2lkZWJhciBoMiB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnNpZGViYXIgcCB7XFxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuc2lkZWJhciBwOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlmZmFueUJsdWUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgIC5zaWRlYmFyIC5ob21lLCBcXG4gICAgICAgIC5zaWRlYmFyIC5wcm9qZWN0cyB7XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLm5ldy1wcm9qZWN0IHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAubmV3LXByb2plY3QgcCB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5zaWRlYmFyIC5uZXctcHJvamVjdDpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI3BsdXMge1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Utc2VsZjogc3RhcnQ7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAucHJvamVjdC1mb3JtIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAgICAgZ3JpZDogMWZyIDFmciAvIDFmciAxZnI7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGdhcDogMCAxNXB4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q3lhbik7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcmljb3QpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjc1cywgb3BhY2l0eSAwLjc1cywgdmlzaWJpbGl0eSAwLjc1cztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0uaGlkZGVue1xcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAucHJvamVjdC1mb3JtIGlucHV0IHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcmljb3QpO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWFwcmljb3QpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5mb3JtLWJ1dHRvbnMge1xcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0gYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjVweDtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgdmFyKC0tYmxhY2tPbGl2ZSk7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXByaWNvdCk7XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnByb2plY3QtZm9ybSBidXR0b246bnRoLWNoaWxkKDEpe1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgLnByb2plY3RzIC5pbmJveCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAucHJvamVjdDpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpZmZhbnlCbHVlKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnByb2plY3QgcCB7XFxuICAgICAgICAgICAgICAgIGZsZXg6IGF1dG87XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAuY29udGVudCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEN5YW4pO1xcbiAgICAgICAgZmxleDogYXV0bztcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgfVxcblxcbiAgICAgICAgLmluYm94LXRpdGxlIHtcXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgICAgIGhlaWdodDogNjdweDtcXG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCByaWRnZSByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjI2KTtcXG4gICAgICAgIH0gXFxuICAgICAgICAuaW5ib3gtdGl0bGUgaDIge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kbyB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAucHJpb3JpdHktbGluZSB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDdweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC50b2RvLXRpdGxlIHtcXG4gICAgICAgICAgICAgICAgZmxleDogYXV0bztcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweCA1cHggMTVweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAudG9kbzpob3ZlciB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDUpO1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAycHggcmdiKDAgMCAwIC8gMjAlKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC50b2RvIGltZyB7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgI2hpZGRlbi1vcHRpb25ze1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMzBweDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjaGlkZGVuLW9wdGlvbnMgZGl2e1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgI2hpZGRlbi1vcHRpb25zIGRpdjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLnNsZWVweS1jb250YWluZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5zbGVlcHkge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5zbGVlcHktdGV4dCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIFxcbiAgICAgIFxcbmZvb3RlciB7XFxuICAgIGZvbnQtZmFtaWx5OiBEZWtrbztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi50YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hc2hHcmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzLCB2aXNpYmlsaXR5IDAuMjVzLCBoZWlnaHQgMC43NXMsXFxuICAgICAgICAgICAgICAgIHdpZHRoIDAuNzVzO1xcbn0gXFxuICAgIC50YXNrLWZvcm0tY29udGFpbmVyLCBcXG4gICAgLnRhc2stZm9ybS1jb250YWluZXIuY2xvc2VkIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIG1hcmdpbjphdXRvO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgfVxcbiAgICAudGFzay1mb3JtIHtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQ6IGF1dG8gYXV0byBhdXRvIC8gMWZyIDFmcjtcXG4gICAgfVxcbiAgICAgICAgLnRhc2stZm9ybS1leGl0IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XFxuICAgICAgICAgICAgdG9wOiAxNXB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRhc2stZm9ybS1leGl0IGltZ3tcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmZvcm0tdGl0bGUge1xcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAycmVtIDAgMnJlbTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRvZG8tZm9ybS10aXRsZSxcXG4gICAgICAgIC50b2RvLWRlc2NyaXB0aW9uLFxcbiAgICAgICAgLnRvZG8tZHVlLWRhdGUsXFxuICAgICAgICAucHJpb3JpdHktbWVudSxcXG4gICAgICAgIC5zdWJtaXQtdGFzayB7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk0ZDFiZThjO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC50b2RvLWZvcm0tdGl0bGUge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDcwdnc7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZHVlLWRhdGUtcHJpby1jb250YWluZXIge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB9XFxuICAgICAgICAudG9kby1kdWUtZGF0ZSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhc2stZm9ybSB0ZXh0YXJlYTpmb2N1cyxcXG4gICAgICAgIC50YXNrLWZvcm0gaW5wdXQ6Zm9jdXMsXFxuICAgICAgICAucHJpb3JpdHktbWVudTpmb2N1cyB7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkMWJlMTM7XFxuICAgICAgICB9XFxuICAgICAgICAuc3VibWl0LXRhc2sge1xcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLnN1Ym1pdC10YXNrOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZDFiZWM1O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIH1cXG4ucHJvamVjdC1kZWxldGUtcG9wdXAge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hc2hHcmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzLCB2aXNpYmlsaXR5IDAuMjVzLCBoZWlnaHQgMC43NXMsXFxuICAgICAgICAgICAgICAgIHdpZHRoIDAuNzVzO1xcbn0gICBcXG4gICAgLnByb2plY3QtZGVsZXRlLXBvcHVwLFxcbiAgICAucHJvamVjdC1kZWxldGUtcG9wdXAuY2xvc2VkIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgICAgIG1hcmdpbjogMTB2aCBhdXRvO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0LWRlbGV0ZS1leGl0IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNXB4O1xcbiAgICAgICAgcmlnaHQ6IDVweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgfVxcbiAgICAgICAgLnByb2plY3QtZGVsZXRlLWV4aXQgaW1nIHtcXG4gICAgICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIH1cXG4gICAgLnByb2plY3QtZGVsZXRlLXBvcHVwIHAge1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcXG4gICAgfVxcbiAgICAucHJvamVjdC1kZWxldGUtYnV0dG9ucyB7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgICAgIC5wcm9qZWN0LWRlbGV0ZS1idXR0b25zIGJ1dHRvbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnByb2plY3QtZGVsZXRlLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkMWJlYzU7XFxuICAgICAgICB9XFxuXFxuLnN1bW1hcnkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgbWF4LXdpZHRoOiA4NXZ3O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFzaEdyYXkpO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbn1cXG4gICAgLnN1bW1hcnktZXhpdCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDVweDtcXG4gICAgICAgIHJpZ2h0OiA1cHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgXFxuXFxuXFxuXFxuLmNsb3NlZCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuYTpob3ZlciB7XFxuICAgIGNvbG9yOiAjNEI0QjRCO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxufVxcbiBcXG4ubm8tcG9pbnRlci1ldmVudHMge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQiw0Q0FBNkI7QUFDakM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qiw0Q0FBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixh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QUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBEZWtrbztcXG4gICAgc3JjOiB1cmwoLi9EZWtrby1SZWd1bGFyLnR0Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICBzcmM6IHVybCguL1F1aWNrc2FuZC50dGYpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZ2FtYm9nZTogI0VDOUEyOTtcXG4gICAgLS1ibGFja09saXZlOiAjM0I0MTNDO1xcbiAgICAtLWFzaEdyYXk6ICM5REI1QjI7XFxuICAgIC0tbGlnaHRDeWFuOiAjREFGMEVFO1xcbiAgICAtLXRpZmZhbnlCbHVlOiAjOTREMUJFO1xcbiAgICAtLWJ1ZmY6ICNFREI4OEI7XFxuICAgIC0tdGF1cGU6ICM4NTdDOEQ7XFxuICAgIC0tcGluZTogIzEzNkY2MztcXG4gICAgLS1hcHJpY290OiAjRkZDOUI1O1xcbiAgICAtLWJsYWNrOiAjMDUwNTA1O1xcbiAgICAtLWxpZ2h0R3JheTogI0NDQ0NDQztcXG4gICAgLS13aGl0ZTogI0Y1RjVGNTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSwgXFxuaHRtbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IGF1dG8gMWZyIGF1dG8gLyBhdXRvIDFmcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICBoZWlnaHQ6IDU2cHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1NXB4O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbSAwLjVyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmF5KTtcXG59XFxuXFxuICAgICNtZW51LWJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDhweDtcXG4gICAgICAgIGxlZnQ6IDMycHg7XFxuICAgIH1cXG4gICAgICAgICNtZW51LWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDeWFuKTtcXG4gICAgICAgIH1cXG5cXG4gICAgLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGQxYmU1MjtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFzaEdyYXkpO1xcbiAgICB9XFxuICAgICNhZGQtdGFzay1wbHVzIHtcXG4gICAgICAgIGhlaWdodDogMTVweDtcXG4gICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgICAgICAuYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICB9XFxuXFxuLnBhZ2Uge1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q3lhbik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGQxYmU1MjsgICAgXFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQ6IGF1dG8gMWZyIC8gMWZyO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG4gICAgICAgIC5zaWRlYmFyLmNsb3NlZCwgXFxuICAgICAgICAudGFzay1mb3JtLWNvbnRhaW5lci5jbG9zZWQsIFxcbiAgICAgICAgLnByb2plY3QtZGVsZXRlLXBvcHVwLmNsb3NlZCB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5mdWxsLXNjcmVlbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgICAgICAuc2lkZWJhciBoMiB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnNpZGViYXIgcCB7XFxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuc2lkZWJhciBwOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlmZmFueUJsdWUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgIC5zaWRlYmFyIC5ob21lLCBcXG4gICAgICAgIC5zaWRlYmFyIC5wcm9qZWN0cyB7XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLm5ldy1wcm9qZWN0IHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAubmV3LXByb2plY3QgcCB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5zaWRlYmFyIC5uZXctcHJvamVjdDpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI3BsdXMge1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Utc2VsZjogc3RhcnQ7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAucHJvamVjdC1mb3JtIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAgICAgZ3JpZDogMWZyIDFmciAvIDFmciAxZnI7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGdhcDogMCAxNXB4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q3lhbik7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcmljb3QpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjc1cywgb3BhY2l0eSAwLjc1cywgdmlzaWJpbGl0eSAwLjc1cztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0uaGlkZGVue1xcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAucHJvamVjdC1mb3JtIGlucHV0IHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcmljb3QpO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWFwcmljb3QpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5mb3JtLWJ1dHRvbnMge1xcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWZvcm0gYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjVweDtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgdmFyKC0tYmxhY2tPbGl2ZSk7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXByaWNvdCk7XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnByb2plY3QtZm9ybSBidXR0b246bnRoLWNoaWxkKDEpe1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgLnByb2plY3RzIC5pbmJveCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAucHJvamVjdDpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpZmZhbnlCbHVlKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnByb2plY3QgcCB7XFxuICAgICAgICAgICAgICAgIGZsZXg6IGF1dG87XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAuY29udGVudCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEN5YW4pO1xcbiAgICAgICAgZmxleDogYXV0bztcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgfVxcblxcbiAgICAgICAgLmluYm94LXRpdGxlIHtcXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgICAgIGhlaWdodDogNjdweDtcXG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCByaWRnZSByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjI2KTtcXG4gICAgICAgIH0gXFxuICAgICAgICAuaW5ib3gtdGl0bGUgaDIge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kbyB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAucHJpb3JpdHktbGluZSB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDdweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC50b2RvLXRpdGxlIHtcXG4gICAgICAgICAgICAgICAgZmxleDogYXV0bztcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweCA1cHggMTVweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAudG9kbzpob3ZlciB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDUpO1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAycHggcmdiKDAgMCAwIC8gMjAlKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC50b2RvIGltZyB7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgI2hpZGRlbi1vcHRpb25ze1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMzBweDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjaGlkZGVuLW9wdGlvbnMgZGl2e1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgI2hpZGRlbi1vcHRpb25zIGRpdjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLnNsZWVweS1jb250YWluZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5zbGVlcHkge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5zbGVlcHktdGV4dCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIFxcbiAgICAgIFxcbmZvb3RlciB7XFxuICAgIGZvbnQtZmFtaWx5OiBEZWtrbztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi50YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hc2hHcmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzLCB2aXNpYmlsaXR5IDAuMjVzLCBoZWlnaHQgMC43NXMsXFxuICAgICAgICAgICAgICAgIHdpZHRoIDAuNzVzO1xcbn0gXFxuICAgIC50YXNrLWZvcm0tY29udGFpbmVyLCBcXG4gICAgLnRhc2stZm9ybS1jb250YWluZXIuY2xvc2VkIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIG1hcmdpbjphdXRvO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgfVxcbiAgICAudGFzay1mb3JtIHtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQ6IGF1dG8gYXV0byBhdXRvIC8gMWZyIDFmcjtcXG4gICAgfVxcbiAgICAgICAgLnRhc2stZm9ybS1leGl0IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XFxuICAgICAgICAgICAgdG9wOiAxNXB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRhc2stZm9ybS1leGl0IGltZ3tcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmZvcm0tdGl0bGUge1xcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAycmVtIDAgMnJlbTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRvZG8tZm9ybS10aXRsZSxcXG4gICAgICAgIC50b2RvLWRlc2NyaXB0aW9uLFxcbiAgICAgICAgLnRvZG8tZHVlLWRhdGUsXFxuICAgICAgICAucHJpb3JpdHktbWVudSxcXG4gICAgICAgIC5zdWJtaXQtdGFzayB7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk0ZDFiZThjO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC50b2RvLWZvcm0tdGl0bGUge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDcwdnc7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZHVlLWRhdGUtcHJpby1jb250YWluZXIge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB9XFxuICAgICAgICAudG9kby1kdWUtZGF0ZSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhc2stZm9ybSB0ZXh0YXJlYTpmb2N1cyxcXG4gICAgICAgIC50YXNrLWZvcm0gaW5wdXQ6Zm9jdXMsXFxuICAgICAgICAucHJpb3JpdHktbWVudTpmb2N1cyB7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkMWJlMTM7XFxuICAgICAgICB9XFxuICAgICAgICAuc3VibWl0LXRhc2sge1xcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLnN1Ym1pdC10YXNrOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZDFiZWM1O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIH1cXG4ucHJvamVjdC1kZWxldGUtcG9wdXAge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hc2hHcmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzLCB2aXNpYmlsaXR5IDAuMjVzLCBoZWlnaHQgMC43NXMsXFxuICAgICAgICAgICAgICAgIHdpZHRoIDAuNzVzO1xcbn0gICBcXG4gICAgLnByb2plY3QtZGVsZXRlLXBvcHVwLFxcbiAgICAucHJvamVjdC1kZWxldGUtcG9wdXAuY2xvc2VkIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgICAgIG1hcmdpbjogMTB2aCBhdXRvO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0LWRlbGV0ZS1leGl0IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNXB4O1xcbiAgICAgICAgcmlnaHQ6IDVweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgfVxcbiAgICAgICAgLnByb2plY3QtZGVsZXRlLWV4aXQgaW1nIHtcXG4gICAgICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIH1cXG4gICAgLnByb2plY3QtZGVsZXRlLXBvcHVwIHAge1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcXG4gICAgfVxcbiAgICAucHJvamVjdC1kZWxldGUtYnV0dG9ucyB7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgICAgIC5wcm9qZWN0LWRlbGV0ZS1idXR0b25zIGJ1dHRvbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnByb2plY3QtZGVsZXRlLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkMWJlYzU7XFxuICAgICAgICB9XFxuXFxuLnN1bW1hcnkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgbWF4LXdpZHRoOiA4NXZ3O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFzaEdyYXkpO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xcbn1cXG4gICAgLnN1bW1hcnktZXhpdCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDVweDtcXG4gICAgICAgIHJpZ2h0OiA1cHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgXFxuXFxuXFxuXFxuLmNsb3NlZCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuYTpob3ZlciB7XFxuICAgIGNvbG9yOiAjNEI0QjRCO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWZmYW55Qmx1ZSk7XFxufVxcbiBcXG4ubm8tcG9pbnRlci1ldmVudHMge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgbWVudUljb24gZnJvbSAnLi9tZW51LnN2Zyc7XG5pbXBvcnQgKiBhcyBpbmRleCBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCBjYXRJY29uIGZyb20gJy4vc2xlZXB5LnBuZyc7XG5pbXBvcnQgcGx1c0ljb24gZnJvbSAnLi9wbHVzLnBuZyc7XG5pbXBvcnQgYmluSWNvbiBmcm9tICcuL2Jpbi5wbmcnO1xuaW1wb3J0IGRvdE1lbnVJY29uIGZyb20gJy4vZG90LW1lbnUucG5nJztcblxuXG5cbmNvbnN0IGNyZWF0ZUNsYXNzZWRFbGVtZW50ID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICAgIGxldCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGlmIChjbGFzc05hbWUpIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuY29uc3QgbWFpbkRpdiA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnbWFpbicpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuXG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgY29uc3QgbWVudUJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgbWVudUJ1dHRvbi5zcmMgPSBtZW51SWNvbjtcbiAgICAgICAgICAgIG1lbnVCdXR0b24uaWQgPSAnbWVudS1idXR0b24nO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdhZGQtdGFzay1idXR0b24nKTtcbiAgICAgICAgICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQUREIFRBU0snXG4gICAgICAgICAgICBjb25zdCBwbHVzID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBwbHVzLnNyYyA9IHBsdXNJY29uO1xuICAgICAgICAgICAgcGx1cy5pZCA9ICdhZGQtdGFzay1wbHVzJ1xuICAgICAgICAgICAgYWRkVGFza0J1dHRvbi5hcHBlbmQocGx1cyk7XG5cbiAgICBlbGVtZW50LmFwcGVuZChtZW51QnV0dG9uLCBhZGRUYXNrQnV0dG9uKVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5cblxuY29uc3QgcGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdwYWdlJyk7XG5cblxuXG4gICAgY29uc3Qgc2lkZUJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnc2lkZWJhcicpO1xuICAgICAgICAgICAgY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdob21lJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGgyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoMi50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmJveCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ2luYm94Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmJveC5pZCA9ICdpbmJveCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmJveC50ZXh0Q29udGVudCA9IFwiSU5CT1hcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdpbmJveCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kYXkudGV4dENvbnRlbnQgPSBcIlRPREFZXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoaXNXZWVrID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAnaW5ib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNXZWVrLnRleHRDb250ZW50ID0gXCJORVhUIDcgREFZU1wiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbXBvcnRhbnQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdpbmJveCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LnRleHRDb250ZW50ID0gXCJJTVBPUlRBTlRcIjtcblxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZChoMiwgaW5ib3gsIHRvZGF5LCB0aGlzV2VlaywgaW1wb3J0YW50KVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ3Byb2plY3RzJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGgyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoMi50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFNcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9uZXcgcHJvamVjdCBmb3JtXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZm9ybScsICdwcm9qZWN0LWZvcm0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVMYWJlbC5IVE1MZm9yID0gJ25ldy1wcm9qZWN0LW5hbWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSAnUHJvamVjdCBOYW1lOidcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVJbnB1dC5pZCA9ICduZXctcHJvamVjdC1uYW1lJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lSW5wdXQubWF4ID0gMjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNEaXYgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ2Zvcm0tYnV0dG9ucycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdidXR0b24nLCAnYWRkLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2J1dHRvbicsICduZXctcHJvamVjdC1jYW5jZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zRGl2LmFwcGVuZChhZGRCdXR0b24sIGNhbmNlbEJ1dHRvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKG5hbWVMYWJlbCwgbmFtZUlucHV0LCBidXR0b25zRGl2KVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ25ldy1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnRleHRDb250ZW50ID0gJ0FERCBORVcgUFJPSkVDVCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbHVzID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1cy5zcmMgPSBwbHVzSWNvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVzLmlkID0gJ3BsdXMnXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZChwLCBwbHVzKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGgyLCBuZXdQcm9qZWN0LCBmb3JtKVxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGhvbWUoKSwgcHJvamVjdHMoKSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbmJveCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnaW5ib3gtdGl0bGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SDIgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnaDInLCAnaW5ib3gtaDInKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50SDIudGV4dENvbnRlbnQgPSBgSU5CT1hgXG4gICAgICAgICAgICAgICAgY3VycmVudEluYm94LmFwcGVuZENoaWxkKGN1cnJlbnRIMik7XG4gICAgICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICd0b2Rvcy1jb250YWluZXInKTtcbiAgIFxuICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZm9vdGVyJywgJ2Zvb3RlcicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmEuaW5uZXJIVE1MID0gJ2dpdGh1Yi5jb20vcnViYmVydGVldGgnXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3J1YmJlcnRlZXRoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYS50YXJnZXQgPSAnX2JsYW5rJ1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoY3VycmVudEluYm94LCB0b2RvQ29udGFpbmVyLCBmb290ZXIoKSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBcblxuXG5cbiAgICBlbGVtZW50LmFwcGVuZChzaWRlQmFyKCksIGNvbnRlbnQoKSlcbiAgICBcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgZm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICd0YXNrLWZvcm0tY29udGFpbmVyJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKVxuXG4gICAgICAgIGNvbnN0IGV4aXRCdXR0b24gPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ3Rhc2stZm9ybS1leGl0Jyk7XG4gICAgICAgICAgICBjb25zdCB4ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICB4LnNyYyA9IHBsdXNJY29uO1xuICAgICAgICAgICAgZXhpdEJ1dHRvbi5hcHBlbmQoeCk7XG5cbiAgICAgICAgY29uc3QgZm9ybVRpdGxlID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAnZm9ybS10aXRsZScpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBUby1EbydcblxuICAgICAgICBjb25zdCBmb3JtID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2Zvcm0nLCd0YXNrLWZvcm0nKTtcbiAgICAgICAgZm9ybS5tZXRob2QgPSAnJztcbiAgICAgICAgZm9ybS5hY3Rpb24gPSAnJztcblxuICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCd0ZXh0YXJlYScsICd0b2RvLWZvcm0tdGl0bGUnKTtcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUaXRsZTogZXguICdHeW0nXCI7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5yb3dzID0gJzInXG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5tYXggPSA0MDtcblxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCd0ZXh0YXJlYScsICd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb246IGV4LiAnV29yayBvbiBjYXJkaW8nXCI7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5yb3dzID0gJzUnXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnZHVlLWRhdGUtcHJpby1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnaW5wdXQnLCAndG9kby1kdWUtZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdzZWxlY3QnLCAncHJpb3JpdHktbWVudScpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eS5pbm5lckhUTUwgPSBgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPlByaW9yaXR5IChvcHRpb25hbCk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG93XCI+TG93PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+SGlnaDwvb3B0aW9uPmA7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChkdWVEYXRlSW5wdXQsIHByaW9yaXR5KVxuXG4gICAgICAgICAgICBjb25zdCBzdWJtaXRUYXNrID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2J1dHRvbicsICdzdWJtaXQtdGFzaycpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFRhc2sudHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFRhc2sudGV4dENvbnRlbnQgPSAnQUREIFRPIERPJ1xuXG4gICAgICAgICAgICBmb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBkZXNjcmlwdGlvbklucHV0LCBjb250YWluZXIsIHN1Ym1pdFRhc2spXG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmQoZXhpdEJ1dHRvbiwgZm9ybVRpdGxlLCBmb3JtKVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBwcm9qZWN0RGVsZXRlUG9wdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAncHJvamVjdC1kZWxldGUtcG9wdXAnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xuICAgICAgICBjb25zdCBleGl0ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdwcm9qZWN0LWRlbGV0ZS1leGl0Jyk7XG4gICAgICAgICAgICBjb25zdCB4ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICB4LnNyYyA9IHBsdXNJY29uO1xuICAgICAgICAgICAgZXhpdC5hcHBlbmQoeClcblxuICAgICAgICBjb25zdCBwID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHByb2plY3QgYW5kIGFsbCAndG8tZG9zJyBhc3NvY2lhdGVkIHdpdGggaXQ/YFxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ3Byb2plY3QtZGVsZXRlLWJ1dHRvbnMnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm0gPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY29uZmlybS50ZXh0Q29udGVudCA9ICdjb25maXJtJ1xuICAgICAgICAgICAgY29uc3QgY2FuY2VsID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdjYW5jZWwnXG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGNvbmZpcm0sIGNhbmNlbCk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kKGV4aXQsIHAsIGJ1dHRvbkNvbnRhaW5lcilcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxudHJ5IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLmFwcGVuZChoZWFkZXIoKSwgcGFnZSgpLCBmb3JtKCksIHByb2plY3REZWxldGVQb3B1cCgpKTtcbn0gY2F0Y2ggKGUpe1xuICAgIGNvbnNvbGUubG9nKGUpXG59XG5cblxuXG4vLy8vL1xuLy8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vLy8vXG4vLy8vL1xuXG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcblxuICAgICAgICAvLyBsb2dpYyBmb3Igc2VsZWN0aW5nIGluYm94IGFuZCBwcm9wYWdhdGluZyB3aXRoIGFwcHJvcHJpYXRlIHRvZG9zXG4gICAgY29uc3Qgc2VsZWN0SW5ib3ggPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmJveCcpLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIC8vIGNoYW5nZSB0aXRsZSBkZXBlbmRpbmcgb24gY3VycmVudCBpbmJveFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtaDInKS50ZXh0Q29udGVudCA9IHRhcmdldC50ZXh0Q29udGVudDtcblxuICAgICAgICBzd2l0Y2ggKHRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgY2FzZSAnSU5CT1gnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3UgYXJlIG5vdyBpbiB0aGUgbWFpbiBpbmJveGApO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGxUb2RvcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVE9EQVknOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3UgYXJlIG5vdyBpbiBUb2RheSdzIGluYm94YCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheVRvZGF5VG9kb3MoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ05FWFQgNyBEQVlTJzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWW91IGFyZSBub3cgaW4gVGhpcyBXZWVrJ3MgaW5ib3hgKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5VGhpc1dlZWtUb2RvcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSU1QT1JUQU5UJzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWW91IGFyZSBub3cgaW4gdGhlIEhpZ2ggUHJpb3JpdHkgaW5ib3hgKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5SW1wb3J0YW50VG9kb3MoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LWgyJykudGV4dENvbnRlbnQgPSB0YXJnZXQudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgeW91IGFyZSBub3cgaW4gdGhlICR7dGFyZ2V0LnRleHRDb250ZW50fSBpbmJveGApXG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheVByb2plY3RUb2Rvcyh0YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlTbGVlcHlDYXQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbmJveElzRW1wdHkgPSAoKSA9PiB7XG4gICAgICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5teVRvZG9MaXN0KS5sZW5ndGggPT0gMCkge3JldHVybiB0cnVlO30gXG4gICAgICAgIGVsc2Uge3JldHVybiBmYWxzZTt9XG4gICAgfVxuXG5cbiAgICBjb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKV07XG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0LmZpbHRlcihwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChbLi4ucHJvamVjdC5jbGFzc0xpc3RdLmluZGV4T2YoJ2FjdGl2ZScpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdFswXS50ZXh0Q29udGVudDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBY3RpdmVJbmJveCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGluYm94TGlzdCA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5ib3gnKV07XG4gICAgICAgIGxldCBjdXJyZW50SW5ib3ggPSBpbmJveExpc3QuZmlsdGVyKGluYm94ID0+IHtcbiAgICAgICAgICAgIGlmKFsuLi5pbmJveC5jbGFzc0xpc3RdLmluZGV4T2YoJ2FjdGl2ZScpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluYm94O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY3VycmVudEluYm94WzBdO1xuICAgIH1cblxuICAgIGNvbnN0IG5vVG9kb3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpLmxlbmd0aCA9PSAwO1xuICAgIH1cblxuICAgIGNvbnN0IHNsZWVweUNhdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdzbGVlcHktY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHAgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdzbGVlcHktdGV4dCcpO1xuICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9ICdZb3UgaGF2ZSBubyBjdXJyZW50IHRhc2tzJztcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcuc3JjID0gY2F0SWNvbjtcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdzbGVlcHknKTtcbiAgICAgICAgZGl2LmFwcGVuZChpbWcsIHApO1xuICAgICAgICByZXR1cm4gZGl2XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVNsZWVweUNhdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICBpZiAobm9Ub2RvcygpKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsZWVweS1jb250YWluZXInKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmQoc2xlZXB5Q2F0KCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsZWVweS1jb250YWluZXInKSAhPSBudWxsKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsZWVweS1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBjb25zdCByZW1vdmVUb2RvID0gKGlkKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm15VG9kb0xpc3QpO1xuICAgICAgICBsZXQgbmV3TGlzdCA9IGN1cnJlbnRMaXN0LmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8uaWQgIT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kb1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUb2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KG5ld0xpc3QpKTtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuc2VsZWN0SW5ib3goZGlzcGxheUNvbnRyb2xsZXIuZ2V0QWN0aXZlSW5ib3goKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZU9wdGlvbnNNZW51cyA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2hpZGRlbi1vcHRpb25zJykuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKHRvZG8pID0+IHtcblxuICAgICAgICAvL2NyZWF0ZSB0b2RvIHRvIGFkZCB0byBjb250YWluZXIgKHRpdGxlLCBkYXRlLCBvcHRpb25zKVxuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICd0b2RvJyk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlMaW5lID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdwcmlvcml0eS1saW5lJyk7XG4gICAgICAgICAgICBzd2l0Y2ggKHRvZG8ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdMb3cnOlxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxpbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdNZWRpdW0nOlxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxpbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdydcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnSGlnaCc6XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TGluZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJ1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TGluZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSdcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGl0bGVQID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAndG9kby10aXRsZScpO1xuICAgICAgICAgICAgdGl0bGVQLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgICAgICAgICAgICAgIC8vIGV2ZW50IGxpc3RlbmVyIHRvIGNyZWF0ZSBzdW1tYXJ5IHdpbmRvdyBvbiBjbGlja1xuICAgICAgICAgICAgdGl0bGVQLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG9kb2xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5teVRvZG9MaXN0KTtcbiAgICAgICAgICAgICAgICB0b2RvbGlzdC5maWx0ZXIodG9kbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2RvLmlkID09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubGFzdENoaWxkLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeVdpbmRvdyA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAnc3VtbWFyeScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXRCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdEJ1dHRvbi5zcmMgPSBwbHVzSWNvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdW1tYXJ5LWV4aXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW1tYXJ5JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci50b2dnbGVQYWdlQ2xpY2tFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZVAgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVAuaW5uZXJIVE1MID0gYDxzdHJvbmc+VGl0bGU6PC9zdHJvbmc+ICR7dG9kby50aXRsZX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uUCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uUC5pbm5lckhUTUwgPSBgPHN0cm9uZz5EZXNjcmlwdGlvbjo8L3N0cm9uZz4gJHt0b2RvLmRlc2NyaXB0aW9ufWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFAgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG8ucHJvamVjdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QgPSB0b2RvLnByb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQLmlubmVySFRNTCA9IGA8c3Ryb25nPlByb2plY3Q6PC9zdHJvbmc+ICR7cHJvamVjdH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVEYXRlLmlubmVySFRNTCA9IGA8c3Ryb25nPkR1ZSBEYXRlOjwvc3Ryb25nPiAke3RvZG8uZHVlRGF0ZX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gYDxzdHJvbmc+UHJpb3JpdHk6PC9zdHJvbmc+ICR7dG9kby5wcmlvcml0eX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeVdpbmRvdy5hcHBlbmQoZXhpdEJ1dHRvbiwgdGl0bGVQLCBkZXNjcmlwdGlvblAsIHByb2plY3RQLCBkdWVEYXRlLCBwcmlvcml0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykuYXBwZW5kKHN1bW1hcnlXaW5kb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci50b2dnbGVQYWdlQ2xpY2tFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGRhdGVQID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAndG9kby1kYXRlJyk7XG4gICAgICAgICAgICBkYXRlUC50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcblxuICAgICAgICBjb25zdCBoaWRkZW5JRCA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdwJywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgaGlkZGVuSUQuaWQgPSAnaWQnXG4gICAgICAgICAgICBoaWRkZW5JRC50ZXh0Q29udGVudCA9IHRvZG8uaWQ7XG5cbiAgICAgICAgICAgIC8vb3B0aW9ucyBidXR0b25zXG4gICAgICAgIGNvbnN0IGhpZGRlbk9wdGlvbnMgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgaGlkZGVuT3B0aW9ucy5pZCA9ICdoaWRkZW4tb3B0aW9ucyc7XG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXQgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgnZGl2JywgJ29wdGlvbnMtZWRpdCcpO1xuICAgICAgICAgICAgICAgIGVkaXQudGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICAgICAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2NvbWluZyBzb29uJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2FuY2VsID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ2RpdicsICdvcHRpb25zLWNhbmNlbCcpO1xuICAgICAgICAgICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvbnNNZW51cygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBoaWRkZW5PcHRpb25zLmFwcGVuZChlZGl0LCBjYW5jZWwpO1xuXG4gICAgICAgICAgICAvLyB0b2RvIGJ1dHRvbnNcbiAgICAgICAgY29uc3QgYmluID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBiaW4uc3JjID0gYmluSWNvbjtcbiAgICAgICAgICAgIGJpbi5pZCA9ICdiaW4nO1xuICAgICAgICAgICAgYmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFyZ2V0IGhpZGRlbiBJRCBvZiB0b2RvO1xuICAgICAgICAgICAgICAgIGxldCB4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5sYXN0Q2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICByZW1vdmVUb2RvKHgpO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVNsZWVweUNhdCgpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBvcHRpb25zID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBvcHRpb25zLnNyYyA9IGRvdE1lbnVJY29uO1xuICAgICAgICAgICAgb3B0aW9ucy5pZCA9ICdvcHRpb25zJztcbiAgICAgICAgICAgIG9wdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGhpZGVPcHRpb25zTWVudXMoKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuT3B0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlMaW5lLCB0aXRsZVAsIGRhdGVQLCBvcHRpb25zLCBiaW4sIGhpZGRlbk9wdGlvbnMsIGhpZGRlbklEKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpLmFwcGVuZCh0b2RvQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhckN1cnJlbnRJbmJveCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb2xkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpO1xuICAgICAgICBvbGRDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUNsYXNzZWRFbGVtZW50KCdkaXYnLCAndG9kb3MtY29udGFpbmVyJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykuYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgfVxuICAgIGNvbnN0IGRpc3BsYXlBbGxUb2RvcyA9ICgpID0+IHtcbiAgICAgICAgaWYgKGluYm94SXNFbXB0eSgpID09IGZhbHNlKSB7XG4gICAgICAgICAgICBjbGVhckN1cnJlbnRJbmJveCgpO1xuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UubXlUb2RvTGlzdCkuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVRvZGF5VG9kb3MgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpbmJveElzRW1wdHkoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgY2xlYXJDdXJyZW50SW5ib3goKTtcbiAgICAgICAgICAgIGxldCB0b2RheXNMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UubXlUb2RvTGlzdCkuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRheUxpc3QgPSB0b2RvLmR1ZURhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3IERhdGUoKS5nZXREYXRlKCkgPT0gZGF5TGlzdFsyXVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgbmV3IERhdGUoKS5nZXRNb250aCgpID09IHBhcnNlSW50KGRheUxpc3RbMV0pIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpID09IGRheUxpc3RbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRvZGF5c0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVRoaXNXZWVrVG9kb3MgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpbmJveElzRW1wdHkoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgY2xlYXJDdXJyZW50SW5ib3goKTtcbiAgICAgICAgICAgIGxldCBUaGlzV2Vla0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5teVRvZG9MaXN0KS5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXguZGF5RnVuY3MuaXNXaXRoaW5XZWVrKG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFRoaXNXZWVrTGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlVG9kbyh0b2RvKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5SW1wb3J0YW50VG9kb3MgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpbmJveElzRW1wdHkoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgY2xlYXJDdXJyZW50SW5ib3goKTtcbiAgICAgICAgICAgIGxldCBpbXBvcnRhbnRMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UubXlUb2RvTGlzdCkuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvZG8ucHJpb3JpdHkgPT0gJ0hpZ2gnKSByZXR1cm4gdG9kb1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGltcG9ydGFudExpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVByb2plY3RUb2RvcyA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChpbmJveElzRW1wdHkoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgY2xlYXJDdXJyZW50SW5ib3goKTtcbiAgICAgICAgICAgIGdldEFjdGl2ZVByb2plY3QoKTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm15VG9kb0xpc3QpLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRvZG8ucHJvamVjdCA9PSBnZXRBY3RpdmVQcm9qZWN0KCkpIHJldHVybiB0b2RvO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVUb2RvKHRvZG8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBjbGVhclRvZG9Gb3JtID0gKCkgPT4ge1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtLXRpdGxlJyk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZHVlLWRhdGUnKTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LW1lbnUnKTtcblxuICAgICAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICBkYXRlLnZhbHVlID0gJyc7XG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGV4aXN0cztcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgICAgICAgaWYgKHByb2plY3ROYW1lLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBwcm9qZWN0IG5hbWUgaXMgJHtwcm9qZWN0TmFtZS5sZW5ndGh9IGNoYXJzIGxvbmdgKVxuICAgICAgICAgICAgYWxlcnQoJ1Byb2plY3QgbmFtZSBtdXN0IGJlIGJldHdlZW4gMyBhbmQgMTggY2hhcmFjdGVycycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZS5sZW5ndGggPiAxOCkge1xuICAgICAgICAgICAgYWxlcnQoJ1Byb2plY3QgbmFtZSBtdXN0IGJlIGJldHdlZW4gMyBhbmQgMTggY2hhcmFjdGVycycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgICAgICAvLyBjaGVjayBpZiBwcm9qZWN0IGFscmVhZHkgZXhpc3RzXG4gICAgICAgIHByb2plY3RzLmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlLnRleHRDb250ZW50ID09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Byb2plY3QgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBjcmVhdGVDbGFzc2VkRWxlbWVudCgncCcsICdpbmJveCcpO1xuICAgICAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgICAgICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuc2VsZWN0SW5ib3goZS50YXJnZXQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmFwcGVuZENoaWxkKHApO1xuICAgICAgICAgICAgaW5kZXguc3RvcmFnZS5zdG9yZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgdG9nZ2xlTmV3UHJvamVjdEZvcm0oKTtcbiAgICAgICAgICAgIGNsZWFyTmV3UHJvamVjdEZvcm0oKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGluZGV4LnN0b3JhZ2UucmVtb3ZlUHJvamVjdChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKCkgPT4ge1xuICAgICAgICAvLyB2YXJpYWJsZXMgdG8gYWNxdWlyZSBmb3JtIGlucHV0IHZhbHVlcyBcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybS10aXRsZScpO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWR1ZS1kYXRlJyk7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1tZW51Jyk7XG5cbiAgICAgICAgICAgIC8vIHNldHMgY3VycmVudCBwcm9qZWN0IGtleSBhbmQgZ2l2ZXMgdmFsdWUgaWYgYSBwcm9qZWN0IGlzIHNlbGVjdGVkXG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdDtcbiAgICAgICAgbGV0IHByb2plY3RzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JyldXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgbGlzdCA9IFsuLi5wcm9qZWN0LmNsYXNzTGlzdF07XG4gICAgICAgICAgICBpZiAobGlzdC5pbmRleE9mKCdhY3RpdmUnKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgdG9kbyA9IG5ldyBpbmRleC5Ub2RvKGxvY2FsU3RvcmFnZS5pZCwgdGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgY3VycmVudFByb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvKTtcbiAgICAgICAgICAgIC8vIHN0b3JlIHRvZG8gaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgICBpbmRleC5zdG9yYWdlLnN0b3JlSXRlbSh0b2RvKTtcblxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jbGVhclRvZG9Gb3JtKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlUGFnZUNsaWNrRXZlbnRzID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpLmNsYXNzTGlzdC50b2dnbGUoJ25vLXBvaW50ZXItZXZlbnRzJyk7XG4gICAgfVxuXG4gICAgLy8gbWFudWFsIGRpc3BsYXlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5ib3gnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIGRpc3BsYXlBbGxUb2RvcygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0SW5ib3gsXG4gICAgICAgIGRpc3BsYXlTbGVlcHlDYXQsXG4gICAgICAgIGluYm94SXNFbXB0eSxcbiAgICAgICAgY2xlYXJUb2RvRm9ybSxcbiAgICAgICAgZGlzcGxheUFsbFRvZG9zLFxuICAgICAgICBkaXNwbGF5VG9kYXlUb2RvcyxcbiAgICAgICAgZGlzcGxheVRoaXNXZWVrVG9kb3MsXG4gICAgICAgIGRpc3BsYXlJbXBvcnRhbnRUb2RvcyxcbiAgICAgICAgZGlzcGxheVByb2plY3RUb2RvcyxcbiAgICAgICAgZ2V0QWN0aXZlSW5ib3gsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIGhpZGVPcHRpb25zTWVudXMsXG4gICAgICAgIHRvZ2dsZVBhZ2VDbGlja0V2ZW50c1xuICAgIH1cbn0pKClcblxuXG5cblxuXG5cbmNvbnN0IGFkZE5vdGVzID0gKGlkKSA9PiB7XG4gICAgICAgIC8vZ3JhYiB0b2RvIGZyb20gc3RvcmFnZVxuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5teVRvZG9MaXN0KVtpZF07XG4gICAgICAgIC8vbWFrZSBhIGNvcHkgb2YgdG9kb3MgbGlzdDtcbiAgICBsZXQgbmV3TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm15VG9kb0xpc3QpO1xuICAgICAgICAvL3NldCBub3RlcyBvZiB0b2RvXG4gICAgb2JqLm5vdGVzID0gJ2RvIHNvbWUgc3R1ZmYnXG4gICAgICAgIC8vIHVwZGF0ZSB2YWx1ZSBpbiB0b2RvcyBsaXN0XG4gICAgbmV3TGlzdFtpZF0gPSBvYmo7XG4gICAgICAgIC8vIHJlc3RvcmUgdG9kb3MgbGlzdCBpbiBsb2NhbCBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShuZXdMaXN0KSk7XG59XG5cblxuXG4vLy8vL1xuLy8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8vLy9cblxuXG5cbi8vLy8vXG4vLy8vLyBTSURFQkFSIE1FRElBIFFVRVJZIExJU1RFTkVSUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLy8vL1xuXG5jb25zdCBtZW51SGlkZXIgPSAoeCkgPT4ge1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnNpZGViYXInKTtcbiAgICBpZiAoeC5tYXRjaGVzKSB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZWQnKTtcbiAgICB9XG59O1xuXG5jb25zdCBmdWxsc2NyZWVuTWVudSA9ICh4KSA9PiB7XG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuc2lkZWJhcicpO1xuICAgIGlmKHgubWF0Y2hlcykge1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2Z1bGwtc2NyZWVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsLXNjcmVlbicpO1xuICAgIH07XG59O1xuXG5cbmxldCBoaWRlTWVudSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMzUwcHgpXCIpO1xubWVudUhpZGVyKGhpZGVNZW51KTtcbmhpZGVNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG1lbnVIaWRlcik7XG5cbmxldCBzaXplTWVudSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogODAwcHgpXCIpO1xuc2l6ZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVsbHNjcmVlbk1lbnUpO1xuXG5cbi8vLy8vXG4vLy8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLy8vL1xuXG5cblxuLy8vLy9cbi8vLy8vIFNJREVCQVIgRVZFTlQgTElTVEVORVJTICYgRlVOQ1RJT05TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vLy8vXG5jb25zdCB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2VkJyk7XG59XG5cbmNvbnN0IHRvZ2dsZU5ld1Byb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn07XG5cbmNvbnN0IGNsZWFyTmV3UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LW5hbWUnKS52YWx1ZSA9ICcnO1xufTtcblxuICAgIC8vIGhhbWJ1cmdlciBtZW51IGJ1dHRvbiwgdG9nZ2xlcyBzaWRlYmFyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVTaWRlYmFyKCk7XG59KTtcblxuICAgIC8vIHRvZ2dsZXMgbmV3IHByb2plY3QgZm9ybSBvbiBjbGljayBvZiBuZXcgcHJvamVjdCBidXR0b25cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZ2dsZU5ld1Byb2plY3RGb3JtKCk7XG59KTtcblxuICAgIC8vIGNhbmNlbHMgYW5kIHJlc2V0cyBuZXcgcHJvamVjdCBpbnB1dCBcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1jYW5jZWwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVOZXdQcm9qZWN0Rm9ybSgpO1xuICAgIGNsZWFyTmV3UHJvamVjdEZvcm0oKTtcbn0pO1xuICAgIC8vIGFkZHMgcHJvamVjdCB0byBzdG9yYWdlXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUNvbnRyb2xsZXIuYWRkUHJvamVjdClcblxuY29uc3QgbG9hZFByb2plY3RzID0gKCkgPT4ge1xuICAgIGlmIChpbmRleC5zdG9yYWdlLmdldFByb2plY3RzKCkgIT09IG51bGwpIHtcbiAgICAgICAgSlNPTi5wYXJzZShpbmRleC5zdG9yYWdlLmdldFByb2plY3RzKCkpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwID0gY3JlYXRlQ2xhc3NlZEVsZW1lbnQoJ3AnLCAnaW5ib3gnKTtcbiAgICAgICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgICAgICBwLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgICAgICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuc2VsZWN0SW5ib3goZS50YXJnZXQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmFwcGVuZENoaWxkKHApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiAgICAvLyBwcmV2ZW50IGRlZmF1bHQgb2YgcHJvamVjdCBmb3JtIG9uIGVudGVyIHByZXNzXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAvLyBkaXNwbGF5IHByb2plY3RzIG9uIHBhZ2UgbG9hZFxuICAgIGxvYWRQcm9qZWN0cygpO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlTbGVlcHlDYXQoKTtcbn0pXG4gICAgLy8gaW5ib3ggc2VsZWN0b3IgbGlzdGVuZXJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmJveCcpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuc2VsZWN0SW5ib3goZS50YXJnZXQpXG4gICAgfSlcbn0pXG5cblxuLy8vLy9cbi8vLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLy8vL1xuXG5cblxuLy8vLy9cbi8vLy8vXG4vLy8vLy0tLS0tTkVXIFRBU0sgRVZFTlQgTElTVEVORVJTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vLy8vXG4vLy8vL1xuXG5jb25zdCB0b2dnbGVOZXdUYXNrV2luZG93ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0tY29udGFpbmVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2VkJyk7XG59XG4gICAgLy8gb3BlbiBuZXcgdGFzayB3aW5kb3cgb24gXCJhZGQgdGFza1wiIGJ1dHRvbiBjbGlja1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZ2dsZU5ld1Rhc2tXaW5kb3coKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci50b2dnbGVQYWdlQ2xpY2tFdmVudHMoKTtcbn0pXG5cbiAgICAvLyBjbG9zZSBuZXcgdGFzayB3aW5kb3cgYW5kIGNsZWFyIGZvcm0gd2l0aCBleGl0IGJ1dHRvblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybS1leGl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuY2xlYXJUb2RvRm9ybSgpO1xuICAgIHRvZ2dsZU5ld1Rhc2tXaW5kb3coKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci50b2dnbGVQYWdlQ2xpY2tFdmVudHMoKTtcbn0pXG5cbiAgICAvLyBhZGQgdG8gZG8gYW5kIGNsb3NlIG5ldyB0YXNrIHdpbmRvd1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybS10aXRsZScpLnZhbHVlIFxuICAgICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRlc2NyaXB0aW9uJykudmFsdWUgXG4gICAgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZHVlLWRhdGUnKS52YWx1ZSkge1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5hZGRUb2RvKCk7ICAgXG4gICAgICAgIHRvZ2dsZU5ld1Rhc2tXaW5kb3coKTtcbiAgICAgICAgbGV0IGluYm94ID0gZGlzcGxheUNvbnRyb2xsZXIuZ2V0QWN0aXZlSW5ib3goKTtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuc2VsZWN0SW5ib3goaW5ib3gpO1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci50b2dnbGVQYWdlQ2xpY2tFdmVudHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnUGxlYXNlIGZpbGwgaW4gYWxsIHJlcXVpcmVkIGZpZWxkcycpO1xuICAgIH1cbn0pXG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2hpZGRlbi1vcHRpb25zJykuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKG5vZGUuY2xhc3NMaXN0LnZhbHVlICE9ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5oaWRlT3B0aW9uc01lbnVzKCk7XG4gICAgICAgIH1cbiAgICB9KVxufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKS5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKVxuXG5cblxuXG5cbiIsIlxuXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3RvciAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIG5vdGVzKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlOyBcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB9XG59XG5cblxuXG5jb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgICAgICAgLy8gc2V0dXAgSUQgY291bnRlciAgICBcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJykgPT0gbnVsbCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCAnMCcpO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VG9kb0xpc3QnKSA9PSBudWxsKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoW10pKVxuICAgIH1cbiAgICBcbiAgICBcblxuICAgIGNvbnN0IGluY3JlbWVudElEID0gKCkgPT4ge1xuICAgICAgICBsZXQgeCA9IHBhcnNlRmxvYXQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJykpO1xuICAgICAgICB4Kys7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsIGAke3h9YClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJRCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JhZ2VBdmFpbGFibGUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdG9yYWdlID0gbG9jYWxTdG9yYWdlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VG9kb0xpc3QnKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShbaXRlbV0pKTtcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmluY3JlbWVudElEKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VG9kb0xpc3QnKS5zcGxpdCgnLCcpKTtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7IFxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuaW5jcmVtZW50SUQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KCdubyBzdG9yYWdlIGF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICAvLyBmb3Igbm93IG1hbnVhbGx5IHJlbW92ZSBpdGVtIHcgcGFyYW1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaXRlbS5pZCk7XG5cbiAgICAgICAgLy8gbG9naWMgdG8gcmVtb3ZlIGl0ZW0gZnJvbSBET007XG4gICAgICAgIC8vIGdvZXMgaGVyZVxuICAgIH1cblxuICAgIGNvbnN0IGdldCA9IChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW0pKVxuICAgIH1cblxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGl0ZW0gaW4gc3RvcmFnZTtcbiAgICBjb25zdCBpdGVtSW5TdG9yYWdlID0gKHRvZG8pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpKSB7XG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gdG9kby50aXRsZSkgeyBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZm91bmQgaXRlbScpOyByZXR1cm4gdHJ1ZSB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXRlbSBkb2VzblxcJ3QgZXhpc3QnKTsgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcpID09IG51bGwgKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KFtwcm9qZWN0XSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVByb2plY3RMaXN0Jykuc3BsaXQoJywnKSk7XG4gICAgICAgICAgICBsaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVByb2plY3RMaXN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCBsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcpLnNwbGl0KCcsJykpO1xuICAgICAgICBpZiAobGlzdC5pbmRleE9mKHByb2plY3QpICE9PSAtMSkge1xuICAgICAgICAgICAgbGlzdC5zcGxpY2UobGlzdC5pbmRleE9mKHByb2plY3QpLCAxKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkobGlzdCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluY3JlbWVudElELFxuICAgICAgICBnZXRJRCxcbiAgICAgICAgc3RvcmFnZUF2YWlsYWJsZSxcbiAgICAgICAgc3RvcmVJdGVtLFxuICAgICAgICBnZXQsXG4gICAgICAgIHJlbW92ZUl0ZW0sXG4gICAgICAgIGl0ZW1JblN0b3JhZ2UsXG4gICAgICAgIHN0b3JlUHJvamVjdCxcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgZ2V0UHJvamVjdHNcbiAgICB9XG59KSgpO1xuXG5cbmNvbnN0IGRheUZ1bmNzID0gKCgpID0+IHtcbiAgICBjb25zdCBkYXlMZW5ndGggPSAxMDAwKjYwKjYwKjI0O1xuICAgIGNvbnN0IHdlZWtMZW5ndGggPSBkYXlMZW5ndGggKiA3O1xuXG4gICAgY29uc3QgaXNXaXRoaW5XZWVrID0gKG5vdywgZGF5KSA9PiB7XG4gICAgICAgIHJldHVybiAoKGRheSAtIG5vdykgPCB3ZWVrTGVuZ3RoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpc1dpdGhpbldlZWtcbiAgICB9XG59KSgpXG5cblxuXG5leHBvcnQgeyBzdG9yYWdlLCBUb2RvLCBkYXlGdW5jcyB9XG5cblxuXG5cblxuLy8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tIFRFU1RJTkdcblxuXG5cbi8vIHN0b3JhZ2Uuc3RvcmVQcm9qZWN0KCdzdHVmZicpO1xuLy8gc3RvcmFnZS5kZWxldGVQcm9qZWN0KCdzdHVmZicpOyBcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9