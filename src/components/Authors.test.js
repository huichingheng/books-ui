import React from "react";
import Authors from "./Authors";
import ShallowRender from "react-test-renderer/shallow";

test("renders Author component", () => {
  const renderer = new ShallowRender();
  renderer.render(<Authors />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});

test("renders name and authorlist after the component mount",async ()=>{
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        name: "Harry Potter author", 
        _id: "654723849s"
      }
    ])
  )

  const renderer = new ShallowRender();
  renderer.render(<Authors />)

  const instance = renderer.getMountedInstance()
  await instance.componentDidMount()

  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
})

