import React from "react";
import Books from "./Books";
import ShallowRender from "react-test-renderer/shallow";


test("renders Book component", () => {
  const renderer = new ShallowRender();
  renderer.render(<Books />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});

// test before the component mount
test("renders Book title", () => {
  const renderer = new ShallowRender();
  renderer.render(<Books />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});

test("renders title and booklist after the component mount", async ()=>{
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        title: "Harry Potter",
        _id: "654723849s"
      },
      {
        title: "John Wick",
        _id: "528940562j"
      },
    ])
  )
  const renderer = new ShallowRender();
  renderer.render(<Books />)

  const instance = renderer.getMountedInstance()
  await instance.componentDidMount()

  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
})