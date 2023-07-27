let data = [];

document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();
  debugger

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailLowercase = email.toLowerCase();

  // Check if the user already exists in local storage
  const userData = localStorage.getItem("UserData");
  if (userData) {
    data = JSON.parse(userData); // Retrieve the existing data
    const existingUser = data.find(user => user.email === emailLowercase );
    if (existingUser) {
      alert("User already exists! Please login instead.");
      openLogIn();
      return;
    }
  }
  
  // Generate the ID based on the number of existing users
  const id = data.length + 1;

  const user = {
    id,
    firstName,
    lastName,
    email: emailLowercase,
    password,
  };
  data.push(user); // Add the new user to the existing data

  const myJSON = JSON.stringify(data);
  localStorage.setItem("UserData", myJSON); // Store the updated data back into local storage

  // Redirect to login page after successful signup
  window.location.href = "../index.html";
});

function openLogIn() {
  window.location.assign("../index.html");
}
