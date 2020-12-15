const initialState = [];

function cardReducer(state = initialState, action) {
  if (action.type === "loadData") {
    return action.payload;
  }

  if (action.type === "AddNewCard") {
    return [action.payload, ...state];
  }

  return state;
}

export default cardReducer;
