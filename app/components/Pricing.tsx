"use client";
import Link from "next/link";
import React from "react";
const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "₹500.00",
      frequency: "/mo",
      description: "Unlock 10 Daily Searches & Basic Features",
      features: [
        "10 Daily Searches",
        "Access to Basic Links",
        "Standard Search Results",
      ],
      offer: "One month free trial for new users",
    },
    {
      name: "Premium Plan",
      price: "₹2,000.00",
      frequency: "/mo",
      description: "Unlock 25 Daily Searches & Exclusive Features",
      features: [
        "25 Daily Searches",
        "Increased Results Quality",
        "Access to Links",
        "Advanced GPT Research Capabilities",
        "More Image Details",
      ],
      offer: "50% off for the first month",
    },
    {
      name: "Pro Plan",
      price: "₹5,000.00",
      frequency: "/mo",
      description: "Unlimited Searches & Pro Features",
      features: [
        "Unlimited Daily Searches",
        "Highest Quality Results",
        "Priority Customer Support",
        "Advanced Analytics",
        "Enhanced Image Analysis",
      ],
      offer: "30% off for the first month",
    },
  ];

  return (
    <div id="pricing" className="bg-black font-underline text-white py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold text-yellow-400 mb-10">
        Subscriptions & Credits
      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col justify-between max-w-sm w-full bg-[#121212] p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600">
              {plan.name}
            </h3>
            <p className="text-2xl font-semibold my-2">
              {plan.price} <span className="text-lg">{plan.frequency}</span>
            </p>
            <p className="text-gray-400 mb-4">{plan.description}</p>

            <div className="border-t border-gray-700 pt-4 mb-4 flex-grow">
              {plan.features.map((feature, i) => (
                <p key={i} className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 4.293a1 1 0 00-1.414 0L7 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </p>
              ))}
            </div>

            <div className="bg-gray-700 p-3 rounded-lg mb-4">
              <p className="text-gray-200 text-sm">{plan.offer}</p>
            </div>

            <div className="flex-shrink-0">
            <Link href='/payment'>
              <button className="w-full py-2 mt-2 text-lg font-semibold text-black bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                Buy Now
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
