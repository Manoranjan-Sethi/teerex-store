export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, getData: action.payload.getData };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((e) => e.id !== action.payload.id),
      };
    default:
      return state;
  }
};
