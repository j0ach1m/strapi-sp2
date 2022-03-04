import { baseUrl } from "./constants/api.js";
import displayMessage from "./constants/displayMessage.js";
import createMenu from "./constants/createMenu.js";
import { getToken } from "./ui/storage.js";
import deleteButton from "./constants/products/deleteButton.js";

const token = getToken();

createMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const productUrl = baseUrl + "/products/" + id;

if (!token) {
  document.location.href = "details.html?id=" + id;
}

if (!id) {
  document.location.href = "product.html";
}

const form = document.querySelector(".edit-form");
const title = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const imageInput = document.querySelector("#image");
const featured = document.querySelector("#featured");
const message = document.querySelector(".message-container");

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

     let imageCheck = "";
     if (details.image) {
       imageCheck = baseUrl + details.image.url;
     }
     if (details.image_url) {
       imageCheck = details.image_url;
     }

    title.value = details.title;
    price.value = details.price;
    description.value = details.description;
    idInput.value = details.id;
    imageInput.value = imageCheck;
    featured.checked = details.featured;

    deleteButton(details.id);

  } catch (error) {
    console.log(error);
  }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const idValue = idInput.value;
  const imgValue= imageInput.value.trim();
  const featuredValue = featured.checked

  if (
    titleValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    descriptionValue.length === 0
  ) {
    return displayMessage("warning", "Please supply proper values",".message-container");
  }

  updateProduct(titleValue, priceValue, descriptionValue, idValue, imgValue, featuredValue);
}

async function updateProduct(title, price, description, id, image, featured) {
  const url = baseUrl + "/products/" + id;
  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
    image_url: image,
    featured: featured
  });

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);

    if (json.updated_at) {
      displayMessage("success",`product with id: ${json.id} is updated`, ".message-container");
    }

    if (json.error) {
      displayMessage("error", json.message, ".message-container");
    }
  } catch (error) {
    console.log(error);
  }
}
console.log(deleteButton)