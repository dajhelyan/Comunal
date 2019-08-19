
export const viewHome = () => {
    const tmplHome = `
    <h3>Bienvenido a Comunal</h3>
    <button>Registra tu visita</button>
    <a>¿Haz estado aqui antes?</a>
    `

    const sectionHome = document.createElement('section');
    sectionHome.innerHTML = tmplHome;

    return sectionHome;
}
