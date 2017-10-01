import React from "react";
import ReactDOM from "react-dom";
import { using } from "./demo";
import "./bleeding-thread";

const Demo = using({
  createElement: React.createElement,
  Component: React.Component,
  render: ReactDOM.render
});

ReactDOM.render(
  [
    <h3 key="1">This section is updated using React</h3>,
    <Demo key="2" />,
    <footer key="3">
      Now try it using <a href="react-fiber.html">React async rendering</a> or{" "}
      <a href="react-fiber.html">Didact Fiber</a>
    </footer>
  ],
  document.getElementById("root")
);
