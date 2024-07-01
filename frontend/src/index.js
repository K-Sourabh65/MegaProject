import React from 'react';
import ReactDOM from 'react-dom/client';

// core styles
import "./scss/volt.scss";

// vendor styles
import "react-datetime/css/react-datetime.css";


import './index.css';
import Home from './components/Home';
import Website from './components/Website';
import HomePage from './components/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const auth = localStorage.getItem('autentication') === 'true';

root.render(
    <React.StrictMode>  
        {!auth ? <Website /> : <HomePage/>}
    </React.StrictMode>

);