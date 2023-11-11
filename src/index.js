import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import Cart from './components/Cart';
import Hello from './components/Hello';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(document.getElementById('root2'))
root2.render(
  <React.StrictMode>
    <Cart/>
  </React.StrictMode>
);

const root3 = ReactDOM.createRoot(document.getElementById('root3'))
root3.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
