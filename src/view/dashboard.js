
import { getVisit} from '../controller/controller-firebase.js'

export const Dashboard = () => {
    const tmpldashboard = `
    
    <a href="#/home"> salir </a>
    `
    
    const sectionDashboard = document.createElement('section');
    sectionDashboard.innerHTML = tmpldashboard;

    
    getVisit(visit => {               
        //contenedorPost.innerHTML = ''
        console.log(visit)
        //posts.forEach((post)=> {
        //console.log(post)
       /*  const postElem = showPost(post,user)
        if(post.visibility === 'Publico'){                                    
          contenedorPost.appendChild(postElem)
        } else if(post.visibility === 'Privado' && user.id === post.idUser){
          contenedorPost.appendChild(postElem)}
          }) */
        })
                 /*
            showAllPosts((postList) => {
                contenedorPost.innerHTML=''
                contenedorPost.appendChild(postList)
            }, user);
            */
    

    
    return sectionDashboard;
}
