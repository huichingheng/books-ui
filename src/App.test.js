import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ShallowRender from "react-test-renderer/shallow";

it.skip("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders a div with some text", () => {
  const renderer = new ShallowRender();
  renderer.render(<App />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});
