import React from 'react';

import './faq.css';

function FAQ() {
	return (
		<div className="faq-section">
			<h1>
				<b>FAQ</b>
			</h1>
			<br></br>
			<p>Most frequent questions and answers</p>
			<div className="tabs">
				<div className="tab">
					<input type="checkbox" id="check1"></input>
					<label class="tab-label" for="check1">
						<b>WILL YOU PROVIDE MAINTAINENCE ?</b>
					</label>
					<div className="tab-content">
						We will send someone to look after what is to be
						repaired and the cost will be as per the service
						delivered.
					</div>
				</div>

				<div className="tab">
					<input type="checkbox" id="check2"></input>
					<label class="tab-label" for="check2">
						<b>WILL YOU PROVIDE MAINTAINENCE ?</b>
					</label>
					<div className="tab-content">
						We will send someone to look after what is to be
						repaired and the cost will be as per the service
						delivered.
					</div>
				</div>

				<div className="tab">
					<input type="checkbox" id="check3"></input>
					<label class="tab-label" for="check3">
						<b>WHEN WILL WE RECEIVE SECURITY MONEY BACK?</b>
					</label>
					<div className="tab-content">
						Once your rental period is over and you handover the
						cooler to us, your security deposit will be refunded.
					</div>
				</div>
			</div>
		</div>
	);
}

export default FAQ;
