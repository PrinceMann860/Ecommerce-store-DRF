const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add_to_cart':
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: action.payload.quantity }];
      }

    case 'remove_to_cart':
      return state.filter((item) => item.id !== action.payload.id);

    case 'increment_quantity':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case 'decrement_quantity':
      return state.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    default:
      return state;
  }
};

export default cartReducer; // Export the reducer