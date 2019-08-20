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
        case '#/register':
            return root.appendChild(components.registerVisitor());
        case '#/user':
            return root.appendChild(components.user());
        case '#/welcome':
            return root.appendChild(components.welcome());
        default:
            break;
    }
}

export const initRouter = () => {
    changeView(window.location.hash)
    window.addEventListener('hashchange', () => { changeView(window.location.hash) })

}
