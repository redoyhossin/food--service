import React from 'react';
import { Link } from 'react-router-dom';

const ShopProducts = ({ shop }) => {
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = shop;
    return (
        <div>
            <div >

                <div className="card w-96 bg-green-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={strCategoryThumb} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{strCategory}</h2>
                        <p>{strCategoryDescription.slice(0, 80)}...</p>
                        <div className="card-actions">
                            <Link to="/SingleShop"><button className="btn btn-primary">Buy Now</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShopProducts;