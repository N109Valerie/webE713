function validateLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    // Simple validation check for demo purposes
    if (email === "fishyrafayel@gmail.com" && password === "bublie") {
      return true; // Allow form submission
    } else {
      errorMessage.textContent = "Invalid email or password.";
      return false; // Prevent form submission
    }
  }
  
