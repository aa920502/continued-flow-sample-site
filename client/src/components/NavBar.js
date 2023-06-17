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
            to={(e) => {
              e.preventDefault();
            }}
            title="Toggle Navigation Menu"
          >
            <i className="fa fa-bars"></i>
          </NavLink>
          <NavLink to="/" className="w3-bar-item w3-button w3-padding-large">
            HOME
          </NavLink>
          <NavLink
            to="/form?fbld_id=785583589425944"
            className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            FORM
          </NavLink>
          <NavLink
            to="/admin"
            className="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            ADMIN
          </NavLink>

          <NavLink to="/test" className="w3-bar-item w3-button w3-padding-large">
            TEST
          </NavLink>
          <NavLink
            to={(e) => {
              e.preventDefault();
            }}
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
