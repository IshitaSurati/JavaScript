export function createNavbar(container, loadPage) {
    container.innerHTML = `
        <img src="images/logo.png" alt="Logo">
        <nav>
           <a href="/test_7/index.html" data-page="home">Home</a>
            <a href="/test_7/pages/signup.html" data-page="signup">Sign Up</a>
            <a href="/test_7/pages/login.html" data-page="login">Login</a>
            <a href="/test_7/pages/addplace.html" data-page="addplace">Add Place</a>
        </nav>
    `;

    container.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = event.target.dataset.page;
            loadPage(page);
        });
    });
}
