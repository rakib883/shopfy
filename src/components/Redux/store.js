import { configureStore } from '@reduxjs/toolkit';
import dataSlice from "./slice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 
 
const persistConfig = {
  key: 'root',
  storage,
}

 
const persistedReducer = persistReducer(persistConfig, dataSlice)

export const store = configureStore({
  reducer: persistedReducer,
});

export let persistor = persistStore(store)