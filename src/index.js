import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use((requestConfig) => {
    console.log(requestConfig);
    return requestConfig;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

axios.interceptors.response.use((responseConfig) => {
    console.log(responseConfig);
    return responseConfig;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
