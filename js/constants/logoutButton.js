import { clearStorage } from "../ui/storage.js";

export default function logoutButton(){
  const button = document.querySelector("#button");

  if (button) {
    button.onclick = function(){
      const doLogout = confirm("Are you sure?")

      if (doLogout) {
        location.href ="/";
      }
    }
  }

}