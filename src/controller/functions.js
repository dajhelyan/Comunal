import { setUsers } from './controller-firebase.js'

 export const sendToUsers = (nameUser, dni, email, compañia, host, proposito) => {
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
    proposito: proposito,
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