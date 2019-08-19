import { components } from '../view/components.js';

const changeView = (route) => {
    const root = document.getElementById("root");
    root.innerHTML = "";
    switch (route) {
        case '':
        case '#':
        case '#/':
        case '#/home':
            return root.appendChild(components.home());
       
        default:
            break;
    }
}

export const initRouter = () => {
    changeView(window.location.hash)
    window.addEventListener('hashchange', () => { changeView(window.location.hash) })

}
