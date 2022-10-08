import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShopeCard from './ShopeCard/ShopeCard';


const Shop = () => {
    const FoodItems = useLoaderData();
    const FoodItem = FoodItems.meals;

    return (
        <div className=' grid lg:grid-cols-3 my-20  gap-12 justify-items-center'>

            {
                FoodItem.map(food=><ShopeCard key={food.idMeal} food={food}></ShopeCard>)
            }
            
        </div>
    );
};

export default Shop;