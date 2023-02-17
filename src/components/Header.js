import React from "react";
import style from "../styles/Header.module.css";

import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="container">
        <div className={`row ${style["navbar"]}`}>
          <div className={`col-md-9 ${style["navbar-left"]}`}>
            <div className={style["logo"]}>
              <img src={logo} alt="logo" />
            </div>
            <div className={style["search-bar"]}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search your venue location" />
            </div>
            <div className={style["menu"]}>
              <p>Explore Event</p>
              <p>Help</p>
            </div>
          </div>
          <div className={`col-md-3  ${style["navbar-right"]}`}>
            <button className={style["create-btn"]}>Create Event</button>
            <button className={style["login-btn"]}>Sign In</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
