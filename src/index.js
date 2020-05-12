import * as teddy from "teddytags";
import App from "./components/App";
//Fetch API Polyfill
import "unfetch";
const bootstrap = () => {
  teddy.render(<App />, document.querySelector("#app"));
  if ("serviceWorker" in navigator) {
    const sw = "/service-worker.js";
    if (
      ["localhost", "127.0.0.1", "192.168.0"].some(
        (url) => !window.location.host.includes(url)
      )
    )
      navigator.serviceWorker
        .register(sw)
        .then(() => {
          console.log("Content cached for offline use.");
        })
        .catch((e) => {
          console.log("Couldn't cache content." + e);
        });
  }
};
bootstrap();
