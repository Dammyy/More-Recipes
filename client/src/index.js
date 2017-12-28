import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/css/style.css';
import Routes from './routes';

// Don't forget to add your API key


// Our views are rendered inside the #content div
ReactDOM.render(
  Routes,
  document.getElementById('content')
);
