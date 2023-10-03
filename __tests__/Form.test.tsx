import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormCustom from "@/components/formCustom";

import userEvent from "@testing-library/user-event";

describe("Testing Form Use", () => {
  const currencies = ["USD", "EUR", "CAD"];
  const amount = 10;

  it("should have 2 selects , 3 options and 1 input", async () => {
    render(<FormCustom data={currencies} />); // ARRANGE
    const selects = screen.getAllByRole("combobox");

    expect(selects[0]).toHaveValue(currencies[1]);
    expect(selects[1]).toHaveValue(currencies[1]);

    screen.getAllByRole("option", { name: currencies[0] });
    screen.getAllByRole("option", { name: currencies[1] });
    screen.getAllByRole("option", { name: currencies[2] });

    const input = screen.getByPlaceholderText("00") as HTMLInputElement;

    fireEvent.change(input, { target: { value: amount } });
    await userEvent.selectOptions(selects[0], currencies[0]);
    await userEvent.selectOptions(selects[1], currencies[2]);

    expect(selects[0]).toHaveValue(currencies[0]);
    expect(selects[1]).toHaveValue(currencies[2]);
    expect(input.valueAsNumber).toBe(amount);
  });
});
