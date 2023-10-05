import React from 'react';
import './SingleFrend.css'
import data from '../../../public/data.json'
import { Link, useNavigate } from 'react-router-dom';

const SingleFrend = ({friend}) => {
    
   
    const { email,  name, id, phone, img}=friend;
  
    return (
        <div className='friend'>
            <img src={img} alt="" />
            <p> ID: {id}</p>
            <h1>{name}</h1>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
            {/* <p> <Link to={`/friend/${id}`}> More details..</Link></p> */}
            <Link to={`/friend/${id}`}> <button> Click me</button> </Link>
        </div>
    );
};

export default SingleFrend;