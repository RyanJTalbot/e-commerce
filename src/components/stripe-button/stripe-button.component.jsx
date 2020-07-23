import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 	'pk_test_51H7tigJhbTpRiySn3KKxVd9ph1yjiUNiPvJcNRJjfHnpOCD2J1AByoRWjzyArVaozHWAJAwuDMQghsQZ18JiDNMN00Zu843Ygd'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='RyanJT Clothing'
      billingAddressshippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;