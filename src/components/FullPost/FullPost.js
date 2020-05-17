import React, {Component} from 'react';
import axios from "axios";

import classes from './FullPost.module.css';

class FullPost extends Component {

    state = {
        selectedPost: null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.selectedId) {
            if ((this.state.selectedPost === null) || (this.state.selectedPost && this.state.selectedPost.id !== this.props.selectedId))
                axios.get("/posts/" + this.props.selectedId).then(
                    response => {
                        this.setState({selectedPost: response.data})
                    }
                )
        }
    }
    deletePostHandler = () => {
        axios.delete("/posts/" + this.props.selectedId).then(
            (response) => {
                console.log(response);
            }
        )
    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.selectedId) {
            post = <p style={{textAlign: 'center'}}>Loading.....!</p>;
        }
        if (this.state.selectedPost) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.selectedPost.title}</h1>
                    <p>{this.state.selectedPost.body}</p>
                    <div className={classes.Edit}>
                        <button className={classes.Delete} onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;
