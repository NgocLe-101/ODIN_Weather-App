import { getData, manipulateAPI } from "./API";
import { updateContent } from "./UI";
function _initSearchBar() {
  const searchBarInput = document.querySelector(
    ".header .search-bar-wrapper input"
  );
  searchBarInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const searchValue = searchBarInput.value.toLowerCase().replace(" ", "");
      getData(searchValue)
        .then((apiReturnVal) => {
          return manipulateAPI(apiReturnVal);
        })
        .then((data) => {
          console.log(data);
          updateContent(data);
        });
    }
  });
}

function initEventListeners() {
  _initSearchBar();
}

export { initEventListeners };
