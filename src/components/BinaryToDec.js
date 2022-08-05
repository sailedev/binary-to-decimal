import { useState } from 'react';
import './binaryToDec.css';
const BinaryToDec = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [binaryText, setBinaryText] = useState('');
	const [decimalNumber, setDecimalNumber] = useState('');

	const changeBinaryText = (event) => {};
	const showDecimalNumber = () => {
		setDecimalNumber(parseInt(parseInt(binaryText), 2));
	};

	return (
		<div className='wrapper'>
			<div className='container'>
				<h1>Please input a binary number</h1>
				<p className='error'>{errorMessage}</p>
				<input onChange={changeBinaryText} />
				<button onClick={showDecimalNumber}>Submit</button>
				<p className='desimal'>{decimalNumber}</p>
			</div>
		</div>
	);
};

export default BinaryToDec;
