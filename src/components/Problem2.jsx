/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, Fragment } from 'react';

const Problem2 = () => {
	const [number, setNumber] = useState(381654729);
	const [output, setOutput] = useState({
		isMulti: '',
		count: [],
		sequence: [],
	});

	const repeatNumbers = (num) => {
		let count = {};
		num = num.toString().split('');
		const array = [];

		num.forEach(function (x) {
			count[x] = (count[x] || 0) + 1;
		});

		Object.entries(count).map((item) =>
			array.push({
				key: item[0],
				value: item[1],
			}),
		);

		return array;
	};

	const isMultiDivisible = (num) => {
		num = num.toString();
		const arrayNumber = num.split('');
		let sequence = [];
		let isMulti = '';

		for (let i = arrayNumber.length; i >= 0; i--) {
			if (i > 0) {
				let sliceNumber = num.slice(0, i);
				sequence.push(`${sliceNumber} = ${i} * ${sliceNumber / i}`);

				if (parseInt(sliceNumber) % i === 0) {
					isMulti = 'POLIDIVISIBLE';
				} else {
					isMulti = 'NO POLIDIVISIBLE';

					break;
				}
			}
		}

		return { sequence, isMulti };
	};

	useEffect(() => {
		let num = number.toString().replace('.', '');
		const { sequence, isMulti } = isMultiDivisible(num);

		setOutput({
			...output,
			count: repeatNumbers(num),
			sequence,
			isMulti,
		});
	}, [number]);

	return (
		<form className='mt-5'>
			<h2>Problema 2 - Números polidivisibles</h2>
			<div className='mb-3 mt-3'>
				<label htmlFor='multiDivisibleInput' className='form-label'>
					Numero
				</label>
				<input
					value={number}
					type='number'
					className='form-control'
					id='multiDivisibleInput'
					onChange={(e) => setNumber(e.currentTarget.value)}
					onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
					min='0'
					max='10'
				/>
			</div>
			<h5>Repeticiones</h5>
			<h6 className='text-success mt-2'>
				{output.count.map((item) => (
					<Fragment key={item.key}>
						{`El dígito ${item.key} se repite ${item.value}`}
						<br />
					</Fragment>
				))}
			</h6>
			<h5>Secuencia</h5>
			<h6 className='text-success mt-2'>
				{output.sequence.map((item) => (
					<Fragment key={item}>
						{item}
						<br />
					</Fragment>
				))}
			</h6>
			<h5>Es polidivisible?</h5>
			<h6
				className={`text-${
					output.isMulti === 'POLIDIVISIBLE' ? 'success' : 'danger'
				} mt-2`}
			>
				{output.isMulti}
			</h6>
		</form>
	);
};

export default Problem2;
