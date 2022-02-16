import { renderProducts } from "./renderProducts.js";

export function searchProducts(products) {
  const search = document.querySelector(".form-control");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProducts = products.filter(function (item) {
      if (item.title.toLowerCase().includes(searchValue)) {
        return true;
      }
    });

    renderProducts(filteredProducts);
  };
}
