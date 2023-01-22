import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App", () => {
  test("Render 5 tds tag from msw", async () => {
    render(<App />);
    const tds = await screen.findAllByTestId("testId");
    expect(tds).toHaveLength(5);
  });
});
