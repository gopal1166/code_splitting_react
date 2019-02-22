/*
  Renders posts from jsonplaceholder
  using redux-saga for causing side effects
*/
import React from 'react';
import { connect } from 'react-redux';

class Posts extends React.Component {
  state = {
    posts: null,
    post: null
  }

  componentDidMount() {
    this.props.onFetchPosts()
  }

  /*
    we can mutate the state
  */
  componentWillReceiveProps(newProps) {
    this.setState({ posts: newProps.posts, post: newProps.post })
  }

  btnHandler = (id) => {
    this.props.onFetchPost(id)
  }

  render() {
    let postsJSX = null
    const { posts, post } = this.state
    if (post) {
      console.log("post", post);
    }

    if (posts) {
      postsJSX = posts.map(post => {
        return (
          <li>
            <button onClick={() => this.btnHandler(post.id)}>{post.title}</button>
          </li>
        )
      })
    }
    return (
      <div>{post ? post.title : postsJSX}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    post: state.post
  }
}

/*
  dispatching actions to watcher sagas
*/
const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts: () => dispatch({ type: "POSTS_API_CALL_INIT" }),
    onFetchPost: (id) => dispatch({ type: "FETCH_POST_API_CALL_INIT", id })
  };
};
// export default ExtraInfoTable;
export default connect(mapStateToProps, mapDispatchToProps)(Posts);

// export default Posts;
