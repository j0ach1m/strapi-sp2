import { baseUrl } from "../constants/api.js";

export function renderProducts(productsToRender) {
  const productsContainer = document.querySelector(".product-row");

  productsContainer.innerHTML = "";

  productsToRender.forEach((product) => {
    let imageCheck = "";
    if (product.image) {
      imageCheck = baseUrl + product.image.url;
    }
    if (product.image_url) {
      imageCheck = product.image_url;
    }

    productsContainer.innerHTML += `
                                           <div class="col">
                                          <div class="card h-100">
                                            <a class="product-img" href="edit.html?id=${product.id}">
                                            <img src="${imageCheck}" class="card-img-top"
                                            alt="${product.title}">
                                            <div class="card-body">
                                            <h3 class="card-text">${product.title}</h3>
                                            </div>
                                              <div class="card-footer">
                                                <h5>Price: ${product.price} ,-</h5>
                                              </div>
                                              </a>
                                          </div>
                                          </div>
                                          `;
  });
}
