import { useState, useEffect } from 'react';

const Problem8 = () => {
	const [number, setNumber] = useState(1000);
	const [output, setOutput] = useState('');

	useEffect(() => {
		let result = 0;
		let num = number;

		while (num > 0) {
			result = `${num % 3} ${result}`;
			num = Math.trunc(num / 3);
		}

		result = result.toString();
		setOutput(result.slice(0, result.split('').length - 1));
	}, [number]);

	return (
		<form className='mt-5 mb-5'>
			<h2>Problema 8 - Ternary</h2>
			<div className='mb-3 mt-3'>
				<label htmlFor='ternaryInput' className='form-label'>
					Número
				</label>
				<input
					value={number}
					type='number'
					className='form-control'
					id='ternaryInput'
					onChange={(e) => setNumber(e.currentTarget.value)}
					onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
					// min='0'
				/>
				<h6 className='text-success mt-2'>{output}</h6>
			</div>
		</form>
	);
};

export default Problem8;
