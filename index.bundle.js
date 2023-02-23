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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEVBQUU7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSXVCOzs7OztBQUt4Qjs7QUFFQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3RvciAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIG5vdGVzKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlOyBcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB9XG59XG5cblxuXG5jb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgICAgICAgLy8gc2V0dXAgSUQgY291bnRlciAgICBcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJykgPT0gbnVsbCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCAnMCcpO1xuICAgIH1cbiAgICBcbiAgICBcblxuICAgIGNvbnN0IGluY3JlbWVudElEID0gKCkgPT4ge1xuICAgICAgICBsZXQgeCA9IHBhcnNlRmxvYXQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJykpO1xuICAgICAgICB4Kys7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsIGAke3h9YClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJRCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JhZ2VBdmFpbGFibGUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdG9yYWdlID0gbG9jYWxTdG9yYWdlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VG9kb0xpc3QnKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShbaXRlbV0pKTtcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmluY3JlbWVudElEKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VG9kb0xpc3QnKS5zcGxpdCgnLCcpKTtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7IFxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuaW5jcmVtZW50SUQoKTtcbiAgICAgICAgICAgIH1cblxuXG5cblxuXG4gICAgICAgIC8vIGxvZ2ljIHRvIHN0b3JlIGl0ZW0gZnJvbSBodG1sIFxuICAgICAgICAvLyBmb3JtIGdvZXMgc29tZXdoZXJlIGhlcmUgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnbm8gc3RvcmFnZSBhdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgLy8gZm9yIG5vdyBtYW51YWxseSByZW1vdmUgaXRlbSB3IHBhcmFtXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGl0ZW0uaWQpO1xuXG4gICAgICAgIC8vIGxvZ2ljIHRvIHJlbW92ZSBpdGVtIGZyb20gRE9NO1xuICAgICAgICAvLyBnb2VzIGhlcmVcbiAgICB9XG5cbiAgICBjb25zdCBnZXQgPSAoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtKSlcbiAgICB9XG5cblxuICAgICAgICAvLyBjaGVjayBpZiBpdGVtIGluIHN0b3JhZ2U7XG4gICAgY29uc3QgaXRlbUluU3RvcmFnZSA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IHRvZG8udGl0bGUpIHsgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZvdW5kIGl0ZW0nKTsgcmV0dXJuIHRydWUgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGl0ZW0gZG9lc25cXCd0IGV4aXN0Jyk7IHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdExpc3QnKSA9PSBudWxsICkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215UHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShbcHJvamVjdF0pKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcpLnNwbGl0KCcsJykpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVByb2plY3RMaXN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCBsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcpLnNwbGl0KCcsJykpO1xuICAgICAgICBpZiAobGlzdC5pbmRleE9mKHByb2plY3QpICE9PSAtMSkge1xuICAgICAgICAgICAgbGlzdC5zcGxpY2UobGlzdC5pbmRleE9mKHByb2plY3QpLCAxKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkobGlzdCkpXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLy8gbGV0IGxpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcpLnNwbGl0KCcsJyk7XG4gICAgICAgIC8vIGlmIChsaXN0LmluZGV4T2YocHJvamVjdCkgIT09IC0xKSB7XG4gICAgICAgIC8vICAgICBsaXN0LnNwbGljZShsaXN0LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215UHJvamVjdExpc3QnLCBsaXN0KTtcbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluY3JlbWVudElELFxuICAgICAgICBnZXRJRCxcbiAgICAgICAgc3RvcmFnZUF2YWlsYWJsZSxcbiAgICAgICAgc3RvcmVJdGVtLFxuICAgICAgICBnZXQsXG4gICAgICAgIHJlbW92ZUl0ZW0sXG4gICAgICAgIGl0ZW1JblN0b3JhZ2UsXG4gICAgICAgIHN0b3JlUHJvamVjdCxcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgZ2V0UHJvamVjdHNcbiAgICB9XG59KSgpO1xuXG5cbmNvbnN0IGRheUZ1bmNzID0gKCgpID0+IHtcbiAgICBjb25zdCBkYXlMZW5ndGggPSAxMDAwKjYwKjYwKjI0O1xuICAgIGNvbnN0IHdlZWtMZW5ndGggPSBkYXlMZW5ndGggKiA3O1xuXG4gICAgY29uc3Qgbm93ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNXaXRoaW5EYXkgPSAobm93LCBkYXkpID0+IHtcbiAgICAgICAgcmV0dXJuICgoZGF5IC0gbm93KSA8IGRheUxlbmd0aCk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNXaXRoaW5XZWVrID0gKG5vdywgZGF5KSA9PiB7XG4gICAgICAgIHJldHVybiAoKGRheSAtIG5vdykgPCB3ZWVrTGVuZ3RoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBub3csXG4gICAgICAgIGlzV2l0aGluRGF5LFxuICAgICAgICBpc1dpdGhpbldlZWtcbiAgICB9XG59KSgpXG5cblxuXG5leHBvcnQgeyBzdG9yYWdlLCBUb2RvIH1cblxuXG5cblxuLy8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tIFRFU1RJTkdcblxuLy8gc3RvcmFnZS5zdG9yZUl0ZW0obmV3IFRvZG8oc3RvcmFnZS5nZXRJRCgpLCAndG9kYXknLCAndGhpbmdzIHRvIGRvIHRvZGF5JywnYXByaWwgMTAnLCAnbG93JykpO1xuLy8gc3RvcmFnZS5zdG9yZUl0ZW0obmV3IFRvZG8oc3RvcmFnZS5nZXRJRCgpLCAndG9tb3Jyb3cnLCAnZG8gc3R1ZmYnLCAndG9tb3Jyb3cnLCAnbWVkaXVtJykpO1xuXG5cblxuXG5cbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgIGRpc3BsYXlDb250cm9sbGVyLnNlbGVjdEluYm94KCk7XG4vLyB9LCAxMCk7XG5cblxuLy8gbGV0IHggPSBuZXcgRGF0ZSgnRmViIDI4IDIwMjMgMTQ6MDE6MDAnKS5nZXRUaW1lKCk7XG4vLyBjb25zb2xlLmxvZyhkYXlGdW5jcy5ub3coKSlcbi8vIGNvbnNvbGUubG9nKGRheUZ1bmNzLmlzV2l0aGluV2VlayhkYXlGdW5jcy5ub3coKSwgeCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==