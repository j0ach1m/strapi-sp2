import displayMessage from "./constants/displayMessage.js";
import createMenu from "./constants/createMenu.js";
import { getToken } from "./ui/storage.js";
import { baseUrl } from "./constants/api.js";

const token = getToken();

if (!token){
  location.href = "/";
}

createMenu();

const form = document.querySelector("form");
const name = document.querySelector("#name");
const img = document.querySelector("#image");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event){
  event.preventDefault();

  message.innerHTML = "";

  const nameValue = name.value.trim();
  const priceValue = parseFloat(price.value);
  const imgValue = img.value.trim();
  const descriptionValue = description.value.trim();

  if (nameValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || imgValue.length === 0 || descriptionValue.length === 0){
    return displayMessage("warning", "supply propper values", ".message-container");
  }

  addProduct(nameValue,priceValue, imgValue, descriptionValue);
}

async function addProduct(name, price, img, description){
  const url = baseUrl + "/products";

  const data = JSON.stringify({name: name, price: price, img: image, description: description });

  const options ={
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
  }

  try {
    const response = await fetch(url, options);
    const json = await response.json()

    if( json.created_at){
      displayMessage("success", "product created", ".message-container");
      form.reset()
    }

    if(json.error){
      displayMessage("error", json.message, ".message-container")
    }

  }catch(error){
    console.log(error)
    displayMessage("error", error, ".message-container")
  }
}

