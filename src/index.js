

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
            localStorage.setItem('myProjectList', JSON.stringify([project]));
            return;
        } else {
            let list = JSON.parse(localStorage.getItem('myProjectList').split(','));
            
            list.push(project);
            localStorage.setItem('myProjectList', JSON.stringify(list)); 
        }
        // if (localStorage.getItem('myProjectList') == null ) {
        //     localStorage.setItem('myProjectList', project);
        //     return;
        // } else {
        //     let list = localStorage.getItem('myProjectList').split(',')
        //     list.push(project);
        //     localStorage.setItem('myProjectList', list);
        // }
    }

    const getProjects = () => {
        return localStorage.getItem('myProjectList');
    }

    const deleteProject = (project) => {
        let list = localStorage.getItem('myProjectList').split(',');
        if (list.indexOf(project) !== -1) {
            list.splice(list.indexOf(project), 1);
            localStorage.setItem('myProjectList', list);
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


// storage.deleteProject('New Project 2');






export { storage, displayController, Todo }




/////------------------- TESTING

    // test todo
// const today = new Todo(getID(), 'today', 'things to do today','april 10', 'low');
// const tomorrow = new Todo(getID(), 'tomorrow', 'do stuff', 'tomorrow', 'medium');

// storage.storeItem(new Todo(storage.getID(), 'today', 'things to do today','april 10', 'low'));

// storage.storeItem(new Todo(storage.getID(), 'tomorrow', 'do stuff', 'tomorrow', 'medium'));


// console.log(localStorage)
// console.log(storage.get(0).title)

// console.log(storage.getProjects()); 