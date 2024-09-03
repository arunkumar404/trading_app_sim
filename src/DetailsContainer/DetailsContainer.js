import React from 'react'
import "./DetailsContainer.css";

const DetailsContainer = () => {
  
  return (
    <div>
      <div className="horizontal_ruler" />
      <p className="long_press">
        Long Press on the scrip to Square of All Order
      </p>
      <div className="horizontal_ruler" />

      <div className="details_row">
        <div className="item_1">
          <p className="text_detail_item">Qty. 0</p>
        </div>
        <div className="item_2">
          <p className="text_detail_item">Sell Avg. 200.45 </p>
        </div>
        <div className="item_3">
          <button className='detail_btn_nrml'>NRML</button>
        </div>
      </div>
      <div className="details_row">
        <div className="item_1_middle">
          <p className="text_detail_item_big">NIFTY 13TH JUN 23000 CE</p>
        </div>
        <div className="item_2_middle">
          <p className="text_detail_item_big green_text">4091.25</p>
        </div>
      </div>
      <div className="details_row">
        <div className="item_1">
          <p className="text_detail_item">NFO</p>
        </div>
        <div className="item_2">
          <p className="text_detail_item">Buy Avg. 36.80 </p>
        </div>
        <div className="item_3">
          <p className="text_detail_item">LTP 410.40 </p>
        </div>
      </div>
      <div className="horizontal_ruler" />
    </div>
  );
}

export default DetailsContainer