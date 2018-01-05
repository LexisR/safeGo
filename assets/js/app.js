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
const txtEmail2 = document.getElementById('txtEmail2');
const txtPassword2 = document.getElementById('txtPassword2');
const btnLogin2 = document.getElementById('btnLogin2');
const btnSignUp = document.getElementById('btnSignUp');
const btnSalir = document.getElementById('btnSalir');
const btnSalir2 = document.getElementById('btnSalir2');
const hacerUnEnvio = document.getElementById('hacerUnEnvio');
const btnVolver = document.getElementById('btnVolver');

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

//agregando evento al btnLogin2
btnLogin2.addEventListener('click', e => {
  //pasos para obtener correo y contraseña
  const email = txtEmail2.value;
  const pass = txtPassword2.value;
  const auth = firebase.auth();
  //para ingresar 
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch( e => console.log(e.menssage));
});


hacerUnEnvio.addEventListener('click', e => {
    $('#thirdSection').show();
    $('#second').hide();
});

btnVolver.addEventListener('click', e => {
  $('#thirdSection').hide();
  $('#second').show();
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

btnSalir2.addEventListener('click', e => {
  firebase.auth().signOut();
})


// ojo Firebase no verifica si el correo es verdadero o exiiste, debemos hacer un objeto aparte
//agregando en tiempo real la autentificacion

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    $('.section-principal').hide();
    $('#second').show();
    if ($('#registrar').modal) $('#registrar').modal('hide'); 
  } else {
    $('.section-principal').show();
    $('#second').hide();
  }
  $('#thirdSection').hide();
}); 

 

}());



const textoIntroducido = document.getElementById("msjEnviado");
function twittear(){
  const textoIntroducido = document.getElementById("msjEnviado");
  const msjDiv = document.getElementById("contentMsj");
    if (textoIntroducido.value === " " || textoIntroducido.value === ""){
        } else {
        const nameSpan = document.createElement("span");
        const dateSpan = document.createElement("h6");
        const twitP = document.createElement("p");
        nameSpan.textContent = "Yo";
        dateSpan.textContent = new Date().toLocaleTimeString();
        twitP.textContent = textoIntroducido.value;
        msjDiv.appendChild(nameSpan);
        msjDiv.appendChild(dateSpan);
        msjDiv.appendChild(twitP);
      } 
}
const miText = document.getElementById("msjEnviado");

// Termina seccion de envio de paquuete

