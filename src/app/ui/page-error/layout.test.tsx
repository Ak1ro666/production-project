import { screen } from "@testing-library/react";

import { renderWithTranslation } from "@/shared/lib/react/tests/render-with-translation";

import { Layout } from "./layout";

describe("PageError", () => {
  test("render PageError", () => {
    renderWithTranslation(<Layout />);
    expect(screen.getByTestId("page-error")).toBeInTheDocument();
  });
});
