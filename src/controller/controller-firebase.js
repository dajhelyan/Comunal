export const setUsers = (users, dni, obj) => {
    return firebase.firestore().collection(users).doc(dni).set(obj)
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

export const getVisit =(callback) => {
  firebase.firestore().collection('visit')
  .orderBy('fecha', 'desc')
  .onSnapshot((querySnapshot) => {
    const data = [];
    console.log(data)
    querySnapshot.forEach((doc) => {
      data.push({id:doc.id, 
                nombre:doc.data().nombre,
                dni: doc.data().dni,
                fecha: doc.data().fecha,
                host: doc.data().host, 
                salida: doc.data().salida,
                observaciones: doc.data().salida,
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

    /* Acceso a usuarios existentes

  export const signIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)}

     cerrar sesion

export const singOut = () => {
    return firebase.auth().signOut()
 };
  */