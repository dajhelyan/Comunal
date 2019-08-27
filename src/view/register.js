import { changeHash } from "../view-controller/firestore.js";
import { sendToUsers, sendToVisit } from "../controller/functions.js";

export const registerVisitor = () => {
    //console.log(dataHost)
    const tmplRegisterVisitor = `
    <div> 
    <nav class="">
    <div class="nav-wrapper navbar">
        <a href="#/home" class="brand-logo center">
            <img src="../assets/ComunalLogo.png" class="logo-nav">
        </a>
    </div>
  </nav>
    <i class="arrow-cam"> <a href="#/camera"><i class="fas fa-arrow-right"></i></a></i>
    <i class="arrow-home"><a href="#/home"><i class="fas fa-arrow-left"></i></a></i>
    <div class="form-register">
        <div class="form">
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
                        <option value="Carlos Montesinos">
                        <option value="Margarita Flores">
                        <option value="Alex Rosales">
                        <option value="Alejandra Montenegro">
                        <option value="Susana Vegas">
                    </datalist>
                    <p>Anfitrión(a)</p>
                </form>
            <form>
                <input type="search" name="busquedamodelos" list="proposito" id="purposeOfVisit">
                <datalist id="proposito">
                    <option value="Reunión">
                    <option value="Entrevista">
                    <option value="Amigos y familia">
                    <option value="Otros">
                </datalist>
                <p> Próposito de visita </p>
            </form>
                <button type="button" class="btn-register" id="register-visitor">Registrar visita</button>
        </div>        
     </div>
</div>
        `;

        const sectionRegister = document.createElement('section');
        sectionRegister.innerHTML = tmplRegisterVisitor;
        
        const dni = sectionRegister.querySelector('#dni');
        const nombre = sectionRegister.querySelector('#nombre');
        const email = sectionRegister.querySelector('#email');
        const empresa = sectionRegister.querySelector('#empresa'); 
        const host = sectionRegister.querySelector('#host')
        //const proposito = sectionRegister.querySelector('#propoVisit')
     
        sectionRegister.querySelector('#register-visitor').addEventListener('click', () => {
           /*  const nombreHost = host.value;
            console.log(nombreHost);
            dataHost.forEach(element => {
                console.log(element.nombre)
                if(element.nombre===nombreHost){
                    emailHost=element.email

                    console.log(emailHost)
                }
            }); */ 
            sendToUsers(nombre.value, dni.value, email.value, empresa.value)
            sendToVisit(nombre.value, dni.value, email.value, host.value,email.value)

                
            //const hostEmail = host.value
           //return changeHash('#/welcome')
    })
    return sectionRegister;
}