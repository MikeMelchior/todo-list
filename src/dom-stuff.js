import './styles.css';
import menuIcon from './menu.svg';
import * as index from './index.js';
import catIcon from './sleepy.png';
import plusIcon from './plus.png';
import binIcon from './bin.png';
import dotMenuIcon from './dot-menu.png';



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
            menuButton.src = menuIcon;
            menuButton.id = 'menu-button';
        const addTaskButton = createClassedElement('div', 'add-task-button');
            addTaskButton.textContent = 'ADD TASK'
            const plus = new Image();
            plus.src = plusIcon;
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
                            plus.src = plusIcon;
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
            x.src = plusIcon;
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
                img.src = catIcon;
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
            bin.src = binIcon;
            bin.id = 'bin';
            bin.addEventListener('click', (e) => {
                    // target hidden ID of todo;
                let x = e.target.parentElement.lastChild.textContent
                removeTodo(x);
                e.target.parentNode.remove();
            })

        const options = new Image();
            options.src = dotMenuIcon;
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
                if (index.dayFuncs.isWithinDay(index.dayFuncs.today(), todo.dueDate.split('-')[2])) {
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
                if (index.dayFuncs.isWithinWeek(index.dayFuncs.now(), new Date(todo.dueDate).getTime())) {
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
        index.storage.storeProject(projectName);
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

    let todo = new index.Todo(localStorage.id, title.value, description.value, date.value, priority.value, currentProject);
    console.log(todo);
        // store todo in local storage
    index.storage.storeItem(todo);

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
    if (index.storage.getProjects() !== null) {
        JSON.parse(index.storage.getProjects()).forEach(project => {
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




