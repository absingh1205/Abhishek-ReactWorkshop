import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Create from "../Create/Create";

function Body(props) {
  // console.log(props);
  return (
    <div>
      {/* <h5>This is Body</h5> */}
      {props.value === "cards" ? (
        <Cards cardsarray={props.cardsarray} />
      ) : (
        <Create cardsarray={props.cardsarray} />
      )}
    </div>
  );
}

export default Body;
