document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        document.getElementById("userimg").src = loggedInUser.imgUrl;
        document.getElementById("info").innerHTML = `
            <p>Name: ${loggedInUser.fullName}</p>
            <p>Email: ${loggedInUser.email}</p>
            <p>Country: ${loggedInUser.country}</p>
        `;
    }

    const News = JSON.parse(localStorage.getItem("News")) || [];
    const newsContainer = document.getElementById("News");

    function displayNews(newsList) {
        newsContainer.innerHTML = "";
        newsList.forEach((news) => {
            const newsDiv = document.createElement("div");
            newsDiv.classList.add("col-md-4", "mb-4");
            newsDiv.innerHTML = `
                <div class="card">
                    <img src="${news.img}" class="card-img-top" alt="${news.title}">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.description}</p>
                        <p class="card-text"><small class="text-muted">${news.country}</small></p>
                    </div>
                </div>
            `;
            newsContainer.appendChild(newsDiv);
        });
    }

    displayNews(News);

    document.querySelectorAll("#Subnavbar a").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const country = link.getAttribute("data-country");
            const filteredNews = News.filter((news) => news.country === country);
            displayNews(filteredNews);
        });
    });
});
