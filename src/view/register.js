//import { changeHash } from "../view-controller/firestore.js";

export const registerVisitor = () => {
    const sectionRegister = document.createElement('section');
    const tmplRegisterVisitor = `
    <div>
        <h1>Comunal</h1>
        <input type="text"> <span><button>+</button><button>-</button></span>
        <p>Nombre completo</p> 
        <input type="text">
        <p>DNI o Carnet de Extranjeria</p>
        <input type="text">
        <p>Empresa</p>
        <form>
        <input type="search" name="busquedamodelos" list="listamodelos">
        <datalist id="listamodelos">
             <option value="Elvia Vega">
             <option value="Day">
             <option value="Nadia Gabriela">
             <option value="Andrea Ux">
             <option value="Alejandra">
             <option value="Susana">
        </datalist>
        <p>Anfitrión(a)</p>
       </form>

       <form>
        <input type="search" name="busquedamodelos" list="proposito">
        <datalist id="proposito">
             <option value="Reunión">
             <option value="Entrevista">
             <option value="Amigos y familia">
             <option value="Otros">
        </datalist>
        <p> Próposito de visita </p>
       </form>
        <a href="#/camera"> Cam </a>
        <button type="button" id="register-visitor">Registrar visita</button>
    </div>
    `;

    sectionRegister.innerHTML = tmplRegisterVisitor;

    return sectionRegister;
}