import React from "react";
import ReactDOM from "react-dom";
import Author from "./Author";
import ShallowRender from "react-test-renderer/shallow";

test("renders Author component", () => {
  const renderer = new ShallowRender();
  renderer.render(<Author />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});