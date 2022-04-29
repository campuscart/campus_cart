import React, { useState, useEffect } from 'react';
import './form_conts.css';
import axios from 'axios';

export default function Form_conts() {
	const [userInput, setUserInput] = useState({
		name: '',
		enrollment_number: '',
		phone_number: '',
		hostel: '',
		room_number: '',
		amount_asked: ''
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserInput({ ...userInput, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const userInfo = JSON.parse(localStorage.getItem('userInfo'));

		// if user info exist then make a get request with auth token
		if (!userInfo) {
			window.SharedArrayBuffer.location = 'https://www.google.com';
		}
		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.access}`
			}
		};
		axios
			.post(`http://127.0.0.1:8000/api/sell/create`, userInput, config)
			.then((res) => (window.location.href = '/success'))
			.catch((err) => {
				alert(
					'Some error occured. Please fill all the fields correctly'
				);
			});
	};

	return (
		<div className="cont_sell">
			<div className="form-container_sell">
				<form className="register-form_sell">
					<div className="titl_sell">
						Register for your Campus Cooler
					</div>
					<label className="form-field_sell labl_sell">Name:</label>
					<input
						id="name"
						className="form-field_sell boxs_sell"
						type="text"
						placeholder="Name"
						name="name"
						onChange={handleChange}
					/>
					<label className="form-field_sell labl_sell">
						{' '}
						Enrollment No.:
					</label>
					<input
						id="Roll No."
						className="form-field_sell boxs_sell"
						type="text"
						placeholder="Roll no."
						name="enrollment_number"
						onChange={handleChange}
					/>
					<label className="form-field_sell labl_sell">
						Image of Cooler:
					</label>
					<button
						classname="form-fieldsell img_sell"
						id="img_s"
						type="submit"
					>
						Add Image
					</button>
					<label className="form-field_sell labl_sell">
						Phone No.:
					</label>
					<input
						id="Room no."
						className="form-field_sell boxs_sell"
						type="text"
						placeholder="Room no."
						name="phone_number"
						onChange={handleChange}
					/>
					<label className="form-field_sell labl_sell">Hostel:</label>
					<input
						id="Hostel no."
						className="form-field_sell boxs_sell"
						type="text"
						placeholder="Hostel no."
						name="hostel"
						onChange={handleChange}
					/>
					<label className="form-field_sell labl_sell">
						Room No.:
					</label>
					<input
						id="Room no."
						className="form-field_sell boxs_sell"
						type="text"
						placeholder="Room no."
						name="room_number"
						onChange={handleChange}
					/>

					<label className="form-field_sell labl_sell">
						Amount Asked:
					</label>
					<input
						id="Amount Asked"
						className="form-field_sell boxs_sell"
						type="text"
						placeholder="Amount Asked"
						name="amount_asked"
						onChange={handleChange}
					/>

					<button
						className="form-field_sell next_sell"
						type="submit"
						onClick={handleSubmit}
					>
						Submit
					</button>
				</form>
			</div>
			<img src={require('../blocky.png')} className="blocky"></img>
		</div>
	);
}
