"use strict";
import review from "../data/testimonials.json" assert {type: "json"};
import lightbox from "../data/lightbox.json" assert {type: "json"};
import question from "../data/faq.json" assert {type: "json"};


// testimonials
const reviewList = document.getElementById("review-list");

function renderReviews(data) {
    return data.map(values => `<div class="carousel-item">
        <article class="content-testimonials mt-5">
            <div class="row one-content" data-aos="fade-right" data-aos-duration="1000">
                <div class="col-lg-4 text-content">
                    <img src="static/img/quotes.png" alt="quote" class="quotes" />
                    <div class="user-testimonials">
                        <h3>${values.headlines}</h3>
                        <p>${values.review}</p>
                        <div class="users mt-4">
                            <span>${values.name}</span>
                            <br/>
                            <span>${values.signature}</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 hero-content">
                    <img src="${values.image}" alt="${values.alternateText}">
                </div>
            </div>
            <div class="slider" data-aos="fade-left" data-aos-duration="1000">
                <div class="icon-slide">
                    <i class="bi bi-arrow-left"></i>
                    <i class="bi bi-arrow-right"></i>
                </div>
                <div class="slider-text">
                    <h4>Testimonial ${values.id}</h4>
                    <p>out of <span>04</span> testimonials</p>
                </div>
            </div>
        </article>
    </div>`).join('');
}

reviewList.innerHTML = renderReviews(review);
reviewList.firstElementChild.classList.add("active")


// gallery box
const galleryList = document.getElementById("image-gallery");

function renderImages(data) {
    return data.map(values => `<a href="${values.image}" class="fancybox ${values.class}" data-fancybox="gallery"
        data-aos="fade-down" data-aos-duration="1000">
    </a>`).join('');
}

galleryList.innerHTML = renderImages(lightbox);


// FAQ
const faqItems = document.getElementById("faq-list");

function renderQuestions(data) {
    return data.map(values => `<div class="faq-item mb-3" data-aos="fade-down" data-aos-duration="1000">
        <a class="btn" data-bs-toggle="collapse" href="#collapseExample${values.id}" role="button"
            aria-expanded="false" aria-controls="collapseExample${values.id}">
            <i class="fa-solid fa-leaf"></i>${values.question}<i
                class="bi bi-chevron-down fw-bold"></i>
        </a>
        <div class="collapse" id="collapseExample${values.id}">
            <div class="text-accordion">${values.answer}</div>
        </div>
    </div>`).join('');
}

faqItems.innerHTML = renderQuestions(question);


