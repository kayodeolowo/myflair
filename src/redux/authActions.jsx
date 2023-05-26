// authActions.js

import { loginSuccess, loginFailure } from './authSlice';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    // Make a POST request to the login endpoint
    const response = await fetch('https://be-great-finance.herokuapp.com/api/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      // Handle login failure
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    // Login successful, update the authentication state
    const user = await response.json();
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
