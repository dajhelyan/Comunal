import { changeHash } from "../view-controller/firestore.js";
import { sendToUsers } from "../controller/functions.js";

export const registerVisitor = () => {
    const tmplRegisterVisitor = `
    <div>
        <h1>Comunal</h1>
        <input type="text" id="dni" placeholder ='DNI o Carnet de Extranjeria'>
        <p>DNI o Carnet de Extranjeria</p>
        <input type="text" id="nombre" placeholder ='Nombre Completo' > <span><button>+</button><button>-</button></span>
        <p>Nombre completo</p> 
        <input type='email' id='email' placeholder ='Email'>
        <p>Correo electrónico</p>
        <input type="text" id="empresa" placeholder ='Empresa'>
        <p>Empresa</p>
        <input type="text" id="host" placeholder ='Anfitrión(a)'>
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
    `













    const sectionRegister = document.createElement('section');
    sectionRegister.innerHTML = tmplRegisterVisitor;

    const dni = sectionRegister.querySelector('#dni');
    const nombre = sectionRegister.querySelector('#nombre');
    const email = sectionRegister.querySelector('#email');
    const empresa = sectionRegister.querySelector('#empresa'); 
    const host = sectionRegister.querySelector('#host')
    //const proposito = sectionRegister.querySelector('#purposeOfVisit')

    
     
    sectionRegister.querySelector('#register-visitor').addEventListener('click', () => {
        sendToUsers(nombre.value, dni.value, email.value, empresa.value, host.value )
        
        return changeHash('#/welcome')
    })

    return sectionRegister;
}