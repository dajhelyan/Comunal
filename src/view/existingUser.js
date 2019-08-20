import { changeHash } from '../view-controller/firestore.js'

export const existingUser = () => {
    const tpml = `
    <div>
        <h1>Comunal</h1>
        <input type="text">
        <p>DNI o Carnet de Extranjeria</p>
        <input type="text">
        <p>Nombre y apellidos</p>
        <input type="text">
        <p>Empresa</p>
        <input type="search">
        <p>Anfitrión(a)</p>
        <button type="button" id="continue">Continuar</button>
    </div>
    `

    const sectionUser = document.createElement('section');
    sectionUser.innerHTML = tpml;

    sectionUser.querySelector('#continue').addEventListener('click', () => {
        return changeHash('#/welcome')
    })

    return sectionUser;
} 