import React from "react";
import { FaArrowRight, FaExclamationTriangle, FaClock, FaRulerCombined } from "react-icons/fa";
import "./SkipCard.css";

const SkipCard = ({ skip, onSelect, isSelected }) => {
  return (
    <div className={`skip-card ${isSelected ? "selected" : ""}`} onClick={() => onSelect(skip)}>
      <div className="skip-image-wrapper">
        <img src={skip.image} alt={skip.size} className="skip-image" />
        <div className="skip-size-badge">{skip.size} Yards</div>
        {!skip.allowed_on_road && (
          <div className="skip-warning">
            <FaExclamationTriangle style={{ marginRight: 4 }} />
            Not Allowed On The Road
          </div>
        )}
      </div>

      <div className="skip-details">
        <div className="skip-info-line">
          <FaRulerCombined className="skip-icon" />
          <span className="skip-title">{skip.size} Yards Skip</span>
        </div>

        <div className="skip-info-line">
          <FaClock className="skip-icon" />
          <span className="skip-period">
            {skip.hire_period_days ? `${skip.hire_period_days} day hire` : "14 day hire"}
          </span>
        </div>

        <div className="skip-price">£{skip.price_before_vat}</div>
      </div>

      <div className="skip-footer">
        <button className="select-button">
          {isSelected ? "Selected" : "Select This Skip"} <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
