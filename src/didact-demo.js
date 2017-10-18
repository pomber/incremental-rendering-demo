import didact from "didact";
import { using } from "./demo";
import "./bleeding-thread";

/** @jsx didact.createElement */

const Demo = using({
  createElement: didact.createElement,
  Component: didact.Component,
  render: didact.render
});

didact.render(
  [
    <h3 key="1">
      This section is updated using{" "}
      <a href="https://github.com/hexacta/didact">Didact Fiber</a>
    </h3>,
    <Demo key="2" />,
    <footer key="3">
      Now try it using <a href="react-sync.html">React sync rendering</a> or{" "}
      <a href="react-async.html">React async rendering</a>
    </footer>
  ],
  document.getElementById("root")
);
