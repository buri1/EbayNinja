import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {render} from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';



const root = ReactDOM.createRoot(
    document.getElementById("root")
  );
  root.render(
<App/>
  );