import React from "react";
import "./Holdings.css";
import LightArrowIcon from "../assets/icons/LightArrowIcon";
import SuitcaseIcon from "../assets/icons/SuitcaseIcon";

const Holdings = () => {
  return (
    <div className="total_container">
      <div className="portfolio_header centered_content">
        <div className="portfolio_header_left_side centered_content">
          <p className='portfolio_text'>Portfolio</p>
          <SuitcaseIcon />
        </div>
        <LightArrowIcon />
      </div>
    </div>
  );
};

export default Holdings;
