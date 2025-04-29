import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/slice/cartSlice';
import filterReducer from '../redux/slice/filterSlice';

// ---- Load cart from localStorage ----
const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load cart from localStorage", e);
    return undefined;
  }
};

// ---- Save cart to localStorage ----
const saveCartToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart); // फक्त cart slice सेव्ह करा
    localStorage.setItem("cartState", serializedState);
  } catch (e) {
    console.warn("Could not save cart to localStorage", e);
  }
};

// ---- Create store with preloadedState ----
const Mystore = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
  },
  preloadedState: {
    cart: loadCartFromLocalStorage(), // cart slice ला localStorage मधून preload करा
  },
});

// ---- Save to localStorage on any state change ----
Mystore.subscribe(() => {
  saveCartToLocalStorage(Mystore.getState());
});

export default Mystore;
