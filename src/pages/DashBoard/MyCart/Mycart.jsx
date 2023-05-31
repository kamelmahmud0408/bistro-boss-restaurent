import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';

const Mycart = () => {
    const [cart]= useCart()
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Myu cart</title>
            </Helmet>
            <h2 className='text-3xl font-bold'>Total Items: {cart.length}</h2>
        </div>
    );
};

export default Mycart;