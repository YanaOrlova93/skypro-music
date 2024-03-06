

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {App} from './App.jsx';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <React.StrictMode>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// </React.StrictMode>
// );

import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'
import { IndexStyles } from './index.styles.js'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <IndexStyles />
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    </>,
)
