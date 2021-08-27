import { useState, useEffect } from 'react';

const Problem7 = () => {
	const [number, setNumber] = useState('555 555');
	const [message, setMessage] = useState(
		'Ingrese un número con el siguiente formato 555 555',
	);

	useEffect(() => {
		const arrayNumber = number.toString().split(' ');

		if (arrayNumber.length === 2) {
			let cont = 0;
			let residue = 0;
			let left = parseInt(arrayNumber[0]);
			let right = parseInt(arrayNumber[1]);

			for (var i = 10 - 1; i >= 0; i--) {
				residue = (left % 10) + (right % 10) + residue;

				residue > 9 ? (residue = 1) : (residue = 0);

				cont += residue;
				left = Math.trunc(left / 10);
				right = Math.trunc(right / 10);
			}

			if (cont === 0) {
				setMessage('No carry operation');
			} else if (cont === 1) {
				setMessage(`${cont} carry operation`);
			} else {
				setMessage(`${cont} carry operations`);
			}
		} else {
			setMessage(false);
		}
	}, [number]);

	return (
		<form className='mt-5'>
			<h2>Problema 7 - Primary Arithmetic</h2>
			<div className='mb-3 mt-3'>
				<label htmlFor='primaryInput' className='form-label'>
					Número
				</label>
				<input
					value={number}
					className='form-control'
					id='primaryInput'
					onChange={(e) => setNumber(e.currentTarget.value)}
					onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
					min='0'
					max='10'
				/>
				{message ? (
					<h6 className='text-success mt-2'>{message}</h6>
				) : (
					<h6 className='text-danger mt-2'>
						Debe respetar el siguiente formato 555 555
					</h6>
				)}
			</div>
		</form>
	);
};

export default Problem7;
