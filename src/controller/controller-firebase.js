export const setUsers = (objUser) => {
  return firebase.firestore().collection("users").doc(`${objUser.dni}`).set(objUser)

}

export const getUserData = (dniUser) => {
  const db = firebase.firestore();
  const docRef = db.collection("user").doc(`${dniUser}`)

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


/* Registra usuarios nuevos */

/* export const signUp = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)}

    /* Acceso a usuarios existentes

  export const signIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)}

     cerrar sesion

export const singOut = () => {
    return firebase.auth().signOut()
 };
  */

