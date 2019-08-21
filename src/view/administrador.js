export const Administrador = () => {
    const tmplAdmin = `
    <h3>Bienvenido a Comunal</h3>
    <input type="email" id="email-admin" placeholder="Ingresa tu email">
    <input type="password" id="pasword-admin" placeholder="Ingresa tu contraseña">
    <a href="#/dashboard"> Ingresar </a>
    `
    
    const sectionAdmin = document.createElement('section');
    sectionAdmin.innerHTML = tmplAdmin;

    /* const email = sectionRegister.querySelector('#email-admin');
    const password = sectionRegister.querySelector('#pasword-admin');
 */
    
    return sectionAdmin;
}
