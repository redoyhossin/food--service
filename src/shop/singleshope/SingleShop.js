import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleShop = () => {
    const SingleShop = useLoaderData();
    console.log(SingleShop)
    return (
        <div>
            <h1>this is single shope</h1>
            <h1>this is single shope</h1>
            <h1>this is single shope</h1>
            <h1>this is single shope</h1>
            <h1>this is single shope</h1>
            <h1>this is single shope</h1>
            <h1 className='text-8xl'>this is single shope</h1>
            {/* <h1>{SingleShop}</h1> */}
        </div>
    );
};

export default SingleShop;