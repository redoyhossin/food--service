import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from '../componenet/About/About';
import Home from '../componenet/Home/Home';
import Shop from '../componenet/Shop/Shop';
import SingleCard from '../componenet/singleCard/SingleCard'
import Main from '../Layout/Main';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: 'About',
                    element: <About />,
                    loader:()=> fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`),

                },
                {
                    path: 'Shop',
                    loader:()=>fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`),
                    element:< Shop />,

                },
                {
                    path: 'ShopeCard/:ShopeCardId',
                    loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.ShopeCardId}`),
                    element:<SingleCard/>
                }
    ]
        },
       
    ])
return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
);
};

export default Router;