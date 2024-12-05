export const initialState = { items: [], totalPrice: 0, finalPrice: 0 };

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "increase": {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, items: updatedItems };
    }

    case "decrease": {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return { ...state, items: updatedItems };
    }

    case "remove": {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, items: updatedItems };
    }

    case "calculate_total": {
      const totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      const finalPrice = totalPrice - totalPrice * 0.1;
      return { ...state, totalPrice, finalPrice };
    }

    default:
      return state;
  }
};
