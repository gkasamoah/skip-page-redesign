import React from "react";
import { render, screen } from "@testing-library/react";
import StepProgressBar from "../components/StepProgressBar";

describe("StepProgressBar", () => {
  it("renders all steps", () => {
    render(<StepProgressBar currentStep={0} />);
    
    expect(screen.getByText("Postcode")).toBeInTheDocument();
    expect(screen.getByText("Waste Type")).toBeInTheDocument();
    expect(screen.getByText("Select Skip")).toBeInTheDocument();
    expect(screen.getByText("Permit Check")).toBeInTheDocument();
    expect(screen.getByText("Choose Date")).toBeInTheDocument();
    expect(screen.getByText("Payment")).toBeInTheDocument();
  });

  it("highlights the current step and previous ones", () => {
    const { container } = render(<StepProgressBar currentStep={2} />);
    const activeLabels = container.querySelectorAll(".step-label.active");
    const activeIcons = container.querySelectorAll(".step-icon.active");
    const activeLines = container.querySelectorAll(".step-line.active");

    expect(activeLabels.length).toBe(3);  
    expect(activeIcons.length).toBe(3);
    expect(activeLines.length).toBe(2);  
  });

  it("does not highlight future steps", () => {
    const { container } = render(<StepProgressBar currentStep={1} />);
    const futureLabel = container.querySelector(".step-label:not(.active)");
    expect(futureLabel.textContent).toBe("Select Skip");
  });
});
