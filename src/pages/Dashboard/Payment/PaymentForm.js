import { CardElement, useElements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const PaymentForm = () => {
    const stripe = useState();
    const elements = useElements();

    const handleSubmit = e =>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if(!card){
            return;
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement>
                <button type='submit' disabled={!stripe}>
                    Pay For Parcel Pickup
                </button>
            </CardElement>
            </form>
        </div>
    );
};

export default PaymentForm;