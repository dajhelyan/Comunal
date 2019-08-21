import { changeHash } from '../view-controller/firestore.js'

export const viewHome = () => {
    const tmplHome = `
    <div>
    <img src="./image/comunal.png" class="imagenlogo">
    <div>
    <button type="button" id="btn-page-register" class="btn-register col-5">Registra tu visita aquí</button>
    </div>
      <div class="col-12">
      <div class="col-3 antes-hover"> <a href="#/administrador" class="admin">Administrador </a> </div>
      <div class="col-3 admin-hover"> <a href="#/user" class="antes">¿Haz estado aqui antes?</a> </div>
      </div>
    </div>
    `;

    const sectionHome = document.createElement('section');
    sectionHome.className = 'fondoimage col-12';
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
