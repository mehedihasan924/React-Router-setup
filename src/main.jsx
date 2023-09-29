import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Error from './Component/Error/Error.jsx';
import Home from './Component/Home/Home.jsx';
import First from './Component/First/First.jsx';
import Frends from './Component/Frends/Frends.jsx';
import FriendsDetails from './Component/FriendsDetail/FriendsDetails.jsx'
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:  <App />,
//   },
//   {
//     path: "/about",
//     element:  <About />,
   
//   },
//   {
//     path: "/contact",
//     element:  <Contact />,
//   },
//   {
//     path: "*",
//     element: <Error />,
//   },
// ]);
const router=createBrowserRouter([
  {
    path:'/',
    element: <Home> </Home>,
    children:[     {
            path: "/",
            element:  <First />,
          
          },
              {
          path: "/about",
          element:  <About />,
        
        },
        {
          path:"/frends",
          element:<Frends></Frends>,
          loader:()=> fetch('/public/data.json')
        },
        {
          path: "friend/:friendID",
          element:<FriendsDetails></FriendsDetails>,
          loader :({params})=> fetch(`/public/data.json/${params.friendID}`)
         
        },
        {
          path: "/contact",
          element:  <Contact />,
        },
        
    ]
 } ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider  router={router}> </RouterProvider>
  </React.StrictMode>,
)
