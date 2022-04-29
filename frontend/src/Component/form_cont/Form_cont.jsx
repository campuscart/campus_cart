import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './form_cont.css';

export default function Form_cont() {
	const [userInput, setUserInput] = useState({
		name: '',
		enrollment_number: '',
		phone_number: '',
		hostel: '',
		room_number: '',
		order_type: '',
		transaction_number: ''
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
			window.location.href = 'https://www.google.com';
		}
		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.access}`
			}
		};
		axios
			.post(`http://127.0.0.1:8000/api/buy/create`, userInput, config)
			.then((res) => (window.location.href = '/success'))
			.catch((err) => {
				alert(
					'Some error occured. Please fill all the fields correctly'
				);
			});
	};

	return (
		<div className="cont">
			<div className="form-container">
				<form className="register-form">
					<div className="titl">Register for your Campus Cooler</div>
					<label className="form-field labl">Name:</label>
					<input
						id="name"
						className="form-field boxs"
						type="text"
						placeholder="Name"
						name="name"
						onChange={(e) => handleChange(e)}
					/>
					<label className="form-field labl"> Enrollment No.:</label>
					<input
						id="Roll No."
						className="form-field boxs"
						type="text"
						placeholder="Roll no."
						name="enrollment_number"
						onChange={(e) => handleChange(e)}
					/>
					<label className="form-field labl">
						Image of Transaction:
					</label>
					<input type="file" />
					<label className="form-field labl">Phone No.:</label>
					<input
						id="Room no."
						className="form-field boxs"
						type="text"
						placeholder="Room no."
						name="phone_number"
						onChange={(e) => handleChange(e)}
					/>
					<label className="form-field labl">Hostel:</label>
					<input
						id="Hostel no."
						className="form-field boxs"
						type="text"
						placeholder="Hostel no."
						name="hostel"
						onChange={(e) => handleChange(e)}
					/>
					<label className="form-field labl">Room No.:</label>
					<input
						id="Room no."
						className="form-field boxs"
						type="text"
						placeholder="Room no."
						name="room_number"
						onChange={(e) => handleChange(e)}
					/>
					<label className="form-field labl">Transaction ID:</label>
					<input
						id="Transaction ID"
						className="form-field boxs"
						type="text"
						placeholder="Transaction ID"
						name="transaction_number"
						onChange={(e) => handleChange(e)}
					/>
					<div className="radio" onChange={handleChange}>
						<input
							type="radio"
							value="buy"
							name="order_type"
							className="radio_b"
						/>{' '}
						Buy
						<input
							type="radio"
							value="rent"
							name="order_type"
							className="radio_b"
						/>{' '}
						Rent
						<input
							type="radio"
							value="maintenance"
							name="order_type"
							className="radio_b"
						/>{' '}
						Maintenance
					</div>

					<input
						className="form-field next"
						type="submit"
						value="Submit"
						onClick={handleSubmit}
					></input>
				</form>
			</div>
			<img src={require('../blocky.png')} className="blocky"></img>
		</div>
	);
}
