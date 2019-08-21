import { changeHash } from '../view-controller/firestore.js'


/* su, nadia, andrea,day,elvia
 */
export const existingUser = () => {
    const tpml = `
    <div>
        <h1>Comunal</h1>
        <div id="dni-user">
        <div class="row">
            <div class="col s12">
            <div class="row">
                <div class="input-field col s12">
                <input type="search" name="busqueda dni" list="dniUSer" id="dni-user">
                <datalist class="option" id="dniUSer">
                    <option  value="47505545">
                     <option value="46119043">
                     <option value="74147866">
                     <option value="76183036">
                     <option value="40428429">
                </datalist>
                </div>
            </div>
        </div>
        </div>
            <p>DNI o Carnet de Extranjeria</p>
        <div>
        <input type="text" id="user">
        <p>Nombre y apellidos</p>
        <input type="text" id="empresa">
        <p>Empresa</p>
        <input type="search" id="anfitrion">
        <p>Anfitrión(a)</p>
        <button type="button" id="continue">Continuar</button>
    </div>
    `

    const sectionUser = document.createElement('section');
    sectionUser.innerHTML = tpml;

    sectionUser.querySelector('#continue').addEventListener('click', () => {
        return changeHash('#/welcome')
    })

    const objUser = {
        nameUser: "Catalina Vega",
        empresa: "Alicorp",
        host: "Andrea Ramirez"
    }
 
    sectionUser.querySelector('#dni-user').addEventListener('change', () => {
        console.log('lllll');
        
        sectionUser.querySelector('#user').value = objUser.nameUser;
        sectionUser.querySelector('#empresa').value = objUser.empresa;
        sectionUser.querySelector('#anfitrion').value = objUser.host;
    })

    return sectionUser;
} 