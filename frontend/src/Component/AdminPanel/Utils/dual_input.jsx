import React, { useState, useEffect } from 'react';

function DualInput({ changeable, setChangeable, par1, par2, edit }) {
	const [input_value, setInput_value] = useState('');
	const handle_change = function (e) {
		let val = e.target.value;
		let parm1, parm2, tmp;
		try {
			[parm1, tmp] = val.split('(');
		} catch {
			alert('Ensure the seperation of params with bracket (');
		}
		try {
			parm2 = tmp.split(')')[0];
		} catch {
			alert('Provide the second parameter in ( )');
		}
		parm1 = parm1.trim();
		parm2 = parm2.trim();
		setChangeable({
			...changeable,
			[par1]: parm1,
			[par2]: parm2
		});
		val = `${parm1} (${parm2})`;
		setInput_value(val);
	};
	useEffect(() => {
		console.log(changeable);
		setInput_value(`${changeable[par1]} (${changeable[par2]})`);
	}, []);
	if (edit) {
		return <div>{input_value}</div>;
	}
	return (
		<input
			type="text"
			value={input_value}
			onChange={(e) => setInput_value(e.target.value)}
			onBlur={(e) => handle_change(e)}
		/>
	);
}

export default DualInput;
