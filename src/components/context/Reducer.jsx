export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, getData: action.payload.getData };
    default:
      return state;
  }
};
