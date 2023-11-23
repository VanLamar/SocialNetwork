

alert('Це повідомлення! 1');
// Reference to DOM elements
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
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
		appId: "1:474613115767:web:290b3f004a568c0d744f72",
		measurementId: "G-TLZ4V7QBTD"
	  };

	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);
	  
	  	alert('Це повідомлення! 111');

    // Login function
    function login() {
		alert('Це повідомлення! 0');
        const email = emailInput.value;
        const password = passwordInput.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert('Це повідомлення!');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                document.getElementById('error-message').textContent = errorMessage;
            });
    }