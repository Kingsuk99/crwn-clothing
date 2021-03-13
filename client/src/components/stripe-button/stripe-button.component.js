import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton=({price})=>{
    const priceForStripe=price *100;
    const publishableKey ='pk_test_51HyW42BuYyZGs9dM1JOGD1qmE8rln7TNmP7x1XXKQFUMPYQ9yXOVRfcNG9njz60jzJUj8qrGhIl5zgiIiGt40MDK00AD9iYATm';
    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token: token
          }
        })
          .then(response => {
            alert('succesful payment');
          })
          .catch(error => {
            console.log('Payment Error: ', error);
            alert(
              'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
          });
      };
 
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