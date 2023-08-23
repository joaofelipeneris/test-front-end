import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import Service from './Service/Service';
import { ContextProvider } from './Context/Context';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Home />
      <Service />
    </ContextProvider>
  </React.StrictMode>
)