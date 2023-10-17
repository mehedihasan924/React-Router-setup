import React from 'react';

const SingleFriendShow = ({alldata}) => {

    const {name, email, id, phone, img }=alldata
    return (
        <div><p>ID: {id}</p>
            <h1> Name:{name} </h1>
            <h2>Email: {email}</h2>
            <h3>Phone : {phone}</h3>
            <img src={img} alt="" />

        </div>
    );
};

export default SingleFriendShow;