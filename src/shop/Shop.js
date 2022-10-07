import React from 'react';
// import ShopProducts from './shopProduct/ShopProducts'
import { useEffect } from 'react';
import { useState } from 'react';
import ShopProducts from './shopProduct/ShopProducts'; 
const Shop = () => {
    const [Shops, setShops] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(res => res.json())
            .then(data => setShops(data.categories));
    }, []);
    // console.log(Shops)
    return (
        <div>
            <div className='grid grid-cols-3 gap-8 my-12 justify-items-center '>

                {
                    Shops.map(shop => <ShopProducts key={shop.idCategory} shop={shop}></ShopProducts>)
                }

            </div>
        </div>
    );
};

export default Shop;