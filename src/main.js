import { initRouter } from './view-controller/routes.js'

export const init = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDaAmhGu9QUW3cmaoaQWm5Speouts2Qvr0",
        authDomain: "comunal-3f620.firebaseapp.com",
        databaseURL: "https://comunal-3f620.firebaseio.com",
        projectId: "comunal-3f620",
        storageBucket: "",
        messagingSenderId: "691116814616",
        appId: "1:691116814616:web:f439fe74fbddd90b"
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    initRouter();
}
window.onload = init();