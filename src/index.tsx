//? remote components
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
//? local components
import App from './App';


ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <Router>
                <App />
            </Router>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);