const getProductDetails = async () => {
    const productId = localStorage.getItem('selectedProductId');
    if (!productId) {
        document.getElementById("product-details").innerHTML = "<p>Product not found.</p>";
        return;
    }
        let req = await fetch(`https://dummyjson.com/products/${productId}`);
        let product = await req.json();
        displayProductDetails(product);
        console.error("Error fetching product details:", error);
        document.getElementById("product-details").innerHTML = "<p>Product details could not be loaded.</p>";
};

const displayProductDetails = (product) => {
    const container = document.getElementById("product-details");
    container.innerHTML = `
        <div class="text-center">
            <img src="${product.images}" alt="${product.title}" class="img-fluid mb-3" style="max-height: 300px; object-fit: contain;">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Rating:</strong> ${product.rating} (${product.rating} reviews)</p>
            <button class="btn btn-primary">Buy Now</button>
        </div>
    `;
};
getProductDetails();
