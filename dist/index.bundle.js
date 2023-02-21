"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

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
    constructor (id, title, description, dueDate, priority, project, notes, checklist) {
        this.id = id;
        this.title = title; 
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.notes = notes;
        this.checklist = checklist;
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJdUI7Ozs7O0FBS3hCOztBQUVBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yIChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgbm90ZXMsIGNoZWNrbGlzdCkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTsgXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tsaXN0O1xuICAgIH1cbn1cblxuXG5cbmNvbnN0IHN0b3JhZ2UgPSAoKCkgPT4ge1xuICAgICAgICAvLyBzZXR1cCBJRCBjb3VudGVyICAgIFxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKSA9PSBudWxsKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsICcwJyk7XG4gICAgfVxuICAgIFxuICAgIFxuXG4gICAgY29uc3QgaW5jcmVtZW50SUQgPSAoKSA9PiB7XG4gICAgICAgIGxldCB4ID0gcGFyc2VGbG9hdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKSk7XG4gICAgICAgIHgrKztcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgYCR7eH1gKVxuICAgIH1cblxuICAgIGNvbnN0IGdldElEID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmFnZUF2YWlsYWJsZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUb2RvTGlzdCcpID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUb2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KFtpdGVtXSkpO1xuICAgICAgICAgICAgICAgIHN0b3JhZ2UuaW5jcmVtZW50SUQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUb2RvTGlzdCcpLnNwbGl0KCcsJykpO1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUb2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTsgXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5pbmNyZW1lbnRJRCgpO1xuICAgICAgICAgICAgfVxuXG5cblxuXG5cbiAgICAgICAgLy8gbG9naWMgdG8gc3RvcmUgaXRlbSBmcm9tIGh0bWwgXG4gICAgICAgIC8vIGZvcm0gZ29lcyBzb21ld2hlcmUgaGVyZSBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KCdubyBzdG9yYWdlIGF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICAvLyBmb3Igbm93IG1hbnVhbGx5IHJlbW92ZSBpdGVtIHcgcGFyYW1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaXRlbS5pZCk7XG5cbiAgICAgICAgLy8gbG9naWMgdG8gcmVtb3ZlIGl0ZW0gZnJvbSBET007XG4gICAgICAgIC8vIGdvZXMgaGVyZVxuICAgIH1cblxuICAgIGNvbnN0IGdldCA9IChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW0pKVxuICAgIH1cblxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGl0ZW0gaW4gc3RvcmFnZTtcbiAgICBjb25zdCBpdGVtSW5TdG9yYWdlID0gKHRvZG8pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpKSB7XG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gdG9kby50aXRsZSkgeyBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZm91bmQgaXRlbScpOyByZXR1cm4gdHJ1ZSB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXRlbSBkb2VzblxcJ3QgZXhpc3QnKTsgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcpID09IG51bGwgKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KFtwcm9qZWN0XSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVByb2plY3RMaXN0Jykuc3BsaXQoJywnKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxpc3QucHVzaChwcm9qZWN0KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkobGlzdCkpOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdExpc3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IGxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVByb2plY3RMaXN0Jykuc3BsaXQoJywnKSk7XG4gICAgICAgIGlmIChsaXN0LmluZGV4T2YocHJvamVjdCkgIT09IC0xKSB7XG4gICAgICAgICAgICBsaXN0LnNwbGljZShsaXN0LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215UHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShsaXN0KSlcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvLyBsZXQgbGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVByb2plY3RMaXN0Jykuc3BsaXQoJywnKTtcbiAgICAgICAgLy8gaWYgKGxpc3QuaW5kZXhPZihwcm9qZWN0KSAhPT0gLTEpIHtcbiAgICAgICAgLy8gICAgIGxpc3Quc3BsaWNlKGxpc3QuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcsIGxpc3QpO1xuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5jcmVtZW50SUQsXG4gICAgICAgIGdldElELFxuICAgICAgICBzdG9yYWdlQXZhaWxhYmxlLFxuICAgICAgICBzdG9yZUl0ZW0sXG4gICAgICAgIGdldCxcbiAgICAgICAgcmVtb3ZlSXRlbSxcbiAgICAgICAgaXRlbUluU3RvcmFnZSxcbiAgICAgICAgc3RvcmVQcm9qZWN0LFxuICAgICAgICBkZWxldGVQcm9qZWN0LFxuICAgICAgICBnZXRQcm9qZWN0c1xuICAgIH1cbn0pKCk7XG5cblxuY29uc3QgZGF5RnVuY3MgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRheUxlbmd0aCA9IDEwMDAqNjAqNjAqMjQ7XG4gICAgY29uc3Qgd2Vla0xlbmd0aCA9IGRheUxlbmd0aCAqIDc7XG5cbiAgICBjb25zdCBub3cgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc1dpdGhpbkRheSA9IChub3csIGRheSkgPT4ge1xuICAgICAgICByZXR1cm4gKChkYXkgLSBub3cpIDwgZGF5TGVuZ3RoKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc1dpdGhpbldlZWsgPSAobm93LCBkYXkpID0+IHtcbiAgICAgICAgcmV0dXJuICgoZGF5IC0gbm93KSA8IHdlZWtMZW5ndGgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG5vdyxcbiAgICAgICAgaXNXaXRoaW5EYXksXG4gICAgICAgIGlzV2l0aGluV2Vla1xuICAgIH1cbn0pKClcblxuXG5cbmV4cG9ydCB7IHN0b3JhZ2UsIFRvZG8gfVxuXG5cblxuXG4vLy8vLy0tLS0tLS0tLS0tLS0tLS0tLS0gVEVTVElOR1xuXG4vLyBzdG9yYWdlLnN0b3JlSXRlbShuZXcgVG9kbyhzdG9yYWdlLmdldElEKCksICd0b2RheScsICd0aGluZ3MgdG8gZG8gdG9kYXknLCdhcHJpbCAxMCcsICdsb3cnKSk7XG4vLyBzdG9yYWdlLnN0b3JlSXRlbShuZXcgVG9kbyhzdG9yYWdlLmdldElEKCksICd0b21vcnJvdycsICdkbyBzdHVmZicsICd0b21vcnJvdycsICdtZWRpdW0nKSk7XG5cblxuXG5cblxuLy8gc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgZGlzcGxheUNvbnRyb2xsZXIuc2VsZWN0SW5ib3goKTtcbi8vIH0sIDEwKTtcblxuXG4vLyBsZXQgeCA9IG5ldyBEYXRlKCdGZWIgMjggMjAyMyAxNDowMTowMCcpLmdldFRpbWUoKTtcbi8vIGNvbnNvbGUubG9nKGRheUZ1bmNzLm5vdygpKVxuLy8gY29uc29sZS5sb2coZGF5RnVuY3MuaXNXaXRoaW5XZWVrKGRheUZ1bmNzLm5vdygpLCB4KSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9