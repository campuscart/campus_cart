import React, { useState } from 'react';
import BuyComponent from './BuyComponent/BuyComponent';

import './Buy.css';

function Buy({ data,updateData }) {
	const [show, setShow] = useState(false);
	return (
		<div className="buy-wrapper">
			<div className="buy-heading">
				<div className="b-1"></div>
				<div className="b-2">Date</div>
				<div className="b-3">Name</div>
				<div className="b-4">Phone Number</div>
				<div className="b-5">Hostel</div>
				<div className="b-6">Transaction Id</div>
				<div className="b-7"></div>
			</div>
			<div className="buy-closed">
				<div className="buy-show" onClick={() => setShow(!show)}>
					Show Closed
				</div>
				{show &&
					data
						?.filter((buyer) => buyer.order_closed)
						.map((buyers) => (
							<BuyComponent
								key={buyers.id}
								{...buyers}
								updateData = {updateData}
							/>
						))}
			</div>
			<div className="buy-content">
				{data
					?.filter((buyer) => !buyer.order_closed)
					.map((buyers) => (
						<BuyComponent
							key={buyers.id}
							{...buyers}
							updateData = {updateData}
						/>
					))}
			</div>
		</div>
	);
} 

export default Buy;
