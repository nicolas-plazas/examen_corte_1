import { useState, useEffect } from 'react';

const Problem1 = () => {
	const [number, setNumber] = useState('');

	const hexadecimal = (num) => {
		console.log(`hex ${num}`);
	};

	const decimal = (num) => {
		console.log(num);
	};

	useEffect(() => {
		const addOne = (num) => {
			!Number.isInteger(parseInt(num)) ? hexadecimal(num) : decimal(num);
		};

		addOne(number);
	}, [number]);

	return (
		<form className='mt-5'>
			<h2>Problema 1 - Súmale uno</h2>
			<div className='mb-3 mt-3'>
				<label htmlFor='hexaInput' className='form-label'>
					Número
				</label>
				<input
					className='form-control'
					id='hexaInput'
					onChange={(e) => setNumber(e.currentTarget.value)}
				/>
				<div id='emailHelp' className='form-text'>
					We'll never share your email with anyone else.
				</div>
			</div>
			<div className='mb-3'>
				<label htmlFor='exampleInputPassword1' className='form-label'>
					Password
				</label>
				<input
					type='password'
					className='form-control'
					id='exampleInputPassword1'
				/>
			</div>
			<button type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	);
};

export default Problem1;
