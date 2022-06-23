import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("when rendered with a `title` prop", () => {
  it("should display title to the left and logo to the right", () => {
    render(<Header title="Your best days with..." />);
    expect(screen.getByText(/Your best days with.../)).toBeInTheDocument();
  });
});
