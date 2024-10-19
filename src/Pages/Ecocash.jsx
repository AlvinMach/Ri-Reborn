import React, { useState } from 'react';
import axios from 'axios';

const EcoCashPayment = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
     
      const response = await axios.post('https://api.ecocash.com/transaction', {
        phoneNumber,
        amount,
        // Additional necessary data based on EcoCash API
      });

      if (response.data.success) {
        setMessage('Payment successful!');
      } else {
        setMessage('Payment failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error during payment', error);
      setMessage('Payment failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>EcoCash Payment</h2>
      <form onSubmit={handlePayment}>
        <div>
          <label>
            Phone Number:
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Pay with EcoCash'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EcoCashPayment;