import * as teddy from "teddytags";
import App from "./components/App";
import { register } from "./register-sw";
//Fetch API Polyfill
import "unfetch";
const bootstrap = () => {
  teddy.render(<App />, document.querySelector("#app"));
  register("/service-worker.js");
};
bootstrap();
