(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

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

const logStorage = () => {
    console.log(localStorage)
}

class Todo {
    constructor (title, description, dueDate, priority, project, notes, checklist) {
        this.title = title; 
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.notes = notes;
        this.checklist = checklist;
    }
}

    // test todo
const today = new Todo('today', 'things to do today','april 10', 'low');


const storeItem = (item) => {
    if (storageAvailable) {
       // for now manually store item w param
    localStorage.setItem(item.title, JSON.stringify(item))

    // logic to store item from html 
    // form goes somewhere here 
    }
    
};

const removeItem = (item) => {
    // for now manually remove item w param
    localStorage.removeItem(item.title);

    // logic to remove item from DOM;
    // goes here
}

    // check if item in storage;
const itemInStorage = (storage, todo) => {
    for (let item of Object.keys(storage)) {
        if (item === todo.title) { 
            console.log('found item'); return true }
    }
    console.log('this item doesn\'t exist'); return false;
}

removeItem(today)
logStorage()





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0b3JhZ2VBdmFpbGFibGUgPSAoKSA9PiB7XG4gICAgbGV0IHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2VcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBlICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59XG5cbmNvbnN0IGxvZ1N0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKVxufVxuXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgbm90ZXMsIGNoZWNrbGlzdCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7IFxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbiAgICB9XG59XG5cbiAgICAvLyB0ZXN0IHRvZG9cbmNvbnN0IHRvZGF5ID0gbmV3IFRvZG8oJ3RvZGF5JywgJ3RoaW5ncyB0byBkbyB0b2RheScsJ2FwcmlsIDEwJywgJ2xvdycpO1xuXG5cbmNvbnN0IHN0b3JlSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICAgICAvLyBmb3Igbm93IG1hbnVhbGx5IHN0b3JlIGl0ZW0gdyBwYXJhbVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGl0ZW0udGl0bGUsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxuXG4gICAgLy8gbG9naWMgdG8gc3RvcmUgaXRlbSBmcm9tIGh0bWwgXG4gICAgLy8gZm9ybSBnb2VzIHNvbWV3aGVyZSBoZXJlIFxuICAgIH1cbiAgICBcbn07XG5cbmNvbnN0IHJlbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIC8vIGZvciBub3cgbWFudWFsbHkgcmVtb3ZlIGl0ZW0gdyBwYXJhbVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGl0ZW0udGl0bGUpO1xuXG4gICAgLy8gbG9naWMgdG8gcmVtb3ZlIGl0ZW0gZnJvbSBET007XG4gICAgLy8gZ29lcyBoZXJlXG59XG5cbiAgICAvLyBjaGVjayBpZiBpdGVtIGluIHN0b3JhZ2U7XG5jb25zdCBpdGVtSW5TdG9yYWdlID0gKHN0b3JhZ2UsIHRvZG8pID0+IHtcbiAgICBmb3IgKGxldCBpdGVtIG9mIE9iamVjdC5rZXlzKHN0b3JhZ2UpKSB7XG4gICAgICAgIGlmIChpdGVtID09PSB0b2RvLnRpdGxlKSB7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZvdW5kIGl0ZW0nKTsgcmV0dXJuIHRydWUgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygndGhpcyBpdGVtIGRvZXNuXFwndCBleGlzdCcpOyByZXR1cm4gZmFsc2U7XG59XG5cbnJlbW92ZUl0ZW0odG9kYXkpXG5sb2dTdG9yYWdlKClcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==