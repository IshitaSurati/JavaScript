import { createNavbar } from '/test_7/components/navbar.js';
import { createHomePage } from '/test_7/components/home.js';
import { createSignupPage } from '/test_7/js/signup.js';
import { createLoginPage } from '/test_7/js/login.js';
import { createAddPlacePage } from '/test_7/js/addPlace.js';

const navbar = document.getElementById('navbar');
const content = document.getElementById('content');

function loadPage(page) {
    switch (page) {
        case 'home':
            createHomePage(content);
            break;
        case 'signup':
            createSignupPage(content);
            break;
        case 'login':
            createLoginPage(content);
            break;
        case 'addplace':
            createAddPlacePage(content);
            break;
        default:
            createHomePage(content);
    }
}

window.addEventListener('load', () => {
    createNavbar(navbar, loadPage);
    loadPage('home');
});
