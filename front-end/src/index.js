import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initContract } from "./utils/utils";

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    )
  })
  .catch(console.error)