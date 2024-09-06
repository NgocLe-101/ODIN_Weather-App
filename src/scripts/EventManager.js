import { getData, manipulateAPI } from "./API";
import { setActiveLoader, toggleErrorScreen, updateContent } from "./UI";
function _initSearchBar() {
  const searchBarInput = document.querySelector(
    ".header .search-bar-wrapper input"
  );
  searchBarInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      setActiveLoader(true);
      toggleErrorScreen(true);
      const searchValue = searchBarInput.value.toLowerCase().replace(" ", "");
      getData(searchValue)
        .then((apiReturnVal) => {
          return manipulateAPI(apiReturnVal);
        })
        .catch((err) => {
          toggleErrorScreen(false);
        })
        .then((data) => {
          toggleErrorScreen(true);
          console.log(data);
          updateContent(data);
          setActiveLoader(false);
        })
        .catch((err) => {
          console.error("On search manipulate Error: ", err);
          setActiveLoader(false);
          toggleErrorScreen(false);
        });
    }
  });
}

function initEventListeners() {
  _initSearchBar();
}

export { initEventListeners };
