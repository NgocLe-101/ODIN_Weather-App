import { getDataExp, manipulateAPI } from "./API";
import { renderHomepage } from "./UI";
import { initEventListeners } from "./EventManager";

export default class App {
  static start() {
    getDataExp()
      .then((data) => {
        return manipulateAPI(data);
      })
      .then((content) => {
        renderHomepage(content);
        initEventListeners();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
