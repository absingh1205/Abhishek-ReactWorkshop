import React from "react";

const LoginContext = React.createContext({
  login: false,
  onSubmit: () => {},
  onLogout: () => {},
});

export default LoginContext;
