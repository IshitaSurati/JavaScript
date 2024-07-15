import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let products = JSON.parse(localStorage.getItem("products")) || [];

const ProductItems = (data) => {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    data.forEach(e => {
        let div = document.createElement("div");
        div.className = "product-item";

        let img = document.createElement("img");
        img.src = e.img1;
        img.alt = e.title;

        let title = document.createElement("h2");
        title.textContent = e.title;

        let price = document.createElement("p");
        price.className = "price";
        price.textContent = `$${e.cost}`;

        let description = document.createElement("p");
        description.textContent = e.desc;

        let btn1 = document.createElement("button");
        btn1.className = "btn btn-like";
        btn1.textContent = `LIKE ${e.likes || 0}`;

        btn1.addEventListener("click", () => {
            e.likes = (e.likes || 0) + 1;
            localStorage.setItem("products", JSON.stringify(products));
            btn1.textContent = `LIKE ${e.likes}`;
        });

        let btn2 = document.createElement("button");
        btn2.className = "btn btn-wishlist";
        btn2.textContent = "WISHLIST";
        btn2.addEventListener("click", () => {
            let wishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
            wishlist.push(e);
            localStorage.setItem("Wishlist", JSON.stringify(wishlist));
            alert('Added to Wishlist!');
        });

        div.append(img, title, price, description, btn1, btn2);

        div.addEventListener("click", () => {
            localStorage.setItem("id", e.id);
            window.location.href = "/test_7/pages/Details.html";
        });

        productList.appendChild(div);
    });
};

ProductItems(products);

const HandleCost = (order) => {
    let temp = [...products];
    temp.sort((a, b) => order === "priceLTH" ? a.cost - b.cost : b.cost - a.cost);
    ProductItems(temp);
};

const HandleLikes = (order) => {
    let temp = [...products];
    temp.sort((a, b) => order === "likesLTH" ? (a.likes || 0) - (b.likes || 0) : (b.likes || 0) - (a.likes || 0));
    ProductItems(temp);
};

const handleSearch = (value) => {
    const searchValue = value.toLowerCase();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchValue));
    ProductItems(filteredProducts);
};

const handleSearchData = (e) => {
    e.preventDefault();
    let value = document.getElementById("searchValue").value;
    handleSearch(value);
};

document.getElementById("likesLTH").addEventListener("click", () => HandleLikes("likesLTH"));
document.getElementById("likesHTL").addEventListener("click", () => HandleLikes("likesHTL"));
document.getElementById("priceLTH").addEventListener("click", () => HandleCost("priceLTH"));
document.getElementById("priceHTL").addEventListener("click", () => HandleCost("priceHTL"));
document.getElementById("searchValue").addEventListener("input", handleSearchData);
document.getElementById("search-form").addEventListener("submit", handleSearchData);
