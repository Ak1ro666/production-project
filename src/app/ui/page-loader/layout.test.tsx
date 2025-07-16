import { render, screen } from "@testing-library/react";
import { Layout } from "./layout";

describe("PageLoader", () => {
  test("render PageLoader", () => {
    render(<Layout />);
    expect(screen.getByTestId("page-loader")).toBeInTheDocument();
  });
});
