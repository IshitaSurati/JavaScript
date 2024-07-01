// product.js

import navbar from "../components/Navbar.js";
import getValue from "../components/helper.js";

// Set up navbar
document.getElementById("navbar").innerHTML = navbar();

// Retrieve products and cartList from localStorage
let products = JSON.parse(localStorage.getItem("products")) || [];
let cartList = JSON.parse(localStorage.getItem("cartList")) || [];

// Function to check if product exists in cart
const isExistsInCart = (id) => {
    return cartList.some(item => item.id === id);
};

// Function to handle adding product to cart
const handleCartList = (product) => {
    if (isExistsInCart(product.id)) {
        cartList = cartList.map(item => {
            if (item.id === product.id) {
                item.qty += 1;
            }
            return item;
        });
        alert("Quantity updated in cart.");
    } else {
        cartList.push({ ...product, qty: 1 });
        alert("Product added to cart.");
    }
    localStorage.setItem("cartList", JSON.stringify(cartList));
};

// Function to display products on the page
const displayProducts = (products) => {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-item");

        const img = document.createElement("img");
        img.src = product.img;
        img.alt = product.title;
        img.classList.add("card-img-top");

        const title = document.createElement("h3");
        title.textContent = product.title;

        const price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;

        const category = document.createElement("p");
        category.textContent = `Category: ${product.category}`;

        const btnBuy = document.createElement("button");
        btnBuy.textContent = "Buy";
        btnBuy.addEventListener("click", () => handleCartList(product));

        card.append(img, title, price, category, btnBuy);
        productList.appendChild(card);
    });
};

// Sorting products by price (Low to High or High to Low)
const sortProducts = (orderBy) => {
    if (orderBy === "LTH") {
        products.sort((a, b) => a.price - b.price);
    } else {
        products.sort((a, b) => b.price - a.price);
    }
    displayProducts(products);
};

// Filter products by category
const filterProducts = (category) => {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
};

// Handling initial display of products
displayProducts(products);

// Event listeners for sorting and filtering buttons
document.getElementById("LTH").addEventListener("click", () => sortProducts("LTH"));
document.getElementById("HTL").addEventListener("click", () => sortProducts("HTL"));
document.getElementById("men").addEventListener("click", () => filterProducts("Men"));
document.getElementById("women").addEventListener("click", () => filterProducts("Women"));
document.getElementById("kids").addEventListener("click", () => filterProducts("Kids"));


// const handleSearch = (value) => {
//     const searchValue = value.toLowerCase();
//     const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchValue));
//     displayProducts(filteredProducts);
// }