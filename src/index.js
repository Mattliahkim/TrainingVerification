import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import ReactRouting from './employeeLogin/ReactRouter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ReactRouting />
  </React.StrictMode>,
  document.getElementById('root')
);