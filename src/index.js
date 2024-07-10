import "./index.css"
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';
const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireState = (state) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} store={store} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireState(store.getState());


store.subscribe(() => {
    rerenderEntireState(store.getState())
});






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
