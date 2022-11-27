'use strict';

// Header Sticky & Back to Top Button
const navbar = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 150) {
        document.getElementById("navbar").style.transition = "none";
        navbar.classList.add("active");
        backTopBtn.classList.add("active");
        navbar.classList.add("navbar-anim");
    } else {
        document.getElementById("navbar").style.transition = "all 1s";
        navbar.classList.remove("active");
        backTopBtn.classList.remove("active");
        navbar.classList.remove("navbar-anim");
    }
})


// Show upload image
function readURL(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            $('#imageResult').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(function () {
    $('#upload').on('change', function () {
        readURL(input);
    })
})

// Show upload image name
const input = document.getElementById('upload');
const infoArea = document.getElementById('upload-label');

input.addEventListener('change', showFileName);
function showFileName(e) {
    const input = e.srcElement;
    const fileName = input.files[0].name;
    infoArea.textContent = 'File name: ' + fileName;
}