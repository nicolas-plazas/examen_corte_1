import { useState, useEffect } from 'react';

const Problem4 = () => {
	const [number, setNumber] = useState(3);
	const [capacity, setCapacity] = useState(5);
	const [output, setOutput] = useState(0);

	useEffect(() => {
		let time = parseInt(number / capacity);

		if (number % capacity) {
			time++;
		}

		setOutput(10 * time);
	}, [number, capacity]);

	return (
		<form className='mt-5'>
			<h2>Problema 4 - Cociendo huevos</h2>
			<div className='mb-3 mt-3 xl-6'>
				<label htmlFor='eggInput' className='form-label'>
					Cantidad
				</label>
				<input
					value={number}
					type='number'
					className='form-control'
					id='eggInput'
					onChange={(e) => setNumber(e.currentTarget.value)}
					onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
					min='0'
					max='10'
				/>
				<h6 className='text-success mt-2'>{output}</h6>
			</div>
			<div className='mb-3'>
				<label htmlFor='timeInput' className='form-label'>
					Capacidad olla
				</label>
				<input
					value={capacity}
					type='number'
					className='form-control'
					id='timeInput'
					onChange={(e) => setCapacity(e.currentTarget.value)}
					onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
					min='0'
					max='10'
				/>
			</div>
		</form>
	);
};

export default Problem4;
