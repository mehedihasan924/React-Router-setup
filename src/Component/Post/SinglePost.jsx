
import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePost.css'


const SinglePost = ({post}) => {
    const {title, id, body }=post
    return (
        <div className='post'>
          <div>
           <h2> id: {id}</h2>
                <h1> Title: {title}</h1>
                <p> {body}</p>
            
                <Link to={`/posts/${id}`}> Show Details..</Link>
          </div>
        </div>
    );
};

export default SinglePost;