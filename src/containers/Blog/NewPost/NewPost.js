import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import axios from "axios"

import classes from './NewPost.module.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        postSubmitted: false
    }
    postDataHandler = () => {
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }
        axios.post('/posts', {
            data
        }).then((response) => {
           // this.setState({postSubmitted:true})
            this.props.history.push("/");
            console.log(response);
        })
    }

    render() {
        let postSubmit = null;
        if (this.state.postSubmitted) {
            postSubmit = <Redirect to={"/"}/>
        }
        return (
            <div className={classes.NewPost}>
                {postSubmit}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title}
                       onChange={(event) => this.setState({title: event.target.value})}/>
                <label>Content</label>
                <textarea rows="4" value={this.state.content}
                          onChange={(event) => this.setState({content: event.target.value})}/>
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Shashi">Shashi</option>
                    <option value="Suraj">Suraj</option>
                    <option value="Puja">Puja</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
