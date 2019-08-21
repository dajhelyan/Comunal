import { setUsers, setVisit, getHost } from './controller-firebase.js'

export const sendToUsers = (nameUser, dni, email, compañia, host, proposito) => {
  /*   const objUser = userAcces();
    console.log(objUser); */
  let user = {
    //foto: urlfoto,
    name: nameUser,
    dni: dni,
    email: email,
    compañia: compañia,
<<<<<<< HEAD
    host: host,
    fecha: new Date(),
    proposito: proposito,
=======
    //host: host,
    //proposito: proposito,
>>>>>>> 578b8157c0253b0a9d592d4a6d8885dd8039d1eb
    //salida: salida

  }
  return setVisit(user)
    .then((docRef) => {
      console.log(user)
      console.log(docRef)

    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
}

export const sendToVisit = (dni, host, urlfoto, proposito ) => {
  /*   const objUser = userAcces();
    console.log(objUser); */
  let user = {
    dni: dni,
    foto: urlfoto,
    fecha: new Date(),
    host: host,
    proposito: proposito  

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

<<<<<<< HEAD
/* 
let messaging = firebase.messaging();

messaging.requestPermission()
  .then(function () {
    console.log('Have permission');
    // return messaging.getToken();
  })
  .then(function (token) {
    console.log(token);
  })
  .catch(function (err) {
    mensajeFeedback(err);
    console.log('Error Ocurred.', err);
  }) */
=======
/* export const getDataHost = () => {
  getHost()
  
} */

/*
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
*/
>>>>>>> 578b8157c0253b0a9d592d4a6d8885dd8039d1eb
