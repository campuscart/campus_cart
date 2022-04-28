import React, { useState } from 'react';
import SellComponent from './SellComponent/SellComponent';

import './Sell.css';
 
function Sell({ data , updateData }) {
	const [show, setShow] = useState(false);
	return (
		<div className="Sell-wrapper">
			<div className="Sell-heading">
				<div className="b-1"></div>
				<div className="b-2">Date</div>
				<div className="b-3">Name</div>
				<div className="b-4">Phone Number</div>
				<div className="b-5">Hostel</div>
				<div className="b-6">Amount Asked</div>
				<div className="b-7"></div>
			</div>
			<div className="Sell-closed">
				<div className="Sell-show" onClick={() => setShow(!show)}>
					Show Closed
				</div>
				{show &&
					data
						?.filter((Seller) => Seller.order_closed)
						.map((Sellers) => (
							<SellComponent key={Sellers.id} {...Sellers} updateData = {updateData} />
						))}
			</div>
			<div className="Sell-content">
				{data
					?.filter((Seller) => !Seller.order_closed)
					.map((Sellers) => (
						<SellComponent key={Sellers.id} {...Sellers} updateData = {updateData} />
					))}
			</div>
		</div>
	);
}

export default Sell;
