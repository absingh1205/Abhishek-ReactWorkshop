import React from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";

function Header(props) {
  return (
    <div className="main-header">
      <h2>Header</h2>
      <NavBar cardsarray={props.cardsarray} />
    </div>
  );
}

export default Header;
