// login.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    // Get values from the login form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
        if (storedUser.email === email && storedUser.password === password) {
            alert("Login successful!");
            // Redirect to home.html after successful login
            window.location.href = "home.html";
        } else {
            alert("Invalid email or password.");
        }
    } else {
        alert("No user found. Please sign up first.");
    }
});
