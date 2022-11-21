import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log(process.env.REACT_APP_API_URL);

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render(
  <App />
);


