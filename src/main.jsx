import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Home from './Component/Home/Home.jsx';
import First from './Component/First/First.jsx';
import Frends from './Component/Frends/Frends.jsx';
import FriendsDetails from './Component/FriendsDetail/FriendsDetails.jsx'
import Posts from './Component/Post/Posts.jsx';
import PostDetails from './Component/PostDetails/PostDetails';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:  <App />
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
          path:'/friend/:id',
          loader:async({params})=>{
          console.log(params.id);
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
          },
          element:<FriendsDetails ></FriendsDetails>,
        },

        {
          path :"/posts",
          element:<Posts></Posts>,
          loader:()=> fetch("https://jsonplaceholder.typicode.com/posts")
        },
        {
         path:"posts/:postsID",
         element:<PostDetails> </PostDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsID}`)
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
