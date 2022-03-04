import { getUsername } from "../ui/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
  const { pathname } = document.location;

  const container = document.querySelector(".menu-container");

  const username = getUsername();

  let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : "" }">Login</a>`;

  if (username) {
    authLink = `<li class="nav-item"><a href="add.html" class="${pathname === "/add.html" ? "active" : "" }"> Add Product</a></li>
                <li class="nav-item"><a href="product.html" class="${pathname === "/product.html" ? "active" : "" }"> Edit Product</a></li>
                 <button id="logout-button"> Logout ${username} </button>`;
  }

  container.innerHTML = ` <ul class="newMenu nav-item">
                            ${authLink}
                            </ul>`;
  logoutButton();
}
