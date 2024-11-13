"use client"
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="h-screen font-underline flex items-center justify-center bg-black">
      <div className="bg-[#121212] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center  my-6 text-white">Sign up</h2>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label className="block text-sm font-medium text-gray-400" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 text-gray-200 border bg-[#121212] border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-grey-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#121212] text-gray-200 mt-1 px-4 py-2 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 text-gray-200 bg-[#121212] px-4 py-2 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full text-gray-200 bg-[#121212] mt-1 px-4 py-2 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-800"
          >
            Sign up
          </button>
        </form>

        <div className="my-4 text-center">
          <span className="text-sm text-gray-400">or</span>
        </div>

        <button onClick={() => signIn('google')}
          className="w-full flex items-center justify-center bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-800"
        >
          <FaGoogle className="mr-3" />
          Continue with Google
        </button>

       
      </div>
    </div>
  );
};

export default SignUpPage;
