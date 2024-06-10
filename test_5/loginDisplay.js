document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;
   let storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        document.getElementById("userimg").src = ""; 
        document.getElementById("info").innerHTML = `
            <p>Name: ${storedUser.fullName}</p>
            <p>Email: ${storedUser.email}</p>
            <p>Phone: ${storedUser.phone}</p>
        `;
        window.location.href = "./index.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
