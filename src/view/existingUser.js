import { changeHash } from '../view-controller/firestore.js'

export const existingUser = () => {
    const tpml = `
    <div>
        <nav class="">
            <div class="nav-wrapper navbar">
                <a href="#/home" class="brand-logo center">
                    <img src="../assets/ComunalLogo.png" class="logo-nav">
                </a>
            </div>
        </nav>
        <i class="arrow-cam"> <a href="#/welcome"><i class="fas fa-arrow-right"></i></a></i>
        <i class="arrow-home"><a href="#/home"><i class="fas fa-arrow-left"></i></a></i>
        <div class="form-existing-user">
            <div class="form">
                <div id="dni-user">
                    <input type="search" name="busqueda dni" list="dniUSer" id="dni-user">
                    <datalist class="option" id="dniUSer">
                        <option  value="47505545">
                        <option value="46119043">
                        <option value="74147866">
                        <option value="76183036">
                        <option value="40428429">
                    </datalist>
                    <p>DNI o Carnet de Extranjeria</p>
                <div>
                <input type="text" id="user">
                <p>Nombre y apellidos</p>
                <input type="text" id="empresa">
                <p>Empresa</p>
                <input type="search" id="anfitrion">
                <p>Anfitrión(a)</p>
                <button type="button" class="continue" id="continue">Continuar</button>
            </div>    
        <div>    
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
    })

    return sectionUser;
} 