import { changeHash } from "../view-controller/firestore.js";
export const Camera = () => {
    const createDiv = document.createElement('div');
    const camera = `
    <section>
     <video id="video" autoplay> Video </video>
     <a href="#/welcome" id="foto"> <img src="./image/botonfoto.png"></a>
        <canvas id="canvas"></canvas>
    </section>
    `;
    //<img src="" id="photo" alt="photo">
    createDiv.innerHTML = camera;
    const video = createDiv.querySelector('#video')
    const foto = createDiv.querySelector('#foto')
    const canvas = createDiv.querySelector('#canvas')
    const photo = createDiv.querySelector('#photo')
    const continuar = createDiv.querySelector('#continuar')
    const start = () => {
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        }).then(stream => {
            //console.log(stream)
            video.srcObject = stream;
            console.log(video.srcObject)
        }).catch(console.error)
    }
  window.addEventListener('load', start, false);
    var context = canvas.getContext('2d');
    foto.addEventListener('click', () => {
        context.drawImage(video, 50,20, 100,100);
        let data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
        console.log(data)
        //console.log(photo)
        
    })
    
    continuar.addEventListener('click', () => {      
        return changeHash('#/welcome')    
    })
    
  
    return createDiv;
}