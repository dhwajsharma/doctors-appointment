import React from "react";
import MainCards from "../MainCards/MainCards";
import "./MainCard.css";

const MainCard = ({ heading, subHeading }) => {
  return (
    <div className="main__cards__items">
      <div className="main__cards__top__left">
        {heading ? <h2>{heading}</h2> : <h2>Top-rated primary care doctors</h2>}
        {subHeading ? (
          <h4>{subHeading}</h4>
        ) : (
          <h4>90% of patients gave these primary care doctors 5 stars</h4>
        )}

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
