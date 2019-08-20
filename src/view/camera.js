export const Camera = () => {
    const createDiv = document.createElement('div');
    const camera = `
    <video id="video" autoplay> Video </video>
    <button id="foto">foto </button>
        <canvas id="canvas" width="200" height="200"></canvas>
    `;
    createDiv.innerHTML = camera;

    const video = createDiv.querySelector('#video')
    const foto = createDiv.querySelector('#foto')
    const canvas = createDiv.querySelector('#canvas')
    const start = () => {
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        }).then(stream => {
            video.srcObject = stream;
        }).catch(console.error)
    }
   // window.addEventListener('load', start, false);
    var context = canvas.getContext('2d');
    foto.addEventListener('click', () => {
        context.drawImage(video, 0,0, 200,200);
    })

    return createDiv;
}