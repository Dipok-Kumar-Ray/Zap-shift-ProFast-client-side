import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromis = loadStripe(import.meta.env.VITE_payment_Key);

const Payment = () => {
    return (
       <Elements stripe={stripePromis}>
        <PaymentForm></PaymentForm>
       </Elements>
    );
};

export default Payment;