export const setUsers = (objUser) => {
  return firebase.firestore().collection("users").doc(`${objUser.dni}`).set(objUser)

}

export const getUserData = (dniUser) => {
  const db = firebase.firestore();
  const docRef = db.collection("user").doc(`${dniUser}`).where("dni", "==", true)

  return docRef.get()
      .then(data => {
          //console.log(data)
          if (doc.exist) {
              console.log(data.data().dni, "2")
              return data.data()
          } /* else {
              console.log('error')
          } */
      })
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
