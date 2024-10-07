"use client"
import React from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor } from "../redux/store"
import Loading from "../../app/loading"
const ProviderLayout = ({children}) => {
  return (
     <Provider store={store}>
        <PersistGate loading={<Loading/>} persistor={persistor}>
           {children}
        </PersistGate>
      </Provider>
  )
}

export default ProviderLayout