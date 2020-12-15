import React, { useEffect, useContext } from "react";
import "./Nav.css";
import { Link, useHistory } from "react-router-dom";
// import LoginContext from "../LoginContext/LoginContext";
import { connect } from "react-redux";

function Nav(props) {
  const history = useHistory();
  // const loginContext = useContext(LoginContext);

  // console.log("COntext", loginContext);

  console.log("Navigation props", props);

  useEffect(() => {
    props.dispatch({
      type: "CheckLogin",
    });
  }, []);

  const navStyle = {
    color: "white",
  };

  let handlelogout = () => {

    props.dispatch({
      type : "SetLogout"
    })
    
  };

  return (
    <div>
      <nav className="nav-bar">
        <h2>MySite</h2>
        <ul className="nav-links">
          <Link to="/home" style={navStyle}>
            <li>Home</li>
          </Link>

          {props.isLogged === false ? (
            <Link to="/login" style={navStyle}>
              <li>Login</li>
            </Link>
          ) : (
            <>
              <Link to="/create" style={navStyle}>
                <li>Create</li>
              </Link>

              <Link to="/" style={navStyle} onClick={handlelogout}>
                <li>Logout</li>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.login,
  };
};

export default connect(mapStateToProps)(Nav);
