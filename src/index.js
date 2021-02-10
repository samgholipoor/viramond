import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";

import "@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
