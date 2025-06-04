import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterslice'; // Ensure this is the correct path
import cartReducer from './cart'; // Ensure this is the correct path

const store = configureStore({
  reducer: {
    counter: counterSlice, // Ensure this matches the exported reducer
    cart: cartReducer, // Ensure this matches the exported reducer
},
});

export default store;