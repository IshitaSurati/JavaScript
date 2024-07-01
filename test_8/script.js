let products = [];

const getData = async () => {
    try {
        let req = await fetch("https://dummyjson.com/products/");
        if (!req.ok) {
            throw new Error("Failed to fetch products.");
        }
        let res = await req.json();
        products = res;
        displayProducts(products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

const displayProducts = (products) => {
    const dataContainer = document.getElementById("data");
    dataContainer.innerHTML = "";

    const row = document.createElement('div');
    row.classList.add('row', 'gy-3');

    products.forEach(product => {
        let col = document.createElement('div');
        col.classList.add('col-md-6');

        let div = document.createElement('div');
        div.classList.add('product', 'p-3', 'border', 'rounded', 'h-100');

        let img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;
        img.classList.add('img-fluid', 'mb-3');

        let title = document.createElement("h5");
        title.textContent = product.title;

        let price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;

        let buyButton = document.createElement("button");
        buyButton.textContent = "Buy";
        buyButton.classList.add('btn', 'btn-primary');
        buyButton.onclick = () => {
            localStorage.setItem('selectedProductId', product.id);
            window.location.href = 'page2.html';
        };

        div.append(img, title, price, buyButton);
        col.append(div);
        row.append(col);
    });

    dataContainer.append(row);
}

const handleSort = (orderBy) => {
    let sortedProducts = [...products];
    if (orderBy === "lth") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    displayProducts(sortedProducts);
}

const handleFilter = (category) => {
    let filteredProducts = [];
    if (category === "all") {
        filteredProducts = products; 
    } else if (category === "makeup") {
        filteredProducts = products.filter(product => product.category === "makeup");
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    displayProducts(filteredProducts);
}

const handleSearch = (value) => {
    const searchValue = value.toLowerCase();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchValue));
    displayProducts(filteredProducts);
}

const handleSearchData = (e) => {
    e.preventDefault();
    const value = getValue("search-input");
    handleSearch(value);
}

const handleInput = (e) => {
    const value = e.target.value;
    handleSearch(value);
}

const getValue = (id) => document.getElementById(id).value;

document.getElementById("htl").addEventListener("click", () => handleSort("htl"));
document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.querySelectorAll("#filter-options li").forEach(item => {
    item.addEventListener("click", (e) => handleFilter(e.target.id));
});
document.getElementById("search-input").addEventListener("input", handleInput);

getData();
