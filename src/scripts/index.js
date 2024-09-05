/* src/scripts/index.js */
import "../styles/index.css";
import { getDataExp, manipulateAPI } from "./API";
import { renderHomepage } from "./UI";

getDataExp()
  .then((data) => {
    return manipulateAPI(data);
  })
  .then((content) => {
    renderHomepage(content);
  })
  .catch((err) => {
    console.log(err);
  });
