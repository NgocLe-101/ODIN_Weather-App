import { getData, manipulateAPI } from "./API";
import { renderHomepage } from "./UI";
import { initEventListeners } from "./EventManager";

export default class App {
  static start() {
    getData()
      .then((data) => {
        return manipulateAPI(data);
      })
      .then((content) => {
        console.log(content);
        renderHomepage(content);
        initEventListeners();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
