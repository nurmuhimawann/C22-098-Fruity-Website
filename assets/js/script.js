'use strict';

// Header Sticky & Back to Top Button
const navbar = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 150) {
        navbar.classList.add("active");
        backTopBtn.classList.add("active");
        navbar.classList.add("navbar-anim");
    } else {
        navbar.classList.remove("active");
        backTopBtn.classList.remove("active");
        navbar.classList.remove("navbar-anim");
    }
})