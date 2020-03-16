import CartActionTypes from './cart.types';
const INITIAL_STATE = {
  hiddin: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hiddin: !state.hiddin,
      };
    default:
      return state;
  }
};

export default cartReducer;
