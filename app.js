import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

alert('Це повідомлення! 1');
// Reference to DOM elements
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const signupButton = document.getElementById('signup-button');
    const errorMessage = document.getElementById('error-message');
	alert('Це повідомлення! 11');
	

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB44Dv2sMgPP2ZtDgwGfX44v1C9Hm2sUgk",
  authDomain: "socialnetwork-787c3.firebaseapp.com",
  databaseURL: "https://socialnetwork-787c3-default-rtdb.firebaseio.com",
  projectId: "socialnetwork-787c3",
  storageBucket: "socialnetwork-787c3.appspot.com",
  messagingSenderId: "474613115767",
  appId: "1:474613115767:web:b19eac713933b56c744f72",
  measurementId: "G-3VB8TMVDKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
alert('Це повідомлення! 111');

loginButton.addEventListener('click', function() {
		alert('Це повідомлення! 0');
        const email = emailInput.value;
        const password = passwordInput.value;

	signInWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
	    const user = userCredential.user;
	    alert(user);
	  })
	  .catch((error) => {
	    const errorCode = error.code;
	    const errorMessage = error.message;
	  });
});

signupButton.addEventListener('click', function() {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
});
