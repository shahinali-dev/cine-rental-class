// reducer ar jonno amra prothome initial state create korbo
const initialState = {
  cartData: [],
};

// then  amra reducer create korbo, r reducer amader call back a state & action dei
// reducer ar jonno amra ekta switch case create korte hobe
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const isExisMovieInCart = state.cartData.find(
        (item) => item.id === action.payload.id,
      );
      if (isExisMovieInCart) {
        alert("Movie already in cart");
        return state;
      }
      return {
        cartData: [...state.cartData, action.payload],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export { cartReducer, initialState };
