// script.js
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    // Get the values from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    // Validate password
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Save user data to localStorage
    const user = {
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to login page
    window.location.href = "index.html";  // Assuming index.html is your login page
});
