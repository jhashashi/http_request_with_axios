import React, {Component} from 'react';
import classes from "./Posts.module.css"
import Post from "../../../components/Post/Post";
import axios from "../../../axios";
import {Route} from "react-router-dom"
import FullPost from "../FullPost/FullPost";

class Posts extends Component {

    state = {
        posts: [],
        selectedId: null,
        error: false,
        selectedPost: null
    }
    componentDidMount() {
        axios.get("/posts").then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Shashi'
                }
            });

            this.setState({
                posts: updatedPosts
            })
        }).catch(error => {
            this.setState({error: true})
        });
    }

    selectedPostHandler = id => {
        console.log("Selected ID :- " + id)
        this.props.history.push({pathname: "/" + id})
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went Wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    /*<NavLink to ={'/' + post.id} key={post.id} style={{ textDecoration: 'none' }}>*/
                    <Post title={post.title} author={post.author} key={post.id} style={{textDecoration: 'none'}}
                          selectedPost={() => this.selectedPostHandler(post.id)}/>
                    /*</NavLink>*/
                );
            });
        }
        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <Route path="/:id" exact component={FullPost}/>
            </div>
        );
    }
}

export default Posts;
