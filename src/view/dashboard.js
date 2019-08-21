
import { getVisit} from '../controller/controller-firebase.js'

export const Dashboard = () => {
    const tmpldashboard = `
       <div class="dashBlack">
         <img src="./image/logocomunalblanco.png" class="logodash">

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> </li>
      <li class="nav-item"> <a class="nav-link" href="#">Link</a> </li>
      <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
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
      <td id="visitas"></td>
    </tr>

        </table>
        </div>
        <a href="#/salir"> salir </a>
        <a href="#/register"> Nuevo Visitante </a>
        `;
//        <td> <input type="checkbox"> </td>
    const sectionDashboard = document.createElement('section');
    sectionDashboard.innerHTML = tmpldashboard;
  
    getVisit(visit => {
      visit.forEach(element => {
        const visitas = document.querySelector('#visitas');
        const createList = document.createElement('li');
        visitas.appendChild(createList)
        const fecha = element.fecha;
        const tiempo = fecha.seconds;
        console.log(tiempo)
        let hours = Math.floor( tiempo / 31536000 );  
        let minutes = Math.floor( (tiempo % 3600) / 60 );
        let seconds = tiempo % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        let result = hours + ":" + minutes + ":" + seconds; 
        visitas.innerHTML += element.nombre + '' +' no hay ' + element.dni + ' ' + result + 'SingOut';                
          console.log(element)
          console.log(element.fecha)
      })
        })
    

    
    return sectionDashboard;
}
