export const Administrador = () => {
    const tmplAdmin = `
    <h3 class="adminTitulo col-12"> "Bienvenido a Comunal" </h3>
    <input class="emailAdmin" type="email" id="email-admin" placeholder="Ingresa tu email">
    <input class="passwordAdmin" type="password" id="pasword-admin" placeholder="Ingresa tu contraseña">
    <a href="#/dashboard" class="ingresarAdmin"> Ingresar </a>
    `
    
    const sectionAdmin = document.createElement('section');
    sectionAdmin.innerHTML = tmplAdmin;

    /* const email = sectionRegister.querySelector('#email-admin');
    const password = sectionRegister.querySelector('#pasword-admin');
 */
    
    return sectionAdmin;
}
