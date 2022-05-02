import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>Logo</h1>
      </div>
      <div className="header__right">
        <div className="header__right__item">
          <h2>Help</h2>
        </div>
        <div className="header__right__item">
          <h2>About us</h2>
        </div>
        <div className="header__right__item">
          <button>Sign In/Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
