import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Test <Async/> component", () => {
  test("Test that there are posts in the DOM after AJAX request", async () => {
    //  Create a fake fetch function to avoid sending real request to the server
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "1", title: "First post" }],
    });
    render(<Async />);

    const elements = await screen.findAllByRole("listitem"); //findAllByRole--> is async functions which waits till the request fullfilled

    expect(elements).not.toHaveLength(0);
  });
});
