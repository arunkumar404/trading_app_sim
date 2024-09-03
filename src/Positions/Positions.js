import React, { useState } from 'react'
import './Positions.css'

const Positions = () => {
    const [totalPL, setTotalPL] = useState('4,091.25')
  return (
    <div className="total_pnl_container">
      <div className="pnlContainer">
        <div className="pnlSingle">
          <p className="plType remove_pm">Total P&L</p>
          <p className="plAmount remove_pm">₹{totalPL}</p>
        </div>
      </div>
      <div className="pnl_Bottom">
        <div className="pnlContainer">
          <div className="pnlSingle">
            <p className="plType plType_down remove_pm">Realised P&L</p>
            <p className="plAmount plAmount_down remove_pm">₹{totalPL}</p>
          </div>
        </div>
        <div className="vertical_bar" />
        <div className="pnlContainer">
          <div className="pnlSingle">
            <p className="plType plType_down remove_pm">Unrealised P&L</p>
            <p className="plAmount plAmount_down remove_pm">₹{totalPL}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Positions