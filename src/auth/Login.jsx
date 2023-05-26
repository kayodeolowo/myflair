// LoginForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/authActions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the loginUser action
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-300 rounded px-4 py-2 w-full"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border border-gray-300 rounded px-4 py-2 w-full"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
