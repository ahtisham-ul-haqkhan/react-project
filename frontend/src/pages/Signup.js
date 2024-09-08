import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../toats';
import axios from "axios";
function Signup() {

const [signusers, setSignUsers] = useState({
    name: '',
    email: '',
    password: ''
})
const handleChange = (e) => {
    const { name, value} = e.target;
    setSignUsers({ ...signusers, [name] : value});
    console.log(name, value);
}
const submitForm = async (e) => {
    e.preventDefault();
    const { name, email, password} = signusers;
    if (!name || !email || !password) {
        return handleError('name, email and password are required');
    }
    try {
        const response = await axios.post("http://localhost:4000/api/signup", signusers);
        handleSuccess('Sign up successful!'); 
        console.log(response); 
    } catch (error) {
        handleError('An error occurred during sign up.'); // Call handleError with an error message
        console.error(error); // Log the error for debugging
    }
}

  return (
    <div className='container'>
      <h1>Sign Up</h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleChange} type='text' name='name' autoFocus placeholder='Enter Your Name' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input onChange={handleChange} type='email' name='email' placeholder='Enter Your Email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input onChange={handleChange} type='password' name='password' placeholder='Enter Your Password' />
        </div>
        <button type='submit'>Signup</button>
        <div>
          <span>Already have an account?</span>
          <Link to="/login">Log In</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Signup;
