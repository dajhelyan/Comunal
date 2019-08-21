export const Dashboard = () => {
    const tmpldashboard = `
    <section class="col-12">
    <section class="col-4">
       <div class="dashBlack">
         <img src="./image/logocomunalblanco.png" class="logodash">
          <select class="selectAdmin"> 
           <option> Comunal Barranco </option>
          </select>
       </div>
       <div class="dashYellow">
         <img src=""> <p class="pAdmin"> Visitantes </p>
       </div>
       <div class="dashBlack">
         <div> <p class="pAdmin"> Registro de visitantes </p> </div>
         <div> <p class="pAdmin"> Invitados </p> </div>
         <div class=""> <img src="./image/gmail.png" class=""> <p class="pAdmin col-9"> Mensajes <p> </div>
         <div> <img src="./image/icono1.png"> <p class="pAdmin"> Mis tareas </p> </div>
         <div> <img src=""> <p class=""pAdmin> Clientes </p> </div>
       </div>
         <div class="dashBlack">
          <p class="pAdmin"> Configuración </p>
          <div>
            <img src=""> <p class="pAdmin"> Main Settings </p>
            <img src=""> <p class="pAdmin"> Notificaciones </p>
          </div>
       </div>
    </section>
    <section class="col-8">
    <div>
        <h3> 1 Visitante <h3> 
        <input type="search" class="inputVisitante col-8"> <button class="btn-visitante col-3"> Nuevo visitante </buttton>
    </div>
    <div class="hoy col-3">
       <button> < </button>  <button> Hoy </button> <button> > </button>
    </div>
    <div>
       <img src="">
       <img src="">
       <img src="">
    </div>
    <div class="divList">
      <table class="table">
       <tr>
          <td> <input type="checkbox"> </td>
          <td> Nombre </td>
          <td> Observaciones </td>
          <td> DNI/C.E </td>
          <td> Ingreso  </td>
          <td> Salida </td>
        </tr>
        <tr>
           <td> <input type="checkbox"> </td>
           <td>  Alex Ramírez  </td>
           <td>  No hay  </td>
           <td> 74148934 </td>
           <td> 5:15 p.m </td>
           <td>  Salió </td>
           <td> <a href="#/singOut"> </td>
        </tr>
       </table>
    </div>
    <a href="#/salir"> salir </a>
    </section>
    </section>
    `;
    const sectionDashboard = document.createElement('section');
    sectionDashboard.innerHTML = tmpldashboard;

    return sectionDashboard;
}
