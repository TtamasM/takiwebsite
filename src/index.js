import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import pkHomeLogo from './taki_images/taki_logo_white.png';

const setFavicon = (href) => {
  const head = document.head || document.getElementsByTagName('head')[0];
  const rels = ["icon", "shortcut icon"];
  rels.forEach((rel) => {
    let link = document.querySelector(`link[rel='${rel}']`);
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = href;
  });
};

setFavicon(pkHomeLogo);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();