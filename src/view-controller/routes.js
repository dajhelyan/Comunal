import { components } from '../view/components.js';
import { getHost, getVisit} from '../controller/controller-firebase.js'

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
                getHost(dataHost => {
                    console.log(dataHost)
                    root.innerHTML = ''; 
            return root.appendChild(components.registerVisitor(dataHost));
        })  
        case '#/user':
            return root.appendChild(components.user());
        case '#/welcome':
            return root.appendChild(components.welcome());
        case '#/camera':
            return root.appendChild(components.camera());
        case '#/administrador':
            return root.appendChild(components.administrador());
        case '#/dashboard':
            return root.appendChild(components.dashboard()); 
        case '#/email':
                getVisit(visit => {
                root.innerHTML = '';  
            return root.appendChild(components.email(visit));    
                }) 
            
                        
        default:
            break;
    }
}

export const initRouter = () => {
    changeView(window.location.hash)
    window.addEventListener('hashchange', () => { changeView(window.location.hash) })
}
