import React from "react";
import "./Main.css";
import left from "../../assets/female doctor 2.png";
import middle from "../../assets/872-8722587_doctor-home-indian-doctor.png";
import right from "../../assets/indian-doctor-png-1-Images-PNG-Transparent.png";
import vector from "../../assets/1_Vector.png";
import { AiOutlineSearch } from "react-icons/ai";
import MainCards from "../MainCards/MainCards";
import MainCard from "../MainCard/MainCard";

const Main = () => {
  return (
    <div className="main">
      <div className="main__find">
        <div className="main__find__top">
          <div className="main__find__top__text">
            <h1>Find local Doctors</h1>
            <h3>who take your insurance</h3>
          </div>
          <div className="main__find__top__images">
            <img src={left} alt="" />
            <img src={middle} alt="" />
            <img src={right} alt="" />
          </div>
        </div>
        <div className="main__find__bottom">
          <div className="main__find__bottom__searchBar">
            <input placeholder="Condition, Procedure, Doctor..." type="text" />
            <input placeholder="Your location" type="text" />
            <input placeholder="locate me" type="text" />
            <input placeholder="Today" type="text" />
            <AiOutlineSearch className="main__find__bottom__searchIcon" />
          </div>
        </div>

        <div className="main__specialties">
          <div className="main__specialties__text">
            <h2>Top-searched specialties</h2>
          </div>
          <div className="main__specialties__boxes">
            <div className="main__specialties__box">
              <img src={vector} alt="" />
              <h2>Critical Care</h2>
            </div>
            <div className="main__specialties__box">
              <img src={vector} alt="" />
              <h2>Primary Care</h2>
            </div>
            <div className="main__specialties__box">
              <img src={vector} alt="" />
              <h2>Orthopedics</h2>
            </div>
            <div className="main__specialties__box">
              <img src={vector} alt="" />
              <h2>Neuro Surgeon</h2>
            </div>
          </div>
        </div>

        <div className="main__cards">
          <MainCard />
          <MainCard
            heading="Dentists with the 
shortest wait time"
            subHeading="91% of patients spent less than 
30 minutes in the waiting room 
for these Dentists
"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
