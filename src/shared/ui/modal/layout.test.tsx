import { render, screen } from "@testing-library/react";
import { UiModal } from ".";

describe("UiModal", () => {
  test("render UiModal", () => {
    render(<UiModal isOpen>Test</UiModal>);

    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });
});
