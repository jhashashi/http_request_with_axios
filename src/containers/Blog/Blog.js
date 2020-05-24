import React, {Component, Suspense} from 'react';
import {NavLink, Route, Switch} from "react-router-dom"
import Posts from "./Posts/Posts";
//import NewPost from "./NewPost/NewPost";
import classes from './Blog.module.css';

const NewPost = React.lazy(() => import('./NewPost/NewPost'));


/* Before react 16.6
const AysncLoading = asyncComponent(() => {
    return import('./NewPost/NewPost');
})*/
class Blog extends Component {
    state = {
        authenticate: false
    }

    render() {
        return (
            <div>
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeClassName={classes.myActive}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-posts',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} activeClassName={classes.myActive}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>HOME</h1>}/>*/}
                <Switch>
                    {/*<Route path="/new-posts" exact component={AysncLoading}/>*/}
                    <Route path="/new-posts" exact
                           render={() => <Suspense fallback={<div>Loading.......</div>}> <NewPost/> </Suspense>}/>
                    <Route path="/" component={Posts}/>
                    <Route render={() => <h1>Page Not Found</h1>}/>
                    {/*<Redirect from="/posts" to="/"/>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;
