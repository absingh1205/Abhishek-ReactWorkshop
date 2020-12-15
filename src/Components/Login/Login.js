import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";

function Login(props) {
  const [FormData, setFormData] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  console.log(props);

  let handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...FormData, [name]: value });
  };

  let validateFormData = () => {
    let valid = {
      validUserName: true,
      validPassword: true,
    };

    if (FormData.username === "") {
      alert("Username should not be empty");
      valid.validUserName = false;
    }

    if (FormData.password === "") {
      alert("Password should not be empty");
      valid.validPassword = false;
    }
    if (!FormData.password.includes("@")) {
      alert("Password should include @");
      valid.validPassword = false;
    }

    return valid;
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    let validity = validateFormData();

    if (validity.validUserName === true && validity.validPassword === true) {
      
      props.dispatch({
        type:"SetLoginTrue"
      })

      history.push("/home");
    }
  };

  return (
    <form>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="username"
          value={FormData.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={FormData.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.login,
  };
};

export default connect(mapStateToProps)(Login);
