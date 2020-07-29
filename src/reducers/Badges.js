const initialState = {
  data: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_DATA":
      return action.payload;
    case "NEW_POKEMON":
      return [action.payload, ...state];
    case "EDIT_POKEMON":
      return action.payload;
    case "DELETE_POKEMON":
      return action.payload;
    default:
      return state;
  }
};
export default data;
