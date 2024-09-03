import React from "react";
import "./Header.css";
import LightArrowIcon from "../assets/icons/LightArrowIcon";
import SuitcaseIcon from "../assets/icons/SuitcaseIcon";

const Header = () => {
  return (
    <div className="total_container">
      <div className="portfolio_header centered_content">
        <div className="portfolio_header_left_side centered_content">
          <SuitcaseIcon />
          <p className='portfolio_text'>Portfolio</p>
        </div>
        <LightArrowIcon />
      </div>
    </div>
  );
};

export default Header;
