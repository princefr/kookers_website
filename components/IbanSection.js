import React from 'react';
import {IbanElement} from 'react-stripe-elements';
import { StripeProvider, Elements } from 'react-stripe-elements'


 
function IbanElem() {
  return (
    <StripeProvider apiKey={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}>
      <Elements>
        <IbanElement className="w-96 text-lg font-montserrat border bg-gray-200 h-10 items-center p-2" style={{base: {fontSize: '18px'}}} onReady={(el) => el.focus()}/>
      </Elements>
  </StripeProvider>

  );
}
 
export default IbanElem;