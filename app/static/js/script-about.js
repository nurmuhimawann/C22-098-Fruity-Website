"use strict";
import profile from "../data/profile.json" assert {type: "json"};

const cardList = document.getElementById("card-list");

function returnCards(data) {
    return data.map(values => `<div class="card-items" data-aos="fade-down" data-aos-duration="1000">
        <div class="profile-picture mb-3">
            <picture class="line-pict">
                <img src="${values.image}" alt="${values.alternateText}" class="picture" />
            </picture>
        </div>
        <div class="card-information">
            <h3>${values.name}</h3>
            <span class="roles">${values.roles}</span>
            <p class="desc">
            ${values.description}
            </p>
        </div>
        <div class="mail-box mb-3">
            <p>${values.email}</p>
        </div>
        <div class="socmed-icons">
            <a href="${values.socmed.twitter}" target="_blank"><i
                class="bi bi-twitter"></i></a>
            <a href="${values.socmed.instagram}" target="_blank"><i
                class="bi bi-instagram"></i></a>
            <a href="${values.socmed.linkedin}" target="_blank"><i
                class="bi bi-linkedin"></i></a>
            <a href="${values.socmed.github}" target="_blank"><i class="bi bi-github"></i></a>
        </div>
        <img src="static/img/rectangle-bottom.svg" alt="rectangle" class="rect-bottom" />
    </div>`).join('');
}

cardList.innerHTML = returnCards(profile);