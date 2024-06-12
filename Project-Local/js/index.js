import navbar from "../components/navbar.js";

let isLogin = localStorage.getItem("isLogin") || false;
if (!isLogin) {
    window.location.href = "/Project-Local/pages/signup.html";
}

document.getElementById("navbar").innerHTML = navbar();
