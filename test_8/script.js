let products = [];

const getData = async () => {
        let req = await fetch("https://dummyjson.com/products");
        let res = await req.json();
        products = res.products;
        displayProducts(products);
        console.error("Error fetching products:", error);
        const dataContainer = document.getElementById("data");
        dataContainer.innerHTML = "<p>Error fetching products. Please try again later.</p>";
    
};

const displayProducts = (products) => {
    const dataContainer = document.getElementById("data");
    dataContainer.innerHTML = "";

    const row = document.createElement('div');
    row.classList.add('row', 'gy-3');

    if (Array.isArray(products) && products.length > 0) {
        products.forEach(product => {
            let col = document.createElement('div');
            col.classList.add('col-md-6');

            let div = document.createElement('div');
            div.classList.add('product', 'p-3', 'border', 'rounded', 'h-100');
            div.onclick = () => {
                localStorage.setItem('selectedProductId', product.id);
                window.location.href = 'page2.html';
            };

            let img = document.createElement("img");
            img.src = product.thumbnail;
            img.alt = product.title;
            img.classList.add('img-fluid', 'b-3');

            let title = document.createElement("h5");
            title.textContent = product.title;

            let price = document.createElement("p");
            price.textContent = `Price: $${product.price}`;

            let category = document.createElement("p");
            category.textContent = `Category: ${product.category}`;

            let buyButton = document.createElement("button");
            buyButton.textContent = "Buy";
            buyButton.classList.add('btn', 'btn-primary');
            div.append(img, title, price, category, buyButton);
            col.append(div);
            row.append(col);
        });
    } else {
        const col = document.createElement('div');
        col.classList.add('col');
        col.innerHTML = "<p>No products found.</p>";
        row.append(col);
    }

    dataContainer.append(row);
};

const handleSort = (orderBy) => {
    let sortedProducts = [...products];
    if (orderBy === "lth") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    displayProducts(sortedProducts);
};

const filterProducts = (category) => {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
};


const handleSearch = (value) => {
    const searchValue = value.toLowerCase();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchValue));
    displayProducts(filteredProducts);
};

const handleInput = (e) => {
    const value = e.target.value;
    handleSearch(value);
};

document.getElementById("htl").addEventListener("click", () => handleSort("htl"));
document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("beauty").addEventListener("click", () => filterProducts("beauty"));
document.getElementById("fragrances").addEventListener("click", () => filterProducts("fragrances"));
document.getElementById("furniture").addEventListener("click", () => filterProducts("furniture"));
document.getElementById("groceries").addEventListener("click", () => filterProducts("groceries"));
document.getElementById("search-input").addEventListener("input", handleInput);

getData();
