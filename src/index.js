import React from "react";
import ReactDOM from "react-dom";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
