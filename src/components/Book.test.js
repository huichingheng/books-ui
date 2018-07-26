import React from "react";
import ReactDOM from "react-dom";
import Book from "./Book";
import ShallowRender from "react-test-renderer/shallow";

test("renders Book component", () => {
  const renderer = new ShallowRender();
  renderer.render(<Book />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});
