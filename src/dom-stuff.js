import './styles.css';
import Icon from './menu.svg';

const createClassedElement = (element, className) => {
    let component = document.createElement(element);
    if (className) component.classList.add(className);
    return component;
}

const menuHider = (x) => {
    let menu = document.querySelector('div.sidebar')
    if (x.matches) {
        menu.classList.add('closed');
    } else {
        menu.classList.remove('closed');
    }
}

const fullscreenMenu = (x) => {
    let menu = document.querySelector('div.sidebar');
    if(x.matches) {
        menu.classList.add('full-screen')
    } else {
        menu.classList.remove('full-screen')
    }
}

const mainDiv = createClassedElement('div', 'main');

document.body.appendChild(mainDiv);

const header = () => {
    const element = createClassedElement('header');
        const menuButton = new Image();
            menuButton.src = Icon;
            menuButton.id = 'menu-button';
        const h1 = createClassedElement('h1')
        h1.textContent = 'current '
            // add text content for selected project/inbox

    element.append(menuButton, h1)
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
                    const inbox = createClassedElement('p');
                        inbox.textContent = "INBOX";
                    const today = createClassedElement('p');
                        today.textContent = "TODAY";
                    const thisWeek = createClassedElement('p');
                        thisWeek.textContent = "THIS WEEK";
                    const important = createClassedElement('p');
                        important.textContent = "IMPORTANT";

                    element.append(h2, inbox, today, thisWeek, important)

                return element;
            }

            const projects = () => {
                const element = createClassedElement('div', 'projects');
                    const h2 = createClassedElement('h2');
                        h2.textContent = "PROJECTS";
                    const form = createClassedElement('form', 'project-form');
                        const nameLabel = createClassedElement('label');
                            nameLabel.HTMLfor = 'new-project-name';
                            nameLabel.innerHTML = 'Project Name:'
                        const nameInput = createClassedElement('input');
                            nameInput.id = 'new-project-name';
                            nameInput.type = 'text';
                            nameInput.max = 20;
                            nameInput.required = true;

                        form.append(nameLabel, nameInput)
                    const p = createClassedElement('p', 'new-project');
                        p.textContent = 'ADD NEW PROJECT '
                    const p1 = createClassedElement('p', 'project');
                        p1.textContent = 'FAKE PROJECT 1'
                // "PROJECTS" title

                    // add new project +
                    element.append(h2, p, form, p1)
                return element;
            }

            const footer = () => {
                const element = createClassedElement('footer', 'footer');
                    const para = createClassedElement('a');
                        para.innerHTML = 'github.com/rubberteeth'
                        para.href = 'https://github.com/rubberteeth'
                        para.target = '_blank'
                    element.appendChild(para)
                return element
            }

            element.append(home(), projects(), footer());
        return element;
    }

    const content = () => {
        const element = createClassedElement('div', 'content');
            const testElement = createClassedElement('div', 'test');

            element.append(testElement);
        return element;
    }

    element.append(sideBar(), content())
    
    return element;
}



try {
    document.querySelector('.main').append(header(), page());
} catch (e){
    console.log(e)
}


document.querySelector('#menu-button').addEventListener('click', () => {
    let sideBar = document.querySelector('.sidebar');
    sideBar.classList.toggle('closed');
})

document.querySelector('.new-project').addEventListener('click', () => {
    document.querySelector('.project-form').classList.toggle('hidden')
})

/////
/////
///// SIDEBAR MEDIA QUERY LISTENERS;
/////
/////
let hideMenu = window.matchMedia("(max-width: 400px)");
menuHider(hideMenu);
hideMenu.addEventListener('change', menuHider);

let sizeMenu = window.matchMedia("(max-width: 675px)");
sizeMenu.addEventListener('change', fullscreenMenu);
/////
/////
/////
/////
/////



