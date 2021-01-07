var firebaseConfig = {
    apiKey: "AIzaSyBQ33WrUDK2RNlFPIiEMdBj0q2GnUVMDzo",
    authDomain: "contact-form-fa626.firebaseapp.com",
    projectId: "contact-form-fa626",
    storageBucket: "contact-form-fa626.appspot.com",
    messagingSenderId: "1033180164534",
    appId: "1:1033180164534:web:4ff11f768b78f0d9905117"
  };


  //collections of messages
  var msgref= firebase.database().ref('messages');

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//event listener
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();
    // console.log("worked");

    var name=getInputvalues('name');
    var company=getInputvalues('company');
    var email=getInputvalues('email');
    var phone=getInputvalues('phone');
    var message=getInputvalues('message');
    
    //save message
    saveMessages(name,company,email,phone,message);

    //show alert
    document.querySelector('.alert').style.display='block';

    //hide alert after few sec
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    },3000);

    //clear form
    document.getElementById('contactForm').reset();
}

//function to get form values
function getInputvalues(id){
    return document.getElementById(id).value;
}

//save messages to firebase

function saveMessages(name,company,email,phone,message){
    var newMessageRef =msgref.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    })
}