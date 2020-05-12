import * as teddy from "teddytags";
import "./App.css";
export default class App extends teddy.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="App">
        <img src="teddy.svg" alt="Logo" />
        <h1>
          Edit <code>src/index.js</code> and save to reload.
        </h1>
      </div>
    );
  }
}
