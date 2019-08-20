

export const welcomeUser = () => {
    const tmpl = `
    <div>
        <h1>¡Bienevedx a Comunal</h1>
        <div>
            <h3>Practicas de Higiene Personal</h3>
            <p>etdxt</p>
        </div>
        <button>Enviar info a mi email</button>
    </div>    
    `
    const sectionWelcome = document.createElement('section');
    sectionWelcome.innerHTML = tmpl;

    return sectionWelcome;
}