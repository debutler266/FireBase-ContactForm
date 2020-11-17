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
};
