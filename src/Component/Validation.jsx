import React from 'react';

const validation = (props) => {
	//props.inputLength -> we can destructure it but as long as it is one prop no need to do it, but when you have many props its prefered to destructure so its more flixebale
	return <div>{props.inputLength > 5 ? <p>Text too long</p> : <p>Text too small</p>}</div>;
};
export default validation;
