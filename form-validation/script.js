const username = document.getElementById("username");
const pass = document.getElementById("password");
const confirmPass = document.getElementById("password-confirm");
const email = document.getElementById("email");
const form = document.getElementsByTagName("form")[0];
const inputs = document.getElementsByTagName("input");
const errorDisplay = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form submission if errors exist

  let message = [];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Clear previous input styles and messages
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("wrong-input");
    inputs[i].classList.remove("correct-input");
  }
  errorDisplay.innerText = ""; // Clear previous error messages

  // Validate inputs
  if (username.value.trim() === "") {
    message.push("Username required.");
    username.classList.add("wrong-input");
  } else {
    username.classList.add("correct-input");
  }
  if (pass.value.trim() === "") {
    message.push("Password required.");
    pass.classList.add("wrong-input");
  } else {
    pass.classList.add("correct-input");
  }

  if (email.value.trim() === "") {
    message.push("Email required.");
    email.classList.add("wrong-input");
  } else {
    email.classList.add("correct-input");
  }

  if (!emailPattern.test(email.value.trim())) {
    message.push("Incorrect email format.");
    email.classList.add("wrong-input");
  } else {
    email.classList.add("correct-input");
  }
  if (confirmPass.value.trim() === "") {
    message.push("Confirm Password is required.");
    confirmPass.classList.add("wrong-input");
    pass.classList.add("wrong-input");
  } else {
    confirmPass.classList.add("correct-input");
    pass.classList.add("correct-input");
  }

  if (pass.value.trim() !== confirmPass.value.trim()) {
    message.push("Password and Confirm Password must match.");
    pass.classList.add("wrong-input");
    confirmPass.classList.add("wrong-input");
  } else {
    pass.classList.add("correct-input");
    confirmPass.classList.add("correct-input");
  }

  // Display error messages if there are any
  if (message.length > 0) {
    errorDisplay.innerText = message.join("\n");
    errorDisplay.classList.add("error");

    // Join messages and display them
  } else {
    errorDisplay.innerText = "Form Submitted Successfully.";
    errorDisplay.classList.add("success");
  }
});
