import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price *100;
    const onToken =token =>{
        console.log('token',token);
        alert('Payment Successful');
    }
    const publishableKey ='pk_test_51HyW42BuYyZGs9dM1JOGD1qmE8rln7TNmP7x1XXKQFUMPYQ9yXOVRfcNG9njz60jzJUj8qrGhIl5zgiIiGt40MDK00AD9iYATm';
    return(
        <div>
       
         <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
        </div>
    )
};
   

export default StripeCheckoutButton;