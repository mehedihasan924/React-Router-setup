import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFrend from '../Singlefrend/SingleFrend';

import './Frends.css';

const Frends = () => {


    const frends=useLoaderData();

  const jsonData=frends

    return (
        <div>
            <h1> we are 6 frends together  {frends.length} </h1>

            <h1> Items: </h1>
           <div className='main-div'>
                <div className='loop-div'>
                        {
                            jsonData.map(friend => <SingleFrend 
                            key={friend.id}
                            friend={friend}
                            >
                            </SingleFrend>)
                          
                        }
                       
                </div>
           </div>
        </div>
    );
};

export default Frends;