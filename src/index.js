import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './slices/orderSlice';
import droneReducer0 from './slices/droneSlices/droneSlice0';
import droneReducer1 from './slices/droneSlices/droneSlice1';
import droneReducer2 from './slices/droneSlices/droneSlice2';
import droneReducer3 from './slices/droneSlices/droneSlice3';
import searchReducer from './slices/searchSlice';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    "order": orderReducer,
    "drone0": droneReducer0,
    "drone1": droneReducer1,
    "drone2": droneReducer2,
    "drone3": droneReducer3,
    "search": searchReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);