import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { handleError, handleSuccess } from '../toats';



function Login() {
  const [logininfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...logininfo, [name]: value });
    console.log(name, value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const { email, password } = logininfo;
    if (!email || !password) {
      return handleError('Email and password are required');
    }

    try {
      const response = await axios.post("http://localhost:4000/api/login", logininfo);
      const { success, message, jwtToken, name, error } = response.data;

      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken); 
        localStorage.setItem('loggedInUser', name);

        handleSuccess("User Login Succesfullt");
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || 'Login failed';
        handleError(details);
      } else if (!success) {
        handleError(message);
      }

      console.log(response.data);
    } catch (err) {
      handleError('An error occurred during login.');
      console.error(err);
    }
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            onChange={handleChange}
            name='email'
            placeholder='Enter Your Email'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            onChange={handleChange}
            name='password'
            placeholder='Enter Your Password'
          />
        </div>
        <button type='submit'>Login</button>
        <div>
          <span>Don't have an account?</span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
