export const welcomeUser = () => {
    const sectionWelcome = document.createElement('section');
    const tmpl = `
    <div>
        <h1>¡Bienevedx a Comunal</h1>
        <div>
            <h3>Practicas de Higiene Personal</h3>
            <p>etdxt</p>
        </div>
        <button>Enviar info a mi email</button>
        <form action="mailto:loquesea@algo.com">
        <input type="submit" />
        </form>
        <a href="mailto:daniela.gonzales@laboratoria.la?body=Este%20es%20el%20cuerpo%20del%20mensaje">Cuerpo predefinido</a>    </div>    
    `;
    sectionWelcome.innerHTML = tmpl;

    return sectionWelcome;
}

//daniela.gonzales@laboratoria.la