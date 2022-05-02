import React from "react";
import MainCards from "../MainCards/MainCards";
import "./MainCard.css";

const MainCard = () => {
  return (
    <div className="main__cards__items">
      <div className="main__cards__top__left">
        <h2>
          Top-rated primary
          <br /> care doctors
        </h2>
        <h4>90% of patients gave these primary care doctors 5 stars</h4>
        <p>see more</p>
      </div>
      <div className="main__cards__top__right">
        <MainCards />
        <MainCards />
        <MainCards />
      </div>
    </div>
  );
};

export default MainCard;
