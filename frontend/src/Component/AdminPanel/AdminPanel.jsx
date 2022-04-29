import React, { useState, useEffect } from 'react';

import Buy from './Buy/Buy';
import Sell from './Sell/Sell';
import './AdminPanel.css';
import axios from 'axios';
// import { buy } from '../../Data/buy';
// import { sell } from '../../Data/sell';

function AdminPanel() {
	const [value, setValue] = useState(0);
	const [input, setInput] = useState('');
	const [data, setData] = useState([]);
	const [sell, setSell] = useState([]);
	const [buy, setBuy] = useState([]);
	const [reFetch, setReFetch] = useState(false);

	// The tab which is opened
	const options = ['buy', 'rent', 'maintenance', 'sell'];

	useEffect(() => {
		// get userInfo from local storage
		const userInfo = JSON.parse(localStorage.getItem('userInfo'));

		// if user info exist then make a get request with auth token
		if (!userInfo) {
			window.location.href = '/login';
		}
		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.access}`
			}
		};
		axios.get('http://127.0.0.1:8000/api/buy', config).then((res) => {
			setBuy(res.data);
			setData(
				res.data.filter((buyer) => buyer.order_type === options[0])
			);
		});
		axios.get('http://127.0.0.1:8000/api/sell', config).then((res) => {
			setSell(res.data);
		});
		setData(buy);
	}, [reFetch]);

	useEffect(() => {
		let newData;
		// setting newData based on the opened tab
		if (value === 3) {
			newData = sell;
		} else {
			newData = buy?.filter(
				(buyer) => buyer.order_type === options[value]
			);
		}

		// filtering the newData based on the input in the search box
		const finData = newData?.filter(
			(customer) =>
				customer.name.toLowerCase().includes(input.toLowerCase()) ||
				customer.enrollment_number
					.toLowerCase()
					.includes(input.toLowerCase())
		);

		setData(finData);
	}, [value, input]);
	const updateBuyData = (id, userData) => {
		// get userInfo from local storage
		const userInfo = JSON.parse(localStorage.getItem('userInfo'));

		// if user info exist then make a get request with auth token
		if (!userInfo) {
			window.location.href = '/login';
		}
		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.access}`
			}
		};
		axios
			.patch(`http://127.0.0.1:8000/api/buy/${id}`, userData, config)
			.then((res) => {
				setBuy(res.data);
				setData(
					res.data.filter(
						(buyer) => buyer.order_type === options[value]
					)
				);
			});
	};

	const updateSellData = (id, userData) => {
		// get userInfo from local storage
		const userInfo = JSON.parse(localStorage.getItem('userInfo'));

		// if user info exist then make a get request with auth token
		if (!userInfo) {
			window.location.href = '/login';
		}
		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.access}`
			}
		};
		axios
			.patch(`http://127.0.0.1:8000/api/sell/${id}`, userData, config)
			.then((res) => {
				setSell(res.data);
				setData(res.data);
			})
			.catch((e) => {
				window.location.href = '/login';
			});
	};

	return (
		<div className="admin-panel-wrapper">
			<div className="admin-panel-container">
				<div className="admin-panel-top">
					<div className="admin-panel-nav-btns">
						{/* Iterate through the settingeKeys and display the 
						keys as button for tab */}
						{options.map((option, index) => (
							<button
								key={index}
								onClick={() => setValue(index)}
								className={`admin-panel-option-btn ${
									index === value &&
									'admin-panel-active-option-btn'
								}`}
							>
								{option}
							</button>
						))}
					</div>
					<div className="admin-panel-search">
						<input
							type={'text'}
							label=" Search "
							value={input}
							onChange={(e) => {
								setInput(e.target.value);
							}}
							placeholder="Search"
							className="admin-input"
						/>
					</div>
				</div>
				<div className="admin-panel-bottom">
					<div className="admin-panel-content-options">
						{/* Create a Input Box for each attributes 
						states are also passed so that they can be updated in the input box
						*/}
						{value === 3 ? (
							<Sell data={data} updateData={updateSellData} />
						) : (
							<Buy data={data} updateData={updateBuyData} />
						)}
					</div>
				</div>
				{/* Create buttons to close and save the box */}
			</div>
		</div>
	);
}

export default AdminPanel;
