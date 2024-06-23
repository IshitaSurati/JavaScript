import navbar from "../components/Navbar.js";
import getValue from "../components/helper.js";
document.getElementById("navbar").innerHTML = navbar();

let products = JSON.parse(localStorage.getItem("products")) || [];

const handleData = (e) => {
    e.preventDefault();
    let product = {
        title: getValue("title"),
        price: getValue("price"),
        img: getValue("img"),
        category: getValue("category")
    };
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
};

document.getElementById("productData").addEventListener("submit", handleData);
