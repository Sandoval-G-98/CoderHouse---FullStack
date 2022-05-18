import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBuX_q1rvs1hQ_iLiqdKSKwD5YK-N3YmoQ",
  authDomain: "alaskaindumentaria-7a6c1.firebaseapp.com",
  projectId: "alaskaindumentaria-7a6c1",
  storageBucket: "alaskaindumentaria-7a6c1.appspot.com",
  messagingSenderId: "824772559719",
  appId: "1:824772559719:web:ffe713e1fd933293cf65c2"
};

const app = initializeApp(firebaseConfig);

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