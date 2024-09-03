import React, { useState } from "react";
import "./CustomTabs.css";

const CustomTabs = () => {
  const [holdingsValue, setHoldingsValue] = useState(0);
  const [positionsValue, setPositionsValue] = useState(1);
  const [selectedHeader, setSelectedHeader] = useState("positions")

  return (
    <div className="tabs_container">
      <div
        className={`tab_container ${
          selectedHeader === "holdings" && "selectedHeader"
        }`}
      >
        <p className="text_white">Holdings</p>
        <p className="text_white">({holdingsValue})</p>
      </div>
      <div
        className={`tab_container ${
          selectedHeader === "positions" && "selectedHeader"
        }`}
      >
        <p className="text_white">Positions</p>
        <p className="text_white">({positionsValue})</p>
      </div>
    </div>
  );
};

export default CustomTabs;
