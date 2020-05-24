import React from 'react';
import {withRouter} from 'react-router-dom'
import classes from './Post.module.css';

const post = props => {
    return (
        <article className={classes.Post} onClick={props.selectedPost}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className={classes.Author}>{props.author}</div>
            </div>
        </article>
    );
};


export default withRouter(post);
