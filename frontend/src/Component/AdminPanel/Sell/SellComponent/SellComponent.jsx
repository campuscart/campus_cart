import React, { useState, useEffect } from 'react';

import './SellComponent.css';
import SingleInput from '../../Utils/single_input';
import DualInput from '../../Utils/dual_input';

function SellComponent({
	id,
	date,
	name,
	enrollment_number,
	order_closed,
	phone_number,
	hostel,
	room_number,
	amount_asked,
	image,
	updateData
}) {
	const [edit, setEdit] = useState(true);
	const [closed, setClosed] = useState(order_closed);
	const [changeable, setChangeable] = useState({});
	useEffect(() => {
		setClosed(order_closed);
		setEdit(true);
		setChangeable({
			name: name,
			enrollment_number,
			phone_number,
			hostel,
			room_number,
			amount_asked
		});
	}, []);

	useEffect(() => {
		const userData = { order_closed: closed };
		updateData(id, userData);
	}, [closed]);

	const updateOrder = () => {
		updateData(id, changeable);
	};

	const convertToHumanReadable = (dateTime) => {
		// create a date time object
		const date = new Date(dateTime);
		// return date in form of day-month-year
		return `${date.getDate()} ${date.toLocaleString('default', {
			month: 'short'
		})} ${date.getFullYear()}`;
	};

	if (Object.keys(changeable).length !== 0) {
		return (
			<div className="buy-component-container">
				<div className="b-1">
					<input
						type="checkbox"
						defaultChecked={order_closed}
						onChange={() => setClosed(!closed)}
					/>
				</div>
				<div className="b-2">{convertToHumanReadable(date)}</div>
				<div className="b-3">
					<DualInput
						changeable={changeable}
						setChangeable={setChangeable}
						par1="name"
						par2="enrollment_number"
						edit={edit}
					/>
				</div>
				<div className="b-4">
					<SingleInput
						changeable={changeable}
						setChangeable={setChangeable}
						par1="phone_number"
						edit={edit}
					/>
				</div>
				<div className="b-5">
					<DualInput
						changeable={changeable}
						setChangeable={setChangeable}
						par1="hostel"
						par2="room_number"
						edit={edit}
					/>
				</div>
				<div className="b-6">
					<a href={`http://127.0.0.1:8000${image}`} target="_blank">
						<SingleInput
							changeable={changeable}
							setChangeable={setChangeable}
							par1="amount_asked"
							edit={edit}
						/>
					</a>
				</div>
				<div className="b-7" onClick={() => setEdit(!edit)}>
					{edit ? '✍️' : <div onClick={updateOrder}>💾</div>}
				</div>
			</div>
		);
	}
	return <div />;
}

export default SellComponent;
