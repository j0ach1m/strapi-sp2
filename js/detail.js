import { baseUrl } from "./constants/api.js";
import { productsUrl } from "./products.js";
import displayMessage from "./constants/displayMessage.js";
import { getExistingItem } from "./ui/cartFunction.js";

const detailContainer = document.querySelector(".detail-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

detailContainer.innerHTML = "";

const id = params.get("id");

const url = productsUrl + id;


(async function () {
  try {
    const response = await fetch(url);
    const details = await response.json();
    const detail = details;

document.title = detail.title;

  let imageCheck = "";
  if (detail.image) {
    imageCheck = baseUrl + detail.image.url;
  }
  if (detail.image_url) {
    imageCheck = detail.image_url;
  }


    detailContainer.innerHTML += `
                                  <div class="card h-100">
                                    <h1 class="card-title">${detail.title}</h1>
                                    <img src="${imageCheck}" class=" card-img-top"alt="${detail.title}">
                                      <div class="card-body">
                                        <p class="card-text">${detail.description}</p>
                                      </div>
                                      <div class="card-footer">
                                        <div class=" d-grid gap-2 col-6 mx-auto">
                                         <h4 class="mx-auto">Price: <span>${detail.price}</span>,-</h4>
                                         <button class="btn btn-success" data-id="${detail.id}" data-img="${imageCheck}"data-name="${detail.title}" data-price="${detail.price}" type="submit">Add to Cart</button>
                                        </div>
                                    </div>
                                  </div>
                                  `;

    const cartBtn = document.querySelectorAll(".btn");
    cartBtn.forEach((button)=>{
      button.addEventListener("click", handleClick)


    });

    function handleClick() {
      const id = this.dataset.id;
      const name = this.dataset.name;
      const price = this.dataset.price;
      const img = this.dataset.img;



      const currentCart = getExistingItem()
      const item = {id: id, img: img, name: name, price: price};

      currentCart.push(item);
      saveItems(currentCart)
       detailContainer.innerHTML += `<div class="success-message">
                                      <h5>Item successfully added to cart</h5>
                                      </div>`;
    }

    function saveItems(items){
      localStorage.setItem("product", JSON.stringify(items))
    }

  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".detail-container");
  }
})();
