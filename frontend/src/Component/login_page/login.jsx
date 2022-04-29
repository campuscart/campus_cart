import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

export default function Login() {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		const userData = {
			username: userName,
			password: password
		};
		console.log(userData);
		axios
			.post('http://127.0.0.1:8000/api/login', userData)
			.then((res) => {
				localStorage.setItem('userInfo', JSON.stringify(res.data));
				window.location.href = "/admin"
			})
			.catch((err) => {
				setPassword('');
				setUserName('');
			});
	};
	return (
		<div className="login_cont">
			<div className="login_img_cont">
				<img src={require('./Group 11.png')} className="login_img" />
				<div className="login_left_content">
					{/* <div className='login_left_title'>
					Hello Friend!
				</div>
				<div className='login_left_desc'>
					Enter your details and start your journey with us.
				</div> */}
				</div>
			</div>
			<div className="login_right">
				<div className="login_div">
					<div className="login_title">Login</div>
					<div className="login_line"></div>
				</div>
				<div className="input_login">
					<label className="form-field_login labl_login">
						Username:
					</label>
					<input
						id="Username"
						className="form-field_login boxs_login"
						type="text"
						placeholder="Username"
						name="Username"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
					<label className="form-field_login labl_login">
						Password:
					</label>
					<input
						id="Password"
						className="form-field_login boxs_login"
						type="password"
						placeholder="Password"
						name="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button
					className="form-field_login submit_login"
					type="submit"
					onClick={(e) => handleSubmit(e)}
				>
					Submit
				</button>
			</div>
		</div>
	);
}
