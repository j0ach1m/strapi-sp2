import { getExistingItem } from "./ui/cartFunction.js";

import { baseUrl } from "./constants/api.js";

const cartSum = document.querySelector(".sum");

const cartItems = getExistingItem();

const cartContainer = document.querySelector(".cart");

if (cartItems.length === 0) {
  cartContainer.innerHTML = `<div class="sorry"><h4>You nothing in your cart, Yet.</h4></div>`;
}
const countTheSum = function () {
  let sum = 0;

  cartItems.forEach((item) => {
    const itemPrice = item.price;
    let price = parseFloat(itemPrice);
    sum += price;
  });
  return sum;
};
cartSum.innerHTML += `<div><h4>Total: ${countTheSum().toFixed(2)},-</h4></div>`;

cartItems.forEach((item) => {


  cartContainer.innerHTML += `
                        <div class="card" style="max-width: 540px;">
                          <div class="row">
                            <div class="col-4 background-img" style="background: url(${item.img})">

                            </div>
                            <div class="col-8">
                              <div class="card-body text-center">
                                <h2 class="card-title">${item.name}</h2>
                                <p class="card-text">Price: ${item.price}</p>
                                <a href="details.html?id=${item.id}">View More</a>
                              </div>
                            </div>
                          </div>
                        </div>`;
});
