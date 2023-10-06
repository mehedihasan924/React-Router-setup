import React from 'react';
import {Outlet, useNavigate, useNavigation} from 'react-router-dom'
import Header from '../Header/Header';

const Home = () => {
    const navigation=useNavigation()
    return (
        <div>
            <Header></Header>
            <div><h1>{navigation.state ==='loading' && 'Loading..'} </h1>  </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;