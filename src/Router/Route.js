import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../component/page/Home/Home';
import Main from '../Layout/Main';

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
                
            }
        ]

    }
])

export default router;