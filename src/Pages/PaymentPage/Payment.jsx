import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from 'react-stripe-elements';

function Payment() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardComplete, setCardComplete] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { token } = await stripe.createToken({ name });
    // Send the token to your server to complete the payment

    // Once payment is completed, reset the form
    setName('');
    setEmail('');
    setCardComplete(false);
    setSubmitting(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleCardChange = (event) => {
    setCardComplete(event.complete);
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Card details:
          <CardElement onChange={handleCardChange} />
        </label>
        <button type="submit" disabled={!cardComplete || submitting}>
          {submitting ? 'Submitting...' : 'Submit Payment'}
        </button>
      </form>
    </div>
  );
}

export default Payment;
