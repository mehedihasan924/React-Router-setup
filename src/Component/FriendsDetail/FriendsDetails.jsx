// import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import SingleFriendShow from './SingleFriendShow';


const FriendsDetails = ({ friend}) => {
        // const [data, setData]=useState([])
        // useEffect(()=>{
        //     fetch( '/public/data.json')
        //     .then(res =>res.json())
        //     .then(data => setData(data))
        // },[])

const {name,id, email}= friend

        const navigate=useNavigate()
        const goBack=()=>{
            navigate(-1)
        }

    const allData=useLoaderData();
        const friendData= allData
      console.log(friendData)
    
    return (
        <div>
           <h1>Everything About this Person is here {friendData.length}</h1>
           {/* {
            friendData.map(alldata=> <SingleFriendShow
                key={alldata.id}
                alldata={alldata}
            > </SingleFriendShow>)
           } */}
                 <h1>ID: {id}</h1>
                <h1> Name:{name}</h1>
                  
            <button onClick={goBack}>Go Back </button>
           </div>
    );
};

export default FriendsDetails;