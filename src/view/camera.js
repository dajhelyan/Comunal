export const Camera = () => {
    const createDiv = document.createElement('div');
    const camera = `
    <section>
     <video id="video" autoplay> Video </video>
     </section>
    <section>
     <button id="foto" class="foto">foto </button>
        <canvas id="canvas"></canvas>
        <img src="" id="photo" alt="photo">
    </section>
    `;
    createDiv.innerHTML = camera;
    const video = createDiv.querySelector('#video')
    const foto = createDiv.querySelector('#foto')
    const canvas = createDiv.querySelector('#canvas')
    const photo = createDiv.querySelector('#photo')
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
        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
        console.log(data)
    })

    return createDiv;
}