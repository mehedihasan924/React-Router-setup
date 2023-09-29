import React from 'react';
import { useLoaderData } from 'react-router-dom';


const FriendsDetails = () => {
 
  const data=useLoaderData()
 
    return (
        <div>
            <h1>Everything About this Person is here</h1>
             <h2> Name:  {data.name}</h2>
             <p> Email: {data.email}</p>
            
        </div>
    );
};

export default FriendsDetails;