export const setUsers = (objUser) => {
    return firebase.firestore().collection("users").add(objUser)

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

