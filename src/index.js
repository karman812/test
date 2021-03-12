import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
