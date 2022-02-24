import { baseUrl } from "./constants/api.js";
import { productsUrl } from "./products.js";
import displayMessage from "./constants/displayMessage.js";
import { getExistingItem } from "./ui/cartFunction.js";

const detailContainer = document.querySelector(".detail-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

detailContainer.innerHTML = "";

const id = params.get("id");

const url = productsUrl + 33;
console.log("urltest", url);

(async function () {
  try {
    const response = await fetch(url);
    const details = await response.json();
    const detail = details;

document.title = detail.title;



    detailContainer.innerHTML += `
                                          <div class="card h-100">
                                          <h1 class="card-title">${detail.title}</h1>
                                          <img src="${detail.image_url}" class=" card-img-top"
                                            alt="${detail.title}">
                                            <div class="card-body">
                                            <p class="card-text">${detail.description}</p>
                                            </div>
                                              <div class="card-footer">
                                                <h5>Price:${detail.price},-</h5>
                                                <button class="btn btn-success" data-id="${detail.id}" data-img="${detail.image.formats.small.url}"data-name="${detail.title}" data-price="${detail.price}" type="submit">Add to Cart</button>
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
        displayMessage("success", "item added to cart", ".detail-container");
    }

    function saveItems(items){
      localStorage.setItem("product", JSON.stringify(items))
    }

  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".detail-container");
  }
})();
