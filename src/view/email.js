import { getVisit } from '../controller/controller-firebase.js'
/* const visit = null; */
export const email = (visit) => {
 console.log(visit)
    /* getVisit(visit => {
        if (visit===null) {
            visit=visit
            
        }else {

        }
            console.log(visit)
        }) */  
 

    const sectionEmail = document.createElement('section');
    const tmpl = `
    <div>
        <h1>¡Bienevedx a Comunal Barranco</h1>
        <div>
            <h3>Comunica tu llegada a la persona que estas visitando </h3>
            
        </div>
       
        
        <a id = "send-email" href="mailto:daniela.gonzales@laboratoria.la?body=Este%20es%20el%20cuerpo%20del%20mensaje"> Enviale un e-mail </a>    </div>    
    `;
    
    const sendEmail = sectionEmail.querySelector('#send-email');
    /* sendEmail.addEventListener('click', () => {
        getHost(host => {
            console.log(host)
        })

    }) */

    sectionEmail.innerHTML = tmpl;

    return sectionEmail;
}