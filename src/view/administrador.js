export const Administrador = () => {
    const tmplAdmin = `
    <h3 class="adminTitulo col-12"> "Bienvenido a Comunal" </h3>
    <input class="emailAdmin" type="email" id="email-admin" placeholder="Ingresa tu email">
    <input class="passwordAdmin" type="password" id="pasword-admin" placeholder="Ingresa tu contraseña">
    <a href="#/dashboard" class="ingresarAdmin"> Ingresar </a>
    `
    
    const sectionAdmin = document.createElement('section');
    sectionAdmin.innerHTML = tmplAdmin;

    const email = sectionAdmin.querySelector('#email-admin');
    const password = sectionAdmin.querySelector('#pasword-admin');

    if(email==="admin@gmail.com" && password ==="abc123"){
        return changeHash('#/dashboard')
    }
  
    return sectionAdmin;
}
