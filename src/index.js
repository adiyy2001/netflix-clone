import React from "react";
import { render } from "react-dom";
import App from "./app";
import { GlobalStyles } from "./global-style";
import "normalize.css";
render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
