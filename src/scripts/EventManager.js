import { getData, manipulateAPI } from "./API";
import { setActiveLoader, updateContent } from "./UI";
function _initSearchBar() {
  const searchBarInput = document.querySelector(
    ".header .search-bar-wrapper input"
  );
  searchBarInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      setActiveLoader(true);
      const searchValue = searchBarInput.value.toLowerCase().replace(" ", "");
      getData(searchValue)
        .then((apiReturnVal) => {
          return manipulateAPI(apiReturnVal);
        })
        .then((data) => {
          console.log(data);
          updateContent(data);
          setActiveLoader(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
}

function initEventListeners() {
  _initSearchBar();
}

export { initEventListeners };
