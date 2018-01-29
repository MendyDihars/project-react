// MODULES
import React from "react";
import ReactDOM from "react-dom";

// COMPONENTS
import HelloWorld from "./components/HelloWorld";
import LetterAnimation from "./components/LetterAnimation";

// SCSS
import "./styles/app.scss";

ReactDOM.render(
  <HelloWorld />, document.getElementById('hello')
);
ReactDOM.render(
  <LetterAnimation />, document.getElementById('letterAnimation')
);
