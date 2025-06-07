import React from "react";
import { FaMapMarkerAlt, FaTrash, FaTruck, FaShieldAlt, FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import "./StepProgressBar.css";

const steps = [
  { label: "Postcode", icon: <FaMapMarkerAlt /> },
  { label: "Waste Type", icon: <FaTrash /> },
  { label: "Select Skip", icon: <FaTruck /> },
  { label: "Permit Check", icon: <FaShieldAlt /> },
  { label: "Choose Date", icon: <FaCalendarAlt /> },
  { label: "Payment", icon: <FaCreditCard /> },
];

const StepProgressBar = ({ currentStep }) => {
  return (
    <div className="stepper-container">
      {steps.map((step, index) => (
        <div className="step" key={step.label}>
          <div
            className={`step-icon ${index <= currentStep ? "active" : ""||  index > currentStep?"inactive":""}`}
          >
            {step.icon}
          </div>
          <span className={`step-label ${index <= currentStep ? "active" : ""||  index > currentStep?"inactive":""}`}>
            {step.label}
          </span>
          {index < steps.length - 1 && (
            <div className={`step-line ${index < currentStep ? "active" : "" ||  index > currentStep?"inactive":""}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepProgressBar;
