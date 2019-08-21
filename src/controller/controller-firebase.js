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


/* export const getHost = (dni) => {
  return firebase.firestore().collection('host').doc(dni).get();
};
 
 Registra usuarios nuevos 

export const signUp = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)}
<<<<<<< HEAD

    /* Acceso a usuarios existentes

=======
      
     Acceso a usuarios existentes 
  
>>>>>>> e28707114e08accf53690ce7599dd3d20134c5ee
  export const signIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)}

     cerrar sesion

export const singOut = () => {
    return firebase.auth().signOut()
 };
  */