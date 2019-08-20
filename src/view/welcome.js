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
        <a href="mailto:scahuantico@gmail.com"> Enviar correo </a> 
    </div>    
    `
    sectionWelcome.innerHTML = tmpl;

    return sectionWelcome;
}