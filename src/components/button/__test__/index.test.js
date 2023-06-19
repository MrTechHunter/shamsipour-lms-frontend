import React from "react";
import Button from "../index";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

test('pass button text as a children and in this case must be "click me!"', () => {
  const component = render(<Button>click me!</Button>);
  const buttonEl = component.getByTestId("button-component");
  expect(buttonEl.textContent).toBe("click me!");
});
test("capture click", (done) => {
  function handleClick() {
    done();
  }
  const { getByText } = render(
    <Button onClick={handleClick}>click event</Button>
  );
  const node = getByText("click event");
  fireEvent.click(node);
});
test("the button which has an icon must be run correctly", () => {
  const component = render(<Button icon={"g-plus"}>button with icon</Button>);
  const buttonEl = component.getByText("button with icon");
  const iconEl = component.getByTestId("button-icon");
  expect(buttonEl).toContainElement(iconEl);
});
test("button skeleton-loader must work correctly when loading prop is true.", () => {
  const component = render(<Button loading={true}>loading mode button</Button>);
  const skeletonLoaderEl = component.getAllByTestId("button-skeleton-loader");
  expect(skeletonLoaderEl).toBeTruthy();
});
test("button skeleton-loader must not work correctly when loading prop is false.", () => {
  const component = render(
    <Button loading={false}>loading mode button</Button>
  );
  const skeletonLoaderEl = component.queryAllByTestId("button-skeleton-loader");
  expect(skeletonLoaderEl).toStrictEqual([]);
});
test("button disabled must work correctly when disabled prop is true.", () => {
  const component = render(
    <Button disabled={true}>disabled mode button</Button>
  );
  const buttonEl = component.getByRole("button");
  expect(buttonEl).toBeDisabled();
});
test("custom className should work correctly.", () => {
  const component = render(<Button className={"test-class-name"} />);
  const buttonEl = component.getByTestId("button-element");
  expect(buttonEl.className).toMatch(/test-class-name/);
});
test("pass build-in attr e.g type.", () => {
  const component = render(<Button type={"button"} />);
  const buttonEl = component.getByTestId("button-element");
  expect(buttonEl).toHaveAttribute("type", "button");
});
