import { setUsers } from './controller-firebase.js'

 export const sendToUsers = (nameUser, dni, email, compañia, host) => {
  /*   const objUser = userAcces();
    console.log(objUser); */
  let user = {
    //foto: urlfoto,
    name: nameUser,
    dni: dni,
    email: email,
    compañia: compañia,
    host: host,
    fecha: new Date(),
    //proposito: proposito,
    //salida: salida

  }
  return setUsers(user)
    .then((docRef) => {
      console.log(user)
      console.log(docRef)

    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
}


let messaging = firebase.messaging();

messaging.requestPermission()
.then(function() {
    console.log('Have permission');
   // return messaging.getToken();
})
.then(function(token) {
    console.log(token);
})
.catch(function(err) {
  mensajeFeedback(err);
    console.log('Error Ocurred.', err);
})