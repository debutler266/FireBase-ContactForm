var firebaseConfig = {
    apiKey: "AIzaSyBAQIfKZYzX36r8tNjUui5OIuE3eLIMXt8",
    authDomain: "contact-form-41908.firebaseapp.com",
    databaseURL: "https://contact-form-41908.firebaseio.com",
    projectId: "contact-form-41908",
    storageBucket: "contact-form-41908.appspot.com",
    messagingSenderId: "963494224264",
    appId: "1:963494224264:web:3ee2951750d25baf9f9a3d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference contactInfo collections
  let contactInfo = firebase.database().ref("infos");

// Listen for 'submit' //
document.querySelector(".contact-form").addEventListener("submit",
submitForm);

function submitForm(e) {
  e.preventDefault();


  //Get all input values or DOM elements
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  //Create function
  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
};

//Creates new var to push to new collection, newContactInfo
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message
  });
}
