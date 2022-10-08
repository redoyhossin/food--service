import React from 'react';

const CardAbout = ({ shop }) => {
    const {strIngredient,strType,strDescription } = shop;
    return (
        <div className=' border-4 border-y-emerald-700 m-10 p-4  shadow-current shadow-2xl'>
            <h1>{strIngredient}</h1>
            <h1>{strType}</h1>
            <div className='border-2  border-x-red-400 m-10 p-10 shadow-2xl shadow-violet-700'>
                <p>{strDescription}</p>
            </div>
        </div>
    );
};

export default CardAbout;