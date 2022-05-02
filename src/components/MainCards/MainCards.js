import React from "react";
import "./MainCards.css";
import left from "../../assets/female doctor 2.png";

const MainCards = () => {
  return (
    <div className="mainCards">
      <div className="mainCards__img">
        <img src={left} alt="" />
        <p>Highly recommended</p>
      </div>
      <div className="mainCards__text">
        <h3>DR. Vikash Kumar Mehta</h3>
        <p>ENT specialist</p>
        <p>0.5 kms from your location</p>
        <h3>Rs. 250/-</h3>
      </div>
    </div>
  );
};

export default MainCards;
