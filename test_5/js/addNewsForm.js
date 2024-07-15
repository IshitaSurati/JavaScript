document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const img = document.getElementById("img").value;
    const country = document.getElementById("country").value;
    const description = document.getElementById("description").value;
    
    const news = { title, img, country, description };
    let newsList = JSON.parse(localStorage.getItem("News")) || [];
    newsList.push(news);
    localStorage.setItem("News", JSON.stringify(newsList));
    
    alert("News Added Successfully");
    window.location.href = "/test_5/index.html";
});
