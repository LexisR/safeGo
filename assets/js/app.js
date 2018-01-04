


  // Initialize Firebase
(function (){ //iife una expresion de funcion invocada inmediatamente (function)
  const config = {
    apiKey: "AIzaSyD1gA2Rpy3DO0FGZfeyFaRmGEfIuN4FodQ",
    authDomain: "safe-go.firebaseapp.com",
    databaseURL: "https://safe-go.firebaseio.com",
    projectId: "safe-go",
    storageBucket: "safe-go.appspot.com",
    messagingSenderId: "342295071182"
  };
  firebase.initializeApp(config);

// const: variable no va a cambiar , puedo agregar cosas // let: variable que si se puede cambiar

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');

//agregando evento al btnLogin
btnLogin.addEventListener('click', e => {
  //pasos para obtener correo y contraseña
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //para ingresar 
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch( e => console.log(e.menssage));
});


//pasos para poder afiliarte con correo y contraseña
btnSignUp.addEventListener('click', e => {   
  //pasos para obtener correo y c ontraseña
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //para ingresar 
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise//utilizamos promise para que nos termine haga una accion .then
    .catch( e => alert(e.message)); //e variable se puuede llamar como quiera
});

//funcion para activar el boton de salir

btnSalir.addEventListener('click', e => {
  firebase.auth().signOut();
})

// ojo Firebase no verifica si el correo es verdadero o exiiste, debemos hacer un objeto aparte
//agregando en tiempo real la autentificacion

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    $('.section-principal').hide();
    $('#second').show();
    $('#registrar').modal('hide');
 
  } else {
    $('.section-principal').show();
    $('#second').hide();

  }
}); 


  

}());

