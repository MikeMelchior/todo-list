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


