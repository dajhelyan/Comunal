import { changeHash } from '../view-controller/firestore.js'

export const viewHome = () => {
    const tmplHome = `
<<<<<<< HEAD
    <figure class="figure-img">
        <img src="../assets/comunal.jpeg" class="fondo">
    </figure>
    <div class="contenedor-home">
        <img src="../assets/ComunalLogo.png" class="logo">
        <div>
            <button type="button" class="btn-home" id="btn-page-register">Registra tu visita aquí</button>
            <a href="#/user">¿Haz estado aqui antes?</a>
        </div>
    </div>
=======
    <h3>Bienvenido a Comunal</h3>
    <button type="button" id="btn-page-register">Registra tu visita</button>
    <a href="#/user">¿Haz estado aqui antes?</a></br>
    <a href="#/administrador">Administrador </a>
>>>>>>> e28707114e08accf53690ce7599dd3d20134c5ee
    `

    const sectionHome = document.createElement('section');
    sectionHome.innerHTML = tmplHome;

    const btnRegisterPage = sectionHome.querySelector('#btn-page-register')
    btnRegisterPage.addEventListener('click', () => {
        return changeHash('#/register')
    })
    
    return sectionHome;
}
