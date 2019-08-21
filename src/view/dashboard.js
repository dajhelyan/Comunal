export const Dashboard = () => {
    const tmpldashboard = `
    <section class="col-12">
    <section class="col-4">
       <div col="">
         <img src="./image/comunal.png" class="logodash">
         <p> Comunal Barranco </p>
       </div>
       <div>
         <img src=""> <p> Visitantes </p>
       </div>
       <div>
         <p> Registtro de visitantes </p>
         <p> Invitados </p>
         <img src=""> <p> Mensajes <p>
         <img src=""> <p> Mis tareas </p>
         <img src=""> <p> Clientes </p>
       </div>
       <div>
          <p> Configuración </p>
          <div>
            <img src=""> <p> Main Settings </p>
            <img src=""> <p> Notificaciones </p>
          </div>
       </div>
    </section>

    <section class="col-9">
    <div>
        <p> 1 Visitante <p> 
        <input type="search"> <button> Nuevo visitante </buttton>
    </div>
    <div>
       <button> < </button>  <button> Hoy </button> <button> > </button>
    </div>
    <div>
       <img src="">
       <img src="">
       <img src="">
    </div>
    <div>
       <input type="checkbox">
       <p> Nombre </p>
       <p> Observaciones </p>
       <p> DNI/C.E </p>
       <p> Ingreso </p>
       <p> Salida </p>
    </div>
    <div>
       <input type="checkbox">
       <p> Alex Ramírez </p>
       <p> No hay </p>
       <p> 74148934 </p>
       <p> 5:15 p.m </p>
       <p> Salió </p> 
       <a href="#/singOut">
    </div>
    <a href="#/salir"> salir </a>
    </section>
    </section>
    `;
    const sectionDashboard = document.createElement('section');
    sectionDashboard.innerHTML = tmpldashboard;

    return sectionDashboard;
}
