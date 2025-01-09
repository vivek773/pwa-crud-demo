import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';  // Import service worker for PWA
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap styles
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker to enable PWA capabilities
serviceWorkerRegistration.register();

// Optional: To measure performance in your app, pass a function to log results
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
