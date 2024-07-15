document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const imgUrl = document.getElementById("imgUrl").value;
    const password = document.getElementById("password").value;
    const country = document.getElementById("country").value;
    
    const user = { fullName, email, imgUrl, password, country };
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    
    alert("Sign Up Successful");
    window.location.href = "/test_5/index.html";
});
