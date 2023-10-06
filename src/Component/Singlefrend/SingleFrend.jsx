import React from 'react';
import './SingleFrend.css'

import { Link, useNavigate } from 'react-router-dom';

const SingleFrend = ({friend}) => {
    const { email,  name, id, phone, img}=friend;
   const   navigate=useNavigate()
    const handleNavigate=()=>{
        navigate(`/friend/${id}`)
    }
  
    return (
        <div className='friend'>
            <img src={img} alt="" />
            <p> ID: {id}</p>
            <h1>{name}</h1>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
            {/* <p> <Link to={`/friend/${id}`}> More details..</Link></p> */}
            <Link to={`/friend/${id}`}> <button> Click me</button> </Link>
            <button onClick={handleNavigate}> Button click</button>
        </div>
    );
};

export default SingleFrend;