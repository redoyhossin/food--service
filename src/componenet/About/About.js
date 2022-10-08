import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardAbout from './CardAbout';

const About = () => {
    const getShops = useLoaderData();
    const getShop = getShops.meals;
    return (
        <div className=''>
           {
                getShop.map(shops => <CardAbout key={shops.idIngredient} shop={shops} />)
            }
        </div>
    );
};

export default About;