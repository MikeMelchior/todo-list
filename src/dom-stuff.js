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
        menu.classList.add('full-size')
    } else {
        menu.classList.remove('full-size')
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

    element.append(menuButton, h1)
    return element;
}



const content = () => {
    const element = createClassedElement('div', 'content');



    const sideBar = () => {
        const element = createClassedElement('div', 'sidebar')
            const home = () => {
                const element = createClassedElement('div', 'home');

                return element;
            }

            const projects = () => {
                const element = createClassedElement('div', 'projects');

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

    const page = () => {
        const element = createClassedElement('div', 'page');
            const testElement = createClassedElement('div', 'test');

            element.append(testElement);
        return element;
    }

    element.append(sideBar(), page())
    
    return element;
}







try {
    document.querySelector('.main').append(header(), content());
} catch (e){
    console.log(e)
}


document.querySelector('#menu-button').addEventListener('click', () => {
    let sideBar = document.querySelector('.sidebar');
    sideBar.classList.toggle('closed');
    // sideBar.style.display != 'none' ? sideBar.style.display = 'none' : sideBar.style.display = 'grid'
})


let hideMenu = window.matchMedia("(max-width: 400px)")
menuHider(hideMenu)
hideMenu.addEventListener('change', menuHider);

let sizeMenu = window.matchMedia("(max-width: 675px)");
sizeMenu.addEventListener('change', fullscreenMenu)

