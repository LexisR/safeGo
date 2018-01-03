var config = {
  apiKey: "AIzaSyD1gA2Rpy3DO0FGZfeyFaRmGEfIuN4FodQ",
  authDomain: "safe-go.firebaseapp.com",
  databaseURL: "https://safe-go.firebaseio.com",
  projectId: "safe-go",
  storageBucket: "safe-go.appspot.com",
  messagingSenderId: "342295071182"
};
firebase.initializeApp(config);

//llamando elementos de html con firebase

const txtEmail = document.getElementById('textEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSinUp = document.getElementById('btnSinUp');
const btnLogout = document.getElementById('btnLogout');

// Evento de Login 
btnLogin.addEventListener('click', e => {
 //obtner email y password 
 const email = txtEmail.value;
 const pass = txtPassword.value;
 const auth = firebase.auth;
// ingresar
const promise = auth.signInWithEmailAndPassword(email, password);
promise.catch(e => console.log(e.message));
});

// Evento de Login 
btnSinUp.addEventListener('click', e => {
  //obtner email y password y comprobae que el mail sea real 
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth;
 // ingresar
 const promise = auth.createUserWithEmailAndPassword(email, password);
 promise.catch(e => console.log(e.message));

});
