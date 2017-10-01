import React from "react";
import ReactDOM from "react-dom";
import { using } from "./demo";

const Demo = using({
  createElement: React.createElement,
  Component: React.Component,
  render: ReactDOM.render
});

ReactDOM.render(<Demo />, document.getElementById("root"));
