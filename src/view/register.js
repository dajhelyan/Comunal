import { changeHash } from "../view-controller/firestore.js";
import { sendToUsers } from "../controller/functions.js";

export const registerVisitor = () => {
<<<<<<< HEAD
    
=======
>>>>>>> e28707114e08accf53690ce7599dd3d20134c5ee
    const tmplRegisterVisitor = `
    <div> 
    <div class="cam"> <a href="#/camera"> <img src="image/right-arrow.png"> </a> </div>
    <h1>Comunal</h1> 
    <input type="text" id="dni" placeholder ='DNI o Carnet de Extranjeria'>
    <p>DNI o Carnet de Extranjeria</p>
    <input type="text" id="nombre" placeholder ='Nombre Completo' > <span><button>+</button><button>-</button></span>
    <p>Nombre completo</p> 
        <input type='email' id='email' placeholder ='Email'>
        <p>Correo electrónico</p>
        <input type="text" id="empresa" placeholder ='Empresa'>
        <p>Empresa</p>
        
        <form>
        <input type="search" name="busquedamodelos" list="listamodelos" id="host">
        <datalist id="listamodelos">
        <option value="Elvia Vega">
             <option value="Day">
             <option value="Nadia Gabriela">
             <option value="Andrea Ux">
             <option value="Alejandra">
             <option value="Susana">
        </datalist>
        <p>Anfitrión(a)</p>
<<<<<<< HEAD
       </form>
       
       <form>
        <input type="search" name="busquedamodelos" list="proposito" id="purposeOfVisit">
=======
        </form>
       <form>
       <input type="search" name="busquedamodelos" list="proposito" id="propoVisit">
>>>>>>> e28707114e08accf53690ce7599dd3d20134c5ee
        <datalist id="proposito">
        <option value="Reunión">
        <option value="Entrevista">
        <option value="Amigos y familia">
             <option value="Otros">
             </datalist>
        <p> Próposito de visita </p>
        </form>
        <button type="button" id="register-visitor">Registrar visita</button>
<<<<<<< HEAD
    </div>
    `;

    const sectionRegister = document.createElement('section');
    sectionRegister.innerHTML = tmplRegisterVisitor;

    const dni = sectionRegister.querySelector('#dni');
    const nombre = sectionRegister.querySelector('#nombre');
    const email = sectionRegister.querySelector('#email');
    const empresa = sectionRegister.querySelector('#empresa'); 
    const host = sectionRegister.querySelector('#host')
    const proposito = sectionRegister.querySelector('#purposeOfVisit')

    
     
    sectionRegister.querySelector('#register-visitor').addEventListener('click', () => {
        sendToUsers(nombre.value, dni.value, email.value, empresa.value, host.value, proposito.value )
        
=======
        </div>
        `;
        const sectionRegister = document.createElement('section');
        sectionRegister.innerHTML = tmplRegisterVisitor;
        
        const dni = sectionRegister.querySelector('#dni');
        const nombre = sectionRegister.querySelector('#nombre');
        const email = sectionRegister.querySelector('#email');
        const empresa = sectionRegister.querySelector('#empresa'); 
        //const host = sectionRegister.querySelector('#hostlist')
        //const proposito = sectionRegister.querySelector('#propoVisit')
     
        sectionRegister.querySelector('#register-visitor').addEventListener('click', () => {
            sendToUsers(nombre.value, dni.value, email.value, empresa.value)

>>>>>>> e28707114e08accf53690ce7599dd3d20134c5ee
        return changeHash('#/welcome')
    })
    return sectionRegister;
}