import React from "react";
import "./SkipModal.css";
import { FaTimes,FaArrowRight } from "react-icons/fa";

const SkipModal = ({ skip, onClose }) => {
  if (!skip) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" aria-label="Close"  onClick={onClose}>
          <FaTimes />
        </button>

        <h2>{skip.title}</h2>
        <p>Size: {skip.size} Yards</p>
        <p>Hire Period: {skip.period || "14 days"}</p>
        <p className="price">Price: £{skip.price_before_vat}</p>
        <button className="back-btn" >Back</button>
        <button className="continue-btn" >Continue <FaArrowRight/></button>
         
      </div>
    </div>
  );
};

export default SkipModal;
