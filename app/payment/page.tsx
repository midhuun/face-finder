"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { FaCcVisa } from 'react-icons/fa';

const PaymentPage: React.FC = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Payment submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-2xl text-white">
        <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">Secure Payment</h2>

        {/* Card Image for Decoration */}
        <div className="flex justify-center mb-6">
         <Image height={300} width={300} src="/credit.png" alt="Credit Card" className="w-[350px] h-[100px] object-contain" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name on Card */}
          <div>
            <label htmlFor="name" className="block text-gray-400 mb-2">Name on Card</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Jane Doe"
              required
            />
          </div>

          {/* Card Number with Card Icon */}
          <div className="relative">
            <label htmlFor="cardNumber" className="block text-gray-400 mb-2">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 pl-10"
              placeholder="1234 5678 9012 3456"
              maxLength={16}
              required
            />
            <div className="absolute top-10 left-1 text-gray-400">
              <FaCcVisa size={28} />
            </div>
          </div>

          {/* Expiry Date and CVC Fields */}
          <div className="flex gap-4">
            {/* Expiry Date */}
            <div className="relative w-1/2">
              <label htmlFor="expiry" className="block text-gray-400 mb-2">Expiry Date</label>
              <input
                type="text"
                id="expiry"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 pl-8"
                placeholder="MM/YY"
                maxLength={5}
                required
              />
              <span className="absolute left-1 top-10 text-gray-400">📅</span>
            </div>

            {/* CVC */}
            <div className="relative w-1/2">
              <label htmlFor="cvc" className="block text-gray-400 mb-2">CVC</label>
              <input
                type="text"
                id="cvc"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 pl-8"
                placeholder="123"
                maxLength={3}
                required
              />
              <span className="absolute left-1 top-10 text-gray-400">🔒</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg transition duration-300 shadow-lg hover:shadow-yellow-500"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
