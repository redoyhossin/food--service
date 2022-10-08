import React from 'react';
import { Link } from 'react-router-dom';

const ShopeCard = ({ food }) => {
    const { strMeal, idMeal, strMealThumb } = food;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl ring-offset-violet-600">
                <figure><img src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary"> <Link to={`/ShopeCard/${idMeal}`}>Buy Now</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopeCard;