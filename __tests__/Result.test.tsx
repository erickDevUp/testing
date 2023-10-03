import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Result from "@/components/result";

describe("Testing result render", () => {
  const result = { from: "EUR", amount: 10, to: "USD", result: 10.59 };
  it("Result", async () => {
    render(<Result {...result} />); // ARRANGE
    screen.queryByText("EUR");
    screen.queryByText("USD");
    screen.queryByText("10");
    screen.queryByText("10.59");
  });
});
