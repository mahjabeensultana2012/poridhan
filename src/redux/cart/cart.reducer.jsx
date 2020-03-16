const INITIAL_STATE = {
  hiddin: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return {
        ...state,
        hiddin: !state.hiddin,
      };
    default:
      return state;
  }
};

export default cartReducer;
