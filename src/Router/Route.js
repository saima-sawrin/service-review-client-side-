import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddServices from '../component/page/Add Services/AddServices';
import Blog from '../component/page/Blog/Blog';
import Home from '../component/page/Home/Home';
import AllServices from '../component/page/Home/Services/AllServices';
import Services from '../component/page/Home/Services/Services';
import Login from '../component/page/Login/Login';
import Review from '../component/page/Review/Review';
import Details from '../component/page/ServiceDetails/Details';
import SignUp from '../component/page/SignUp/SignUp';
import Main from '../Layout/Main';
import PrivateRoute from './PrivateRouter';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/',
                element:<Services></Services>
                
            },
            {
                path:'/services',
               
                element:<AllServices></AllServices>
                
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myReview',
                element: <Review></Review>
            },
            {
                path: '/addServices/:id',
                loader:({params})=>fetch(`http://localhost:5000/allServices/${params.id}`),
                element: <AddServices></AddServices>
            },
            {
                path:'/service/:id',
                loader:({params})=>fetch(`http://localhost:5000/allServices/${params.id}`),
                element: <Details></Details>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            
        ]

    }
])

export default router;