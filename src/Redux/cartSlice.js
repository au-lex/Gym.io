import { createSlice } from '@reduxjs/toolkit';

// Load cart from local storage
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cart');
    if (serializedCart === null) {
      return [];
    }
    return JSON.parse(serializedCart);
  } catch (err) {
    console.error('Error loading cart from local storage:', err);
    return [];
  }
};

// Save cart to local storage
const saveCartToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
  } catch (err) {
    console.error('Error saving cart to local storage:', err);
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find(item => item.name === action.payload.name);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
        alert("New item added to cart");
      }
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      const newState = state.filter(item => item.name !== action.payload.name);
      saveCartToLocalStorage(newState);
      return newState;
    },
    incrementQuantity: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity++;
        saveCartToLocalStorage(state);
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity = item.quantity > 1 ? item.quantity - 1 : 1;
        saveCartToLocalStorage(state);
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;