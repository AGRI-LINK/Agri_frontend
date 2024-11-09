import React, { useState } from 'react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('mobileMoney');
  const [network, setNetwork] = useState('mtn');

  const handlePayment = (e) => {
    e.preventDefault();
    console.log(`Processing payment via ${paymentMethod} on ${network}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-[#00b207] mb-6">Payment</h1>
      <div className="bg-white shadow-md rounded p-4 max-w-md mx-auto">
        <form onSubmit={handlePayment}>
          <div className="mb-4">
            <label className="block text-gray-700">Payment Method:</label>
            <select
              className="w-full p-2 border rounded"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="mobileMoney">Mobile Money</option>
              <option value="card">Card Payment</option>
              <option value="others">Others</option>
            </select>
          </div>

          {paymentMethod === 'mobileMoney' && (
            <div className="mb-4">
              <label className="block text-gray-700">Select Network:</label>
              <select
                className="w-full p-2 border rounded"
                value={network}
                onChange={(e) => setNetwork(e.target.value)}
              >
                <option value="mtn">MTN</option>
                <option value="telecel">Telecel</option>
                <option value="airteltigo">AirtelTigo</option>
              </select>
              <div className="flex space-x-4 mt-2">
                <img src="/images/mtn.png" alt="MTN" className="h-8" />
                <img src="/images/telecel.png" alt="Telecel" className="h-8" />
                <img src="/images/airteltigo.png" alt="AirtelTigo" className="h-8" />
              </div>
            </div>
          )}

          {paymentMethod === 'card' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700">Card Number:</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Expiry Date:</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="MM/YY" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">CVV:</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="123" />
              </div>
              <div className="flex space-x-4 mt-2">
                <img src="/images/visa.png" alt="Visa" className="h-8" />
                <img src="/images/mastercard.png" alt="MasterCard" className="h-8" />
              </div>
            </>
          )}

          {paymentMethod === 'others' && (
            <div className="mb-4">
              <label className="block text-gray-700">Specify Payment Method:</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Enter payment method" />
            </div>
          )}

          <button type="submit" className="bg-[#00b207] text-white px-4 py-2 rounded hover:bg-green-700 w-full">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment; 