import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/authService';

function AdminLoginPage() {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = async (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();

		try{
			const response = await loginUser(formData);

			if (!response.token) {
				return alert(response.message);
			}

			if (response.user.role !== "admin") {
				return alert("Access Denied");
			}

			localStorage.setItem("token", response.token);

			alert("Admin Login Successful");

			navigate("/")
		} catch (error) {
			console.log(error);
		}
	};

  return (
    <div className='admin-login-page'>
			<form 
				className='admin-login-form' 
				onSubmit={handleSubmit}
			>
				<h1>Admin Login</h1>

				<input 
					type="email" 
					name='email'
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

export default AdminLoginPage;