import HomeScreen from "./screens/HomeScreen.js";
import { parseResquestUrl } from "./utils.js";
import Error404Screen from "./screens/Error404Screen.js";
import ProductScreen from "./screens/ProductScreen.js";
const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
};

const router = async () => {
  const request = parseResquestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? `/:id` : "") +
    (request.verb ? `/${request.verb}` : "");
  console.log(request.verb);
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const main = document.getElementById("main-container");
  main.innerHTML = await screen.render();
  await screen.afterRender();
};
window.addEventListener("load", router);
window.addEventListener("hashchange", router);

console.log("log");
