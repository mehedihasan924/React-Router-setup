import React from 'react';
import { useLoaderData ,useNavigate} from 'react-router-dom';

const PostDetails = ({}) => {
    const navigate=useNavigate()
    const goBack=()=>{
        navigate(-1)
    }

     const postsID=useLoaderData();
          const  postData=postsID

    return (
        <div>
            <h1> Details About your post </h1>
            <p> </p>
            <p> ID:{postData.id} </p>
            <h1> Title: { postData.title}</h1>

            <button onClick={goBack}>Go Back </button>
        </div>
     

    );
};

export default PostDetails;