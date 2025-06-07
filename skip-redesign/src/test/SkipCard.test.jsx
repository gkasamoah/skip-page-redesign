import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SkipCard from "../components/SkipCard";

const mockSkip = {
  image: "https://example.com/skip.jpg",
  size: 8,
  allowed_on_road: false,
  hire_period_days: 14,
  price_before_vat: 180
};

describe("SkipCard Component", () => {
  it("renders skip information correctly", () => {
    render(<SkipCard skip={mockSkip} onSelect={() => {}} isSelected={false} />);
    
    expect(screen.getByText(/8\s*Yards\s*Skip/i)).toBeInTheDocument();

    expect(screen.getByText("14 day hire")).toBeInTheDocument(); 
    expect(screen.getByText("£180")).toBeInTheDocument();
    expect(screen.getByText("Select This Skip")).toBeInTheDocument();
  });

  it("shows warning if skip is not allowed on road", () => {
    render(<SkipCard skip={mockSkip} onSelect={() => {}} isSelected={false} />);
    expect(screen.getByText(/Not Allowed On The Road/i)).toBeInTheDocument();
  });

  it("displays 'Selected' button when selected", () => {
    render(<SkipCard skip={mockSkip} onSelect={() => {}} isSelected={true} />);
    expect(screen.getByText("Selected")).toBeInTheDocument();
  });

  it("calls onSelect when card is clicked", () => {
    const onSelectMock = jest.fn();
    render(<SkipCard skip={mockSkip} onSelect={onSelectMock} isSelected={false} />);
    
    fireEvent.click(screen.getByRole("button", { name: /Select This Skip/i }));
    
    
    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(onSelectMock).toHaveBeenCalledWith(mockSkip);
  });
});
