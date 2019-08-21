//import {coleccionHost} from ''

export const welcomeUser = () => {
    const sectionWelcome = document.createElement('section');
    const tmpl = `
    <div>
        <h1>¡Bienevedx a Comunal</h1>
        <div>
            <h3>Practicas de Higiene Personal</h3>
            <p>etdxt</p>
        </div>
        </form>
        <a href="mailto:daniela.gonzales@laboratoria.la?body=Este%20es%20el%20cuerpo%20del%20mensaje"> Enviar correo </a>    </div>    
    `;
    //const sendEmail = sectionWelcome.querySelector('send-email')

    sectionWelcome.innerHTML = tmpl;

    return sectionWelcome;
}

