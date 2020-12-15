import React, { useState, useEffect } from "react";
import "./Cards.css";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";

function Cards(props) {
  const history = useHistory();
  const location = useLocation();

  const [type, setType] = useState("ALL");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (props.carddata.length === 0) {
      fetch("./Data.json")
        .then((response) => response.json())
        .then((data) => {
          props.dispatch({
            type: "loadData",
            payload: data,
          });
        });
    }
  }, []);

  let data = props.carddata;

  let urlFilter = location.search ? location.search.split("=")[1] : "ALL";

  let handleFilter = ({ target }) => {
    setType(target.value);
    history.push(`/?filter=${target.value}`);
  };

  let getFilteredData = (data, filter) => {
    if (filter === "ALL") {
      return data;
    }
    return data.filter((item) => item.type === filter);
  };

  let filteredData = getFilteredData(data, urlFilter);

  let handleSearchText = ({ target }) => {
    setSearchText(target.value);
  };

  let getSearchedArray = (text) => {
    let searchedData = [];

    filteredData.filter((item) => {
      if (
        item.content.toLowerCase().includes(text) ||
        (item.content.includes(text) && item.type === "text")
      ) {
        searchedData.push(item);
      }
    });
    return searchedData;
  };

  let searchResult = getSearchedArray(searchText);
  console.log(searchResult);

  if (searchResult != []) {
    filteredData = searchResult;
  }

  return (
    <>
      <h2>Filter By</h2>
      <select
        name="filter"
        id="filter"
        onChange={handleFilter}
        data-testid="filterlist"
        value={type}
      >
        <option value="ALL">ALL</option>
        <option value="text">Text</option>
        <option value="image">Image</option>
      </select>

      <h2>Search Text</h2>
      <input type="text" value={searchText} onChange={handleSearchText} />

      <div className="main-container">
        {filteredData.map((value, index) => (
          <div key={"author" + index} className="card-container">
            <div className="col-xs-12">
              <div className="title">
                {value.user.image != null ? (
                  <img
                    src={value.user.image}
                    className="profile-image rounded-circle"
                    alt=""
                  />
                ) : (
                  <img
                    src="./download.png"
                    className="profile-image rounded-circle"
                    alt=""
                  />
                )}
                <h4>{value.user.name}</h4>
              </div>

              {value.type === "text" ? (
                <p>{value.content}</p>
              ) : (
                <img src={value.content} className="image-container" alt="" />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    carddata: state.card,
  };
};

export default connect(mapStateToProps)(Cards);
