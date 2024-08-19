document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Simple validation
    if (username === "user" && password === "password") {
        alert(" Login successful!");
        errorMessage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
        errorMessage.style.color="black";
        errorMessage.textContent = "Invalid username or password.";
    }
});
