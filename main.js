// Initialize Firebase (ADD YOUR OWN DATA)
// const firebaseConfig = {
//   apiKey: "AIzaSyBqjicDEKN6uaZ6722Osdl92o6uwXIozd8",
//   authDomain: "contact-form-fa728.firebaseapp.com",
//   databaseURL: "https://contact-form-fa728-default-rtdb.firebaseio.com",
//   projectId: "contact-form-fa728",
//   storageBucket: "contact-form-fa728.appspot.com",
//   messagingSenderId: "82183493528",
//   appId: "1:82183493528:web:68dd9cef6a97f969a37ded",
//   measurementId: "G-8RBF9DQXWT"
// };
// firebase.initializeApp(config);

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