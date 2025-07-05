import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';

const stripePromis = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Payment = () => {
    return (
       <Elements stripe={stripePromis}>
        <PaymentForm></PaymentForm>
       </Elements>
    );
};

export default Payment;