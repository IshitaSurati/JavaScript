let News = JSON.parse(localStorage.getItem('News')) || [];

const uiMaker = (data) => {
    const NewsContainer = document.getElementById("News");
    NewsContainer.innerHTML = "";

    data.forEach((ele, index) => {
        let div = document.createElement('div');
        div.className = 'news-card';

        let img = document.createElement('img');
        img.src = ele.img;

        let title = document.createElement('h4');
        title.innerHTML = ele.title;

        let country = document.createElement('h6');
        country.innerHTML = ele.country;
        
        let description = document.createElement('p');
        description.innerHTML = `Description: ${ele.description}`;

        let buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        let likeButton = document.createElement('button');
        likeButton.className = 'like';
        likeButton.innerHTML = `Like (${ele.likes || 0})`;
        likeButton.addEventListener('click', () => handleLike(index));

        let shareButton = document.createElement('button');
        shareButton.className = 'share';
        shareButton.innerHTML = `Share`;
        shareButton.addEventListener('click', () => handleShare(index));
        
        buttonContainer.append(likeButton, shareButton);
        div.append(img, title, country, description, buttonContainer);
        NewsContainer.append(div);
    });
};

const handleLike = (index) => {
    News[index].likes = (News[index].likes || 0) + 1;
    localStorage.setItem("News", JSON.stringify(News));
    uiMaker(News);
};

const handleShare = (index) => {
    alert('News shared successfully!');
};

const handleLinkClick = (index) => {
    News[index].clicks = (News[index].clicks || 0) + 1;
    localStorage.setItem("News", JSON.stringify(News));
    uiMaker(News);
};

uiMaker(News);
