/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react';

const Problem6 = () => {
	const [uglyNumber, setUglyNumber] = useState('');

	const handleResidue = (num, divisor) => {
		while (num % divisor === 0) {
			num = num / divisor;
		}

		return num;
	};

	const uglyNum = useCallback(() => {
		const handleIsUgly = (num) => {
			num = handleResidue(num, 2);
			num = handleResidue(num, 3);
			num = handleResidue(num, 5);

			return num === 1 ? true : false;
		};

		const handleGetUglyNumber = (num) => {
			// Autoincrementable
			let loop = 1;
			// Contador de números "feos"
			let cont = 1;

			while (num > cont) {
				loop++;
				if (handleIsUgly(loop)) {
					cont++;
				}
			}
			return loop;
		};

		const number = handleGetUglyNumber(1500);

		setUglyNumber(number);
	}, []);

	return (
		<form className='mt-5'>
			<h2>Problema 6 - El número feo</h2>
			<div className='mb-3 mt-3'>
				<label htmlFor='inputUglyNumber' className='form-label'>
					Número feo 1500
				</label>
				<input
					value={uglyNumber}
					type='email'
					className='form-control'
					id='inputUglyNumber'
					readOnly
				/>
				{!uglyNumber ? (
					<h6 className='text-danger mt-2'>Sin procesar</h6>
				) : (
					<h6 className='text-success mt-2'>Procesado</h6>
				)}
			</div>
			<button onClick={uglyNum} type='button' className='btn btn-primary'>
				Procesar
			</button>
		</form>
	);
};

export default Problem6;
