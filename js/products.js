import { baseUrl } from "./constants/api.js";
import displayMessage from "./constants/displayMessage.js";
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searcProducts.js";

export const productsUrl = baseUrl + "/products/";

(async function () {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();

    renderProducts(products);
    searchProducts(products);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".products");
  }
})();
