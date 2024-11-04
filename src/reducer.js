const reducer = (state, action) => {
    switch (action.type) {
      case 'CLEAR_CART':
        return { ...state, cart: [] };
  
      case 'REMOVE':
        return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
  
      case 'INCREASE':
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.payload) {
              return { ...item, amount: item.amount + 1 };
            }
            return item;
          }),
        };
  
      case 'DECREASE':
        return {
          ...state,
          cart: state.cart
            .map((item) => {
              if (item.id === action.payload) {
                return { ...item, amount: item.amount - 1 };
              }
              return item;
            })
            .filter((item) => item.amount > 0),
        };
  
      case 'GET_TOTALS':
        const { total, amount } = state.cart.reduce(
          (cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = price * amount;
  
            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
  
            return cartTotal;
          },
          {
            total: 0,
            amount: 0,
          }
        );
        return { ...state, total: parseFloat(total.toFixed(2)), amount };
  
      case 'LOADING':
        return { ...state, loading: true };
  
      case 'DISPLAY_ITEMS':
        return { ...state, cart: action.payload, loading: false };
  
      default:
        return state;
    }
  };
  
  export default reducer;