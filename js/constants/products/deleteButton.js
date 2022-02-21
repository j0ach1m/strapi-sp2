import { baseUrl } from "../api.js";
import { getToken } from "../../ui/storage.js";

export default function deleteButton(id) {
  const container = document.querySelector(".delete-container");

  container.innerHTML = ` <button type="button" class="delete">Delete</button>`

  const button = document.querySelector("button.delete");

  button.onclick = async function(){
    const doDelete = confirm("This is going to Delete the Item")

    if (doDelete){
      const url = baseUrl + "/products/" + id;

      const token = getToken();

      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();

        location.href = "/";
      }catch(error){
        console.log(error)
      }
    }
  };

}