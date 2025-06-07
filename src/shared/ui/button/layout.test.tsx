import { render, screen } from "@testing-library/react";
import { UiButton } from ".";

describe("UiButton", () => {
  test("render UiButton", () => {
    render(<UiButton>TEST</UiButton>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("render UiButton with theme", () => {
    render(<UiButton theme="primary">TEST</UiButton>);
    expect(screen.getByText("TEST")).toHaveClass("primary");
    screen.debug();
  });
});
