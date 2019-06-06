import React from "react";
import logo from "./SC-logo.png";

function Header() {
  return (
    <div className="header">
      <img
        src={logo}
        alt="logo"
      />
      <div className="header-right">
        <div className="header-textalign">The Bee 42's</div>
      </div>
      <span class="glyphicon glyphicon-info-sign headerIcons"></span>
      <span class="glyphicon glyphicon-bell headerIcons"></span>

    </div>
  );
}

export default Header;
