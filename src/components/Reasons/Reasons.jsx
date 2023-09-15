import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from "../../assets/tick.png";
import "./Reasons.css";
const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div style={{justifyContent:'center'}} className="right-r">
        <span>Neden biz?</span>
        <div>
          <span className="stroke-text">Neden </span>
          <span>biz?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>Sağlıklı besin değeri yüksek besinler</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Protein bombası shakeler</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Performansınızı zirveye taşyacak içecekler</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Vitamin deposu vitamin bar</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Reasons;
