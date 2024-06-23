import navbar from "../components/Navbar";

// Set up navbar
const isLogin = localStorage.getItem("isLogin") || false;
const userdetails = JSON.parse(localStorage.getItem("user"));
document.getElementById("navbar").innerHTML = navbar();

if (!isLogin) {
    window.location.href = "/Project-Local/pages/Signup.html";
}

if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username);
} else {
    document.getElementById("navbar").innerHTML = navbar();
}

// Retrieve cartList from localStorage
let cartList = JSON.parse(localStorage.getItem("cartList")) || [];

// Function to update cartList and localStorage
const updateCartList = (updatedCartList) => {
    cartList = updatedCartList;
    localStorage.setItem("cartList", JSON.stringify(cartList));
    displayCart();
};

// Function to handle quantity adjustments
const handleQty = (index, opr) => {
    if (opr === "+") {
        cartList[index].qty += 1;
    } else if (opr === "-") {
        if (cartList[index].qty > 1) {
            cartList[index].qty -= 1;
        } else {
            cartList.splice(index, 1);
        }
    }
    updateCartList(cartList);
};

// Function to handle deletion of item from cart
const handleDelete = (index) => {
    cartList.splice(index, 1);
    updateCartList(cartList);
};

// Function to display cart items
const displayCart = () => {
    const cartTableBody = document.getElementById("cartList");
    cartTableBody.innerHTML = "";
    cartList.forEach((item, index) => {
        const tr = document.createElement("tr");

        const tdImg = document.createElement("td");
        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.title;
        img.classList.add("cart-img");
        tdImg.appendChild(img);

        const tdTitle = document.createElement("td");
        tdTitle.textContent = item.title;

        const tdCategory = document.createElement("td");
        tdCategory.textContent = item.category;

        const tdPrice = document.createElement("td");
        tdPrice.textContent = `$${item.price}`;

        const tdQty = document.createElement("td");
        const btnMinus = document.createElement("button");
        btnMinus.textContent = "-";
        btnMinus.addEventListener("click", () => handleQty(index, "-"));

        const spanQty = document.createElement("span");
        spanQty.textContent = item.qty;

        const btnPlus = document.createElement("button");
        btnPlus.textContent = "+";
        btnPlus.addEventListener("click", () => handleQty(index, "+"));

        tdQty.append(btnMinus, spanQty, btnPlus);

        const tdTotal = document.createElement("td");
        tdTotal.textContent = `$${item.price * item.qty}`;

        const tdAction = document.createElement("td");
        const btnRemove = document.createElement("button");
        btnRemove.textContent = "Remove";
        btnRemove.addEventListener("click", () => handleDelete(index));
        tdAction.appendChild(btnRemove);

        tr.append(tdImg, tdTitle, tdCategory, tdPrice, tdQty, tdTotal, tdAction);
        cartTableBody.appendChild(tr);
    });

    // Display total cart amount
    const totalAmount = cartList.reduce((total, item) => total + (item.price * item.qty), 0);
    document.getElementById("cartTotal").textContent = `$${totalAmount.toFixed(2)}`;
};

// Initial display of cart items
displayCart();
