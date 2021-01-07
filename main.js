var firebaseConfig = {
    apiKey: "AIzaSyBQ33WrUDK2RNlFPIiEMdBj0q2GnUVMDzo",
    authDomain: "contact-form-fa626.firebaseapp.com",
    databaseURL: "https://contact-form-fa626-default-rtdb.firebaseio.com",
    projectId: "contact-form-fa626",
    storageBucket: "contact-form-fa626.appspot.com",
    messagingSenderId: "1033180164534",
    appId: "1:1033180164534:web:4ff11f768b78f0d9905117"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


// Submit form
function submitForm(e){
  e.preventDefault();


  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}