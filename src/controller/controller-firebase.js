export const setUsers = (objUser) => {
  return firebase.firestore().collection("users").doc(`${objUser.dni}`).set(objUser)

}

export const setVisit = (objVisit) => {
  return firebase.firestore().collection("visit").add(objVisit)
}

export const getHost = (callback) => {
  firebase.firestore().collection('host')
  .get((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data().id)
        data.push({id:doc.id, 
        nombre:doc.data().nombre,
        dni: doc.data().dni,
        email: doc.data().email,
        compañia: doc.data().compañia   
        })
      
    });
  callback(data);
  })
}
