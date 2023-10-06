import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
     const postsID=useLoaderData();
          const  postData=postsID

    return (
        <div>
            <h1> Details About your post </h1>
            <p> </p>
            <p> ID:{postData.id} </p>
            <h1> Title: { postData.title}</h1>
        </div>
     

    );
};

export default PostDetails;