import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './components/App';
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>
);
