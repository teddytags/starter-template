import * as teddy from "teddytags";
import "./App.css";
import svg from "../static/teddy.svg";
export default class App extends teddy.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="App">
        <div id="img" innerHTML={svg} />
        <h1>
          Edit <code>src/index.js</code> and save to reload.
        </h1>
        <p>Hover that bear for some jello.</p>
      </div>
    );
  }
}
