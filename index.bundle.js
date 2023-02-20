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
/* harmony export */   "displayController": () => (/* binding */ displayController),
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




const displayController = (() => {

    const fullInbox = () => {
        for (let key of Object.keys(localStorage)) {
            if (key != 'id') {
                console.log(JSON.parse(localStorage[key]))
            }
        }

    }
    
    const updateInbox = (param) => {


        return inbox;
    }

    return {
        fullInbox
    }
})()



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
        // for now manually store item w param
        localStorage.setItem(item.id, JSON.stringify(item))
        storage.incrementID();
        // logic to store item from html 
        // form goes somewhere here 
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
            localStorage.setItem('myProjectList', project);
            return;
        } else {
            let list = localStorage.getItem('myProjectList').split(',')
            list.push(project);
            localStorage.setItem('myProjectList', list);
        }
    }

    const getProjects = () => {
        return localStorage.getItem('myProjectList');
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
        getProjects
    }
})();














/////------------------- TESTING

    // test todo
// const today = new Todo(getID(), 'today', 'things to do today','april 10', 'low');
// const tomorrow = new Todo(getID(), 'tomorrow', 'do stuff', 'tomorrow', 'medium');

// storage.storeItem(new Todo(storage.getID(), 'today', 'things to do today','april 10', 'low'));

// storage.storeItem(new Todo(storage.getID(), 'tomorrow', 'do stuff', 'tomorrow', 'medium'));


// console.log(localStorage)
// console.log(storage.get(0).title)

// console.log(storage.getProjects()); 

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxFQUFFO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBLGlEQUFpRDtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7OztBQVUwQzs7Ozs7QUFLM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3RvciAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIG5vdGVzLCBjaGVja2xpc3QpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7IFxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbiAgICB9XG59XG5cblxuXG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGZ1bGxJbmJveCA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIGlmIChrZXkgIT0gJ2lkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2tleV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXBkYXRlSW5ib3ggPSAocGFyYW0pID0+IHtcblxuXG4gICAgICAgIHJldHVybiBpbmJveDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmdWxsSW5ib3hcbiAgICB9XG59KSgpXG5cblxuXG5jb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgICAgICAgLy8gc2V0dXAgSUQgY291bnRlciAgICBcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJykgPT0gbnVsbCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCAnMCcpO1xuICAgIH1cbiAgICBcbiAgICBcblxuICAgIGNvbnN0IGluY3JlbWVudElEID0gKCkgPT4ge1xuICAgICAgICBsZXQgeCA9IHBhcnNlRmxvYXQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJykpO1xuICAgICAgICB4Kys7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsIGAke3h9YClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJRCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JhZ2VBdmFpbGFibGUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdG9yYWdlID0gbG9jYWxTdG9yYWdlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICAgICAgLy8gZm9yIG5vdyBtYW51YWxseSBzdG9yZSBpdGVtIHcgcGFyYW1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbS5pZCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG4gICAgICAgIHN0b3JhZ2UuaW5jcmVtZW50SUQoKTtcbiAgICAgICAgLy8gbG9naWMgdG8gc3RvcmUgaXRlbSBmcm9tIGh0bWwgXG4gICAgICAgIC8vIGZvcm0gZ29lcyBzb21ld2hlcmUgaGVyZSBcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgLy8gZm9yIG5vdyBtYW51YWxseSByZW1vdmUgaXRlbSB3IHBhcmFtXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGl0ZW0uaWQpO1xuXG4gICAgICAgIC8vIGxvZ2ljIHRvIHJlbW92ZSBpdGVtIGZyb20gRE9NO1xuICAgICAgICAvLyBnb2VzIGhlcmVcbiAgICB9XG5cbiAgICBjb25zdCBnZXQgPSAoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtKSlcbiAgICB9XG5cblxuICAgICAgICAvLyBjaGVjayBpZiBpdGVtIGluIHN0b3JhZ2U7XG4gICAgY29uc3QgaXRlbUluU3RvcmFnZSA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IHRvZG8udGl0bGUpIHsgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZvdW5kIGl0ZW0nKTsgcmV0dXJuIHRydWUgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGl0ZW0gZG9lc25cXCd0IGV4aXN0Jyk7IHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdExpc3QnKSA9PSBudWxsICkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215UHJvamVjdExpc3QnLCBwcm9qZWN0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdExpc3QnKS5zcGxpdCgnLCcpXG4gICAgICAgICAgICBsaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcsIGxpc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlQcm9qZWN0TGlzdCcpO1xuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5jcmVtZW50SUQsXG4gICAgICAgIGdldElELFxuICAgICAgICBzdG9yYWdlQXZhaWxhYmxlLFxuICAgICAgICBzdG9yZUl0ZW0sXG4gICAgICAgIGdldCxcbiAgICAgICAgcmVtb3ZlSXRlbSxcbiAgICAgICAgaXRlbUluU3RvcmFnZSxcbiAgICAgICAgc3RvcmVQcm9qZWN0LFxuICAgICAgICBnZXRQcm9qZWN0c1xuICAgIH1cbn0pKCk7XG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQgeyBzdG9yYWdlLCBkaXNwbGF5Q29udHJvbGxlciwgVG9kbyB9XG5cblxuXG5cbi8vLy8vLS0tLS0tLS0tLS0tLS0tLS0tLSBURVNUSU5HXG5cbiAgICAvLyB0ZXN0IHRvZG9cbi8vIGNvbnN0IHRvZGF5ID0gbmV3IFRvZG8oZ2V0SUQoKSwgJ3RvZGF5JywgJ3RoaW5ncyB0byBkbyB0b2RheScsJ2FwcmlsIDEwJywgJ2xvdycpO1xuLy8gY29uc3QgdG9tb3Jyb3cgPSBuZXcgVG9kbyhnZXRJRCgpLCAndG9tb3Jyb3cnLCAnZG8gc3R1ZmYnLCAndG9tb3Jyb3cnLCAnbWVkaXVtJyk7XG5cbi8vIHN0b3JhZ2Uuc3RvcmVJdGVtKG5ldyBUb2RvKHN0b3JhZ2UuZ2V0SUQoKSwgJ3RvZGF5JywgJ3RoaW5ncyB0byBkbyB0b2RheScsJ2FwcmlsIDEwJywgJ2xvdycpKTtcblxuLy8gc3RvcmFnZS5zdG9yZUl0ZW0obmV3IFRvZG8oc3RvcmFnZS5nZXRJRCgpLCAndG9tb3Jyb3cnLCAnZG8gc3R1ZmYnLCAndG9tb3Jyb3cnLCAnbWVkaXVtJykpO1xuXG5cbi8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcbi8vIGNvbnNvbGUubG9nKHN0b3JhZ2UuZ2V0KDApLnRpdGxlKVxuXG4vLyBjb25zb2xlLmxvZyhzdG9yYWdlLmdldFByb2plY3RzKCkpOyAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=