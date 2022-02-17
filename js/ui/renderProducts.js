import { baseUrl } from "../constants/api.js";

export function renderProducts(productsToRender) {
  const productsContainer = document.querySelector(".product-row");

  productsContainer.innerHTML = "";

  productsToRender.forEach((product) => {
    productsContainer.innerHTML += `
                                           <div class="col">
                                          <div class="card h-100">
                                            <a href="details.html?id=${product.id}">
                                            <img src="${baseUrl}${product.image.url}" class=" card-img-top"
                                            alt="${product.image.alternativeText}">
                                            <div class="card-body">
                                            <h3 class="card-text">${product.title}</h3>
                                            </div>
                                              <div class="card-footer">
                                                <h5>Price:${product.price},-</h5>
                                              </div>
                                              </a>
                                          </div>
                                          </div>
                                          `;
  });
}
