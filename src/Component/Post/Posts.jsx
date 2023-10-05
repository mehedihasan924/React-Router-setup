import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from './SinglePost';
import './SinglePost.css'
const Posts = () => {

     const posts=useLoaderData()

    return (
        <div>
            <h1> All Post Page {posts.length} </h1>
            <div className='main-post-div'>
            {
                posts.map( post=><SinglePost
                key={post.id}
                post={post}
                > </SinglePost>)
            }
            </div>
        </div>
    );
};

export default Posts;