import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Test <Greeting/> Component", () => {
  test("Find text in virtual DOM", () => {
    render(<Greeting />);

    const element = screen.getByText("Hello react-testing");
    // const element = screen.getByText("Hello react-testing", { exact: false });

    expect(element).toBeInTheDocument();
  });

  test('Before btn clicking we expect to render "testing is very useful" element in DOM', () => {
    render(<Greeting />);

    const element = screen.getByText("testing is very useful", {
      exact: false,
    }); // getByText used when element already in the DOM if not exist it will throw an error

    expect(element).toBeInTheDocument();
  });

  test('After btn clicked we expect to render "text changed" element in DOM', () => {
    render(<Greeting />);

    const btn = screen.getByRole("button");
    userEvent.click(btn);

    const element = screen.getByText("text changed", { exact: false });
    expect(element).toBeInTheDocument();
  });

  // test('After btn clicked we expect to "testing is very useful" element  removed in DOM', () => {
  //   render(<Greeting />);

  //   const element = screen.queryByText("testing is very useful", {
  //     exact: false,
  //   });
  //   expect(element).toBeNull();
  // });
});
