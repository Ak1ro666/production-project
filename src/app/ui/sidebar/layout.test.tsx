import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from ".";
import { ThemeProvider } from "@/app/providers/theme";
import { renderWithTranslation } from "@/shared/lib/react/render-with-translation";

describe("Sidebar", () => {
  test("render Sidebar", () => {
    renderWithTranslation(
      <ThemeProvider>
        <Sidebar />
      </ThemeProvider>
    );
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("toggle sidebar", () => {
    renderWithTranslation(
      <ThemeProvider>
        <Sidebar />
      </ThemeProvider>
    );

    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar-toggle")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
