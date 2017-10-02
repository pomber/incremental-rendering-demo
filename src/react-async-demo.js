import React from "react";
import ReactDOM from "react-dom";
import { using } from "./demo";
import "./bleeding-thread";

const AsyncComponent = React.unstable_AsyncComponent;
const Demo = using({
  createElement: React.createElement,
  Component: React.Component,
  render: ReactDOM.render
});

ReactDOM.render(
  <AsyncComponent>
    <h3 key="1">This section is updated using React (async)</h3>
    <Demo key="2" />
    <footer key="3">
      Now try it using <a href="react-sync.html">React sync rendering</a> or{" "}
      <a href="didact.html">Didact Fiber</a>
    </footer>
  </AsyncComponent>,
  document.getElementById("root")
);
