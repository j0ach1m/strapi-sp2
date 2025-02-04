import { baseUrl } from "./constants/api.js";

import displayMessage from "./constants/displayMessage.js";

import { searchProducts } from "./ui/searcProducts.js";

const heroContainer = document.querySelector(".hero-image");

const heroUrl = baseUrl + "/home";

(async function () {
  try {
    const response = await fetch(heroUrl);
    const json = await response.json();

    heroContainer.innerHTML = "";

    const hero = json;

    heroContainer.innerHTML += `
                              <img src="${baseUrl}${hero.hero_banner.url}"
                                alt="${hero.hero_banner.alternativeText}">
                              `;
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".hero-image");
  }
})();

const featuredContainer = document.querySelector(".featured-container");

featuredContainer.innerHTML = "";

const featuredUrl = baseUrl + "/products?featured=true";

(async function () {
  try {
    const response = await fetch(featuredUrl);
    const featured = await response.json();


    featured.forEach((product) => {



        let imageCheck = "";
        if (product.image) {
          imageCheck = baseUrl + product.image.url;
        }
        if (product.image_url) {
          imageCheck = product.image_url;
        }


      featuredContainer.innerHTML += `<div class="feature-img"><a class="product" href="details.html?id=${product.id}">
                                      <img src="${imageCheck}"
                                      alt="${product.title}"></a></div>
                                  `;



    });
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".featured-container");
  }
})();
