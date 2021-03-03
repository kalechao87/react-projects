const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }

  if (action.type === 'REMOVE') {
    const filteredItems = state.cart.filter(
      (item) => item.id !== action.payload
    );

    return { ...state, cart: filteredItems };
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false };
  }

  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }

          if (action.payload.type === 'dec') {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }

        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);

    console.log(tempCart);
    return { ...state, cart: tempCart };
  }

  if (action.type === 'GET_TOTALS') {
    let { amount, total } = state.cart.reduce(
      (acc, currentValue) => {
        // console.log(acc);
        // console.log(currentValue);
        const { price, amount } = currentValue;

        acc.total += price * amount;
        acc.amount += amount;
        return acc;
      },
      { total: 0, amount: 0 }
    );

    total = parseFloat(total.toFixed(2));

    return { ...state, amount, total };
  }

  throw new Error('no matching action type');
};

export default reducer;
