document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailLowercase = email.toLowerCase();

  const userData = JSON.parse(localStorage.getItem("UserData"));
  const user = userData.find((user) => user.email === emailLowercase);

  document.querySelector('.sameEmail').style.display = 'none';
  document.querySelector('.samePassword').style.display = 'none';

  if (user) {
    if (user.password === password) {
      alert("Login successful!");
      
      // Store the logged-in user's details in local storage
      const loggedUser = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

      // Redirect the user to the profile page
      window.location.href = "HTML files/profile.html";
    } else {
      // Show the password error message
      document.querySelector('.samePassword').style.display = 'block';
    }
  } else {
    // Show the email error message
    document.querySelector('.sameEmail').style.display = 'block';
  }
});


function openSignUp() {
  window.location.assign("HTML files/signup.html");
}