import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import dataSlice from "../Redux/slice"
 
const rootReducer = combineReducers({
    slice:dataSlice,
  // Add more slices here
});

export const store = configureStore({
  reducer: rootReducer,
});
