import { render, screen } from "@testing-library/react";
import { UiLoader } from ".";

describe("UiModal", () => {
  test("render UiModal", () => {
    render(<UiLoader />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
