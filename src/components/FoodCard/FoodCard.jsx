import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <p className='absolute right-0 mr-4 mt-4 p-2 bg-slate-900 text-white rounded'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="text-center ">
                        <button className="btn btn-outline border-0 border-b-4 bg-slate-100 text-black border-orange-500 ">Add to Cart</button>
                    </div>
                </div>
            </div>
      
    );
};

export default FoodCard;