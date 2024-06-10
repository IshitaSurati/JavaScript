let products = JSON.parse(localStorage.getItem('products')) || [];

const uiMaker = (data) => {
    const productsContainer = document.getElementById("product");
    productsContainer.innerHTML = "";

    data.forEach((ele, index) => {
        let div = document.createElement('div');
        div.className = 'product-card';

        let img = document.createElement('img');
        img.src = ele.img;

        let title = document.createElement('h4');
        title.innerHTML = ele.title;

        let price = document.createElement('p');
        price.innerHTML = `Price: $${ele.price}`;

        let category = document.createElement('p');
        category.innerHTML = `Category: ${ele.category}`;

        let buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        let btn1 = document.createElement('button');
        btn1.className = 'delete';
        btn1.innerHTML = "Delete";
        btn1.addEventListener('click', () => deleteProduct(index));

        let btn2 = document.createElement('button');
        btn2.innerHTML = "Buy";
        btn2.addEventListener('click', () => alert('Product bought successfully!'));

        buttonContainer.append(btn1, btn2);
        div.append(img, title, price, category, buttonContainer);
        productsContainer.append(div);
    });
};

const deleteProduct = (index) => {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    uiMaker(products);
};

uiMaker(products);
