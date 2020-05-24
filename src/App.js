import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import classes from './App.module.css';
import Blog from "./containers/Blog/Blog";

function App() {
    return (
        //<BrowserRouter basename={"/"}>
        <BrowserRouter>
            <div className={classes.App}>
                <Blog/>
            </div>
        </BrowserRouter>
    );
}

export default App;
