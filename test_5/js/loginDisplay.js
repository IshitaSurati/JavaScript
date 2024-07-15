document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    
    if (loggedInUser && loggedInUser.email === email && loggedInUser.password === password) {
        alert("Login Successful");
        window.location.href = "/test_5/index.html";
    } else {
        alert("Invalid Email or Password");
    }
});
