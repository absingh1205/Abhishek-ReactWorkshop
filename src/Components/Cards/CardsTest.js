import React, { useEffect } from "react";
import "./Cards.css";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";

function CardsTest(props) {
  console.log(props.carddata);

  useEffect(() => {
    fetch("./Data.json")
      .then((response) => response.json())
      .then((data) => {
        props.dispatch({
          type: "loadData",
          payload: data,
        });
      });
  }, []);

  return (
    <>
      <h1>In CardTest</h1>
      {/* {carddata} */}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    carddata: state.card,
  };
};

export default connect(mapStateToProps)(CardsTest);
