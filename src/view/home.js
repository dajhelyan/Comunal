import { changeHash } from '../view-controller/firestore.js'

export const viewHome = () => {
    const tmplHome = `
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
    `

    const sectionHome = document.createElement('div');
    //sectionHome.className = 'fondoimage col-12';
    //const imgFondo = document.createElement('img')
    //imgFondo.src = "../image/fondo.jpeg";
    //imgFondo.appendChild(sectionHome);
    sectionHome.innerHTML = tmplHome;

    const btnRegisterPage = sectionHome.querySelector('#btn-page-register')
    btnRegisterPage.addEventListener('click', () => {
        return changeHash('#/register')
    })
    
    return sectionHome;
}
