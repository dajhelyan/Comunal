/*registro de usuarios nuevos*/

export const signUp = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)}
    /* Acceso a usuarios existentes */

export const signIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)}

/* cerrar sesion*/

export const singOut = () => {
    return firebase.auth().signOut()
 };

 