import { setUsers, setVisit } from './controller-firebase.js'

 export const sendToUsers = (nameUser, dni, email, compañia) => {
   let user = {
    //foto: urlfoto,
    name: nameUser,
    dni: dni,
    email: email,
    compañia: compañia,
    }
  return setUsers( dni, user)
    .then((docRef) => {
      console.log(user)
      console.log(docRef)

    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
}

export const sendToVisit = (nombre,dni, host, email ) => {

  let visit = {
    nombre: nombre,
    dni: dni,
    email: email,
    //foto: urlfoto,
    fecha: new Date(),
    host: host,
    //proposito: proposito, 
    //observaciones:observaciones  

  }
  return setVisit(visit)
    .then((docRef) => {
      //console.log(visit)
      //console.log(docRef)

    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
}