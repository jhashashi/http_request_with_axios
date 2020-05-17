import React, {Component} from 'react';
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import axios from "../../axios";

import classes from './Blog.module.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedId: null,
        error: false
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
        this.setState({selectedId: id})
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went Wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                    return <Post key={post.id} title={post.title} author={post.author}
                                 selectedPost={() => this.selectedPostHandler(post.id)}/>
                }
            );
        }
        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost selectedId={this.state.selectedId}/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        );
    }
}

export default Blog;
