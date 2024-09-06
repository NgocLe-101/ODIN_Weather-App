import { getData, manipulateAPI } from "./API";
import { renderHomepage, setActiveLoader } from "./UI";
import { initEventListeners } from "./EventManager";

export default class App {
  static start() {
    getData()
      .then((data) => {
        return manipulateAPI(data);
      })
      .then((content) => {
        renderHomepage(content);
        initEventListeners();
        setActiveLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
