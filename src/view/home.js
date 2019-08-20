import { changeHash } from '../view-controller/firestore.js'

export const viewHome = () => {
    const tmplHome = `
    <h3>Bienvenido a Comunal</h3>
    <button type="button" id="btn-page-register">Registra tu visita</button>
    <a href="">¿Haz estado aqui antes?</a>
    `

    const sectionHome = document.createElement('section');
    sectionHome.innerHTML = tmplHome;

    const btnRegisterPage = sectionHome.querySelector('#btn-page-register')
    btnRegisterPage.addEventListener('click', () => {
        return changeHash('#/register')
    })

    return sectionHome;
}
