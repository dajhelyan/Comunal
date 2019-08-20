import { changeHash } from "../view-controller/firestore.js";


export const registerVisitor = () => {
    const tmplRegisterVisitor = `
    <div>
        <h1>Comunal</h1>
        <input type="text"> <span><button>+</button><button>-</button></span>
        <p>Nombre completo</p> 
        <input type="text">
        <p>DNI o Carnet de Extranjeria</p>
        <input type="text">
        <p>Empresa</p>
        <input type="text">
        <p>Anfitrión(a)</p>
        <select name="" id="purposeOfVisit" placeHolder="seleccionar">
            <option value="">reunión</option>
            <option value="">Entrevista</option>
            <option value="">Amigos y familia</option>
        </select>
        <p>Propósito de visita</p>
        <button>foto</button>
        <button type="button" id="register-visitor">Registrar visita</button>
    </div>
    `;

    const sectionRegister = document.createElement('section');
    sectionRegister.innerHTML = tmplRegisterVisitor;
    const foto = document.querySelector('#foto')
    window.URL = window.URL || window.webkitURL;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    navigator.getUserMedia({video:true}, function(vid){
        document.querySelector('video').src = window.URL.createObjectURL(vid);
    });

    sectionRegister.querySelector('#register-visitor').addEventListener('click', () => {
        return changeHash('#/welcome')
    })

    return sectionRegister;
}