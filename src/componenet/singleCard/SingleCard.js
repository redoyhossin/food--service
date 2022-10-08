import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCard = () => {
    const getSingleShops = useLoaderData();
    const getSingleShop = getSingleShops.meals[0];
    const { strMeal, idMeal, strMealThumb } = getSingleShop;
    return (
        <div className='flex justify-center  mt-32'>
            <div className="card w-96 bg-base-100 shadow-xl hover:image-full">
                <figure><img src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
        </div>
    );
};

export default SingleCard;