export const welcomeUser = () => {
    const sectionWelcome = document.createElement('section');
    const tmpl = `
    <div>
        <h1>¡Bienevedx a Comunal</h1>
        <div>
            <h3>Practicas de Higiene Personal</h3>
            <p>etdxt</p>
        </div>
        <button >Aceptar</button>
        <form action="mailto:loquesea@algo.com">
        
        </form>
        <a id = "send-email" href="mailto:daniela.gonzales@laboratoria.la?body=Este%20es%20el%20cuerpo%20del%20mensaje">Envia un email a tu host</a>    </div>    
    `;
    //const sendEmail = sectionWelcome.querySelector('send-email')

    sectionWelcome.innerHTML = tmpl;

    return sectionWelcome;
}

