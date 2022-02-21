import { getUserName } from "../ui/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu(){
  const { pathname } = document.location;

  const container = document.querySelector(".menu-container");

  const username = getUserName();

  let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

  if (username) {
    authLink = `<a href="add.html" class="${pathname === "/add.html" ? "active" : ""}"> Add Product</a>
                <button id="logout"> Logout ${username}</button>`;
  }

  container.innerHTML = ` <div class="newMenu">
                            <a href="/"class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a>
                            ${authLink}
                            </div>`;

    logoutButton()

}