import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import { RatingContextProvider } from "./context/RatingContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RatingContextProvider>
        <App />
      </RatingContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

