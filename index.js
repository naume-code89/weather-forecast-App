function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document. querySelector("#heading");
  cityElement.innerHTML = searchInput.value;
}

let searFormElement = document.querySelector("#search-form");
searFormElement.addEventListener("submit", searchSubmit);