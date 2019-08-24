import React from 'react';
const char = (props) => {
	const style = {
		display: 'inline-block',
		padding: '16px',
		margin: '16px',
		border: '1px solid black',
		textAlign: 'center'
	};
	const { clicked, character } = props; // same thing here Object Destructuring, instead of using props.clicked or props.character everytime you can use them with out dot notation from props
	return (
		<div style={style} onClick={clicked}>
			{character}
		</div>
	);
};
export default char;
