import { changeHash } from '../view-controller/firestore.js'

export const viewHome = () => {
    const tmplHome = `
    <h3>Bienvenido a Comunal</h3>
    <button type="button" id="btn-page-register">Registra tu visita</button>
    <a href="#/user">¿Haz estado aqui antes?</a></br>
    <a href="#/administrador">Administrador </a>
    `

    const sectionHome = document.createElement('section');
    sectionHome.innerHTML = tmplHome;

    const btnRegisterPage = sectionHome.querySelector('#btn-page-register')
    btnRegisterPage.addEventListener('click', () => {
        return changeHash('#/register')
    })

    return sectionHome;
}
