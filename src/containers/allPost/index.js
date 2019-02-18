import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditPost from '../editPost';



class AllPost extends React.Component {
  render() {
    console.log('this.props.posts', this.props.posts)
        return (
            <div>
                <h1>All Posts</h1>
                {this.props.posts.reducers.map((post) => (
                    <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.message}</p>
                            <p><button onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: post.id }) }>Edit</button></p>
                            <p><button onClick={()=>this.props.dispatch({type:'DELETE_POST',id:post.id})}>Delete</button></p>

                            {post.editing ? 
                                            <EditPost post={post} key={post.id} /> 
                                            :
                                            '' 
                            }
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);