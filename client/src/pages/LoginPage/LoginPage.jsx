import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { loginUser } from '../../services/authService';
import "./LoginPage.css"

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) =>  ({
      ...prev, [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(formData);

      if (response.token) {
        localStorage.setItem(
          "token", response.token
        );

        alert(response.message)

        navigate("/");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='login-page'>
      <form
        onSubmit={handleSubmit}
        className='login-form'
      >
        <h1>Login</h1>

        <input 
          type="email" 
          name="email"
          placeholder='Enter Email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input 
          type="password" 
          name='password'
          placeholder='Enter Password'
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage;