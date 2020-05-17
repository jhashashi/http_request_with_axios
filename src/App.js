import React from 'react';
import classes from './App.module.css';
import Blog from "./containers/Blog/Blog";

function App() {
    return (
        <div className={classes.App}>
            <Blog/>
        </div>
    );
}

export default App;
