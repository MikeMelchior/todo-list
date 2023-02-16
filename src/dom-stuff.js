import './styles.css';
import Icon from './menu.svg';

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
            menuButton.src = Icon;
            menuButton.id = 'menu-button';
        const h1 = createClassedElement('h1')
            h1.textContent = 'TO DO LIST'

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
    sideBar.style.display != 'none' ? sideBar.style.display = 'none' : sideBar.style.display = 'grid'
})