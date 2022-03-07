import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmsSa0WfoKqEfzgRJrZZA9-fQXwvLoupo",
  authDomain: "cart-77070.firebaseapp.com",
  projectId: "cart-77070",
  storageBucket: "cart-77070.appspot.com",
  messagingSenderId: "119320274745",
  appId: "1:119320274745:web:27dcabeb6252b42a1beae8"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
