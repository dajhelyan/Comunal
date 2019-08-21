//import {coleccionHost} from ''
import { changeHash } from "../view-controller/firestore.js";

export const welcomeUser = () => {
    const sectionWelcome = document.createElement('section');
    const tmpl = `
    <div>
        <h1>¡Bienevedx a Comunal</h1>
        <div>
            <h3>Practicas de Higiene Personal</h3>
            <p>etdxt</p>
        </div>
        <button id="aceptar"> Aceptar </button>
           
    `;
   

    sectionWelcome.innerHTML = tmpl;
    const aceptar = sectionWelcome.querySelector('#aceptar')
    aceptar.addEventListener('click', () => {
        return changeHash('#/email')
    })

    return sectionWelcome;
}

//<a href="mailto:daniela.gonzales@laboratoria.la?body=Este%20es%20el%20cuerpo%20del%20mensaje"> Enviar correo </a>    </div> 