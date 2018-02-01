import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/css/style.css';
import Routes from './routes';

// filestack API key

filepicker.setKey("AKhWMjchRIqDoR1hKB30gz");
// Our views are rendered inside the #content div
ReactDOM.render(
  Routes,
  document.getElementById('content')
);
