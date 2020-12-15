const initialState = {
  isLogged: false,
};

function loginReducer(state = initialState, action) {
  if (action.type === "CheckLogin") {
    return state.isLogged;
  }

  if (action.type === "SetLoginTrue") {
    return true;
  }

  if (action.type === "SetLogout") {
    return false;
  }

  return state;
}

export default loginReducer;
