import React from 'react';
import './SingleFrend.css'
import data from '../../../public/data.json'
import { Link } from 'react-router-dom';

const SingleFrend = ({friend}) => {
 
    console.log(data)
    console.log(friend)
    const { email,  name, id, phone, img}=friend;
  
    return (
        <div className='friend'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
            <p> <Link to={`/friend/${id}`}> More details..</Link></p>
            
        </div>
    );
};

export default SingleFrend;