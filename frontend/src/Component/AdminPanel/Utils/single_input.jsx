import React, { useState, useEffect } from 'react';

function SingleInput({ changeable, setChangeable, par1, edit }) {
	const [input_value, setInput_value] = useState('');
	const handle_change = function (e) {
		const val = e.target.value.trim();
		setChangeable({
			...changeable,
			[par1]: val
		});
		setInput_value(val);
	};
	useEffect(() => {
		setInput_value(`${changeable[par1]}`);
	}, []);
	if (edit) {
		return <div>{input_value}</div>;
	}
	return (
		<input
			type="text"
			value={input_value}
			onChange={(e) => handle_change(e)}
		/>
	);
}

export default SingleInput;
