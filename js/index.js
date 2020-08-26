// Your web app's Firebase configuration
(function(){
	const firebaseConfig = {
		apiKey: "AIzaSyBVxgXDTnR3uSmr6NaIBTLTvrt5qcmimIQ",
		authDomain: "sample-454e7.firebaseapp.com",
		databaseURL: "https://sample-454e7.firebaseio.com",
		projectId: "sample-454e7",
		storageBucket: "sample-454e7.appspot.com",
		messagingSenderId: "1062143828996",
		appId: "1:1062143828996:web:3c0f07544189c6209f4151",
		measurementId: "G-0DMMK5QKKQ"
	};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
 $("#btn-login").click(function()
 {
	 var email = $("#email").val();
	 var password = $("#password").val();
	 
	 if(email != "" && password != "")
	 {
		var result = firebase.auth().signInWithEmailAndPassword(email,password)
		result.catch(function(error)
		{
			var errorcode = error.code;
			var errorMessage = error.message;
			
			console.log(errorcode);
			console.log(errorMessage);
			window.alert("Message: " + errorMessage);
		});
	 }
	 else
	 {
		 window.alert("Please fill the all details correctly.");
	 }
	

}());