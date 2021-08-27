import { useState, useMemo } from 'react';

const Problem5 = () => {
	const [number, setNumber] = useState(64323);

	// Split del número
	const splitNumber = (num) => {
		return num.toString().split('');
	};

	const sum = useMemo(() => {
		// Suma de los digitos
		const handleSumDigits = (num) => {
			const arrayNumbers = splitNumber(num);

			const reducer = (accumulator, current) =>
				parseInt(accumulator) + parseInt(current);

			return arrayNumbers.length > 0 ? arrayNumbers.reduce(reducer) : 0;
		};

		return handleSumDigits(number);
	}, [number]);

	const arrayLength = splitNumber(number).length;

	return (
		<form className='mt-5'>
			<h2>Problema 5 - Suma de dígitos</h2>
			<div className='mb-3 mt-3'>
				<label htmlFor='inputNumber' className='form-label'>
					Número
				</label>
				<input
					value={number}
					type='number'
					className='form-control'
					id='inputNumber'
					onChange={(e) => setNumber(e.currentTarget.value)}
					onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
				/>
				{!isNaN(sum) ? (
					<h6 className='text-success mt-2'>
						La suma de los dígitos es:
						{' '}
						{splitNumber(number).map(
							(num, i) => `${num} ${i + 1 < arrayLength ? ' + ' : ' = '}`,
						)}
						{sum}
					</h6>
				) : (
					<h6 className='text-danger mt-2'>Error, solo se aceptan enteros</h6>
				)}
			</div>
		</form>
	);
};

export default Problem5;
