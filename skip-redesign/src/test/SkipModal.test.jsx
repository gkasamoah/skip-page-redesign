import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SkipModal from "../components/SkipModal";

const mockSkip = {
  title: "6 Yard Skip",
  size: 6,
  period: "7 days",
  price_before_vat: 150
};

describe("SkipModal Component", () => {
  it("should not render if skip is null", () => {
    const { container } = render(<SkipModal skip={null} onClose={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  it("should render modal with skip data", () => {
    render(<SkipModal skip={mockSkip} onClose={() => {}} />);
    
    expect(screen.getByText("6 Yard Skip")).toBeInTheDocument();
    expect(screen.getByText(/Size: 6 Yards/i)).toBeInTheDocument();
    expect(screen.getByText(/Hire Period: 7 days/i)).toBeInTheDocument();
    expect(screen.getByText(/Price: £150/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Back/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Continue/i })).toBeInTheDocument();
  });

  it("should call onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(<SkipModal skip={mockSkip} onClose={onClose} />);

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
