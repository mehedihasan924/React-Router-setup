import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import pdf from './../../../public/data.json'
import Iframe from 'react-iframe'

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

    const friends=useLoaderData();
        const friendData= friends
      console.log(friendData)

    return (
        <div>
            <h1>Everything About this Person is here</h1>
           <p> ID: {friendData.id}</p>
           <h1> Title: {friendData.name}</h1>
           <p> {friendData.email}</p>
           <p>Phone : {friendData.phone}</p>
         
         <button onClick={goBack}>Go Back </button>
           </div>
    );
};

export default FriendsDetails;