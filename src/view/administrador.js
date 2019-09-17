export const Administrador = () => {
    const tmplAdmin = `
    <nav class="">
        <div class="nav-wrapper navbar">
            <a href="#/home" class="brand-logo center">
                <img src="../assets/ComunalLogo.png" class="logo-nav">
            </a>
        </div>
    </nav>
    <div class="form-register-admin">
        <div class="form-admin">
            <input class="emailAdmin" type="email" id="email-admin" placeholder="Ingresar email">
            <input class="passwordAdmin" type="password" id="pasword-admin" placeholder="Ingresar contraseña">
            <button class="btn-dashboard"><a href="#/dashboard" class="ingresarAdmin">Ingresar</a></button>
        <div>
    </div>
    `;
    
    const sectionAdmin = document.createElement('section');
    sectionAdmin.innerHTML = tmplAdmin;

    const email = sectionAdmin.querySelector('#email-admin');
    const password = sectionAdmin.querySelector('#pasword-admin');

    if(email==="admin@gmail.com" && password ==="abc123"){
        return changeHash('#/dashboard')
    }
  
    return sectionAdmin;
}
