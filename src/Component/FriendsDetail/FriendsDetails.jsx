import React from 'react';
import { useLoaderData } from 'react-router-dom';


const FriendsDetails = () => {


    // const quiz = useLoaderData();
    // const quizData = quiz.data.questions;
    // console.log(quizData);

    const friends=useLoaderData();
        const friendData= friends
      console.log(friendData)

    return (
        <div>
            <h1>Everything About this Person is here</h1>
           <p> ID: {friendData.id}</p>
           <h1> Title: {friendData.title}</h1>
           <p> {friendData.body}</p>
        </div>
    );
};

export default FriendsDetails;