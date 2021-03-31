import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
 
function CardElem(){
  return (
      <Elements stripe={stripePromise}>
        <CardElement className="w-96 text-lg font-montserrat border bg-gray-200 h-10 items-center p-2" style={{base: {fontSize: '18px'}}} onReady={(el) => el.focus()}/>
      </Elements>

  );
}
 
export default CardElem;