// import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
// import SingleFriendShow from './SingleFriendShow';


const FriendsDetails = () => {
        // const [data, setData]=useState([])
        // useEffect(()=>{
        //     fetch( '/public/data.json')
        //     .then(res =>res.json())
        //     .then(data => setData(data))
        // },[])

        const navigate=useNavigate()
        const goBack=()=>{
            navigate(-1)
        }

    const allData=useLoaderData();
        const friendData= allData
        const { title, id, email, phone}=friendData
      console.log(friendData)
    
    return (
        <div>
           <h1>Everything About this Person is here {friendData.length}</h1>
           <h1>ID:{id} </h1>
           <h1> Name: {title} </h1>
                  
            <button onClick={goBack}>Go Back </button>
           </div>
    );
};

export default FriendsDetails;