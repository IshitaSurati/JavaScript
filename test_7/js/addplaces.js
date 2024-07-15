import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

document.getElementById('addplaces').addEventListener('submit', event => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const img1 = document.getElementById('img1').value;
    const img2 = document.getElementById('img2').value;
    const img3 = document.getElementById('img3').value;
    const cost = document.getElementById('cost').value;
    const desc = document.getElementById('desc').value;

    let products = JSON.parse(localStorage.getItem("products")) || [];
    const newPlace = {
        id: Date.now(),
        title,
        img1,
        img2,
        img3,
        cost,
        desc,
        likes: 0
    };

    products.push(newPlace);
    localStorage.setItem("products", JSON.stringify(products));

    alert('Place added successfully!');
    window.location.href = '/test_7/index.html';
});
