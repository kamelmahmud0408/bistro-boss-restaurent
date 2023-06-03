import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import useCart from '../../../hooks/useCart';

const Payment = () => {
      const [cart]=useCart()
      const total=cart.reduce((sum,item)=> sum+item.price,0)
      const price=parseFloat(total.toFixed(2))

    const stripePromise = loadStripe(import.meta.env.VITE_payment_geteway_pk)

    return (
        <div className='w-full'>
            <SectionTitle subHeading='Please Provide' heading='Payment'></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price}></CheckOutForm>
            </Elements>

        </div>
    );
};

export default Payment;