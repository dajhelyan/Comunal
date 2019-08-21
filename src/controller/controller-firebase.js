export const setUsers = (objUser) => {
  return firebase.firestore().collection("users").doc(`${objUser.dni}`).set(objUser)

}


export const getCollectionPost = (callback, user) => {
  const db = firebase.firestore();
  const allPost = db.collection('post').orderBy("date", "desc")
  allPost.onSnapshot((querySnapshot) => {
      const data = []
      querySnapshot.forEach((doc) => {
          if (doc.data().state === "private" && user.uid !== doc.data().uid) {
              return data;
          } else {
              data.push({ id: doc.id, ...doc.data()});
          }
          // doc.data() is never undefined for query doc snapshots
          
      });
      callback(data);
      // console.log(data, "222")
  }) 
};

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

