import React from "react";
import Authors from "./Authors";
import ShallowRender from "react-test-renderer/shallow";

test("renders Author component", () => {
  const renderer = new ShallowRender();
  renderer.render(<Authors />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});

