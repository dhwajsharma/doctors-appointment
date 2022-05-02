import React from "react";
import "./Specialties.css";
import vector from "../../assets/1_Vector.png";

const Specialties = ({ heading }) => {
  return (
    <div className="main__specialties__box">
      <img src={vector} alt="" />
      <h2>{heading}</h2>
    </div>
  );
};

export default Specialties;
