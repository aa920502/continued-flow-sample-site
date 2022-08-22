import React from "react";
import { NavLink } from "react-router-dom";

import "w3-css/w3.css";

function HomeHeader() {
  return (
    <div>
      <div className="w3-top">
        <div className="w3-bar w3-black w3-card">
          <NavLink
            className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
            to="javascript:void(0)"
            title="Toggle Navigation Menu"
          >
            <i className="fa fa-bars"></i>
          </NavLink>
          <NavLink to="/" className="w3-bar-item w3-button w3-padding-large">
            HOME
          </NavLink>
          <NavLink
            to="/form/?fbld_id= 1138279943700099"
            className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            REGISTER
          </NavLink>
          <NavLink
            to="/tutorial"
            className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            TUTORIAL
          </NavLink>
          <NavLink
            to="/admin"
            className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            ADMIN
          </NavLink>
          <NavLink
            to="javascript:void(0)"
            className="w3-padding-large w3-hover-red w3-hide-small w3-right"
          >
            <i className="fa fa-search"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
