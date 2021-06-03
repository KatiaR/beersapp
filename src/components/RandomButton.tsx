import React from 'react';
import style from './RandomButton.module.scss';
import { randomId } from '../utils/utils';
import { useAppDispatch } from '../app/hooks';
import { getBeerAsync } from '../slicer/beersSlice';
import { useHistory } from 'react-router-dom';

export function RandomButton() {
	const history = useHistory();

	// In the documentation, there is a way to get a random element,
	// but in accordance with the task description,
	// I need to use a random number within 1-50, that is why I generate an ID by myself.
	const randomSelectedId = String(randomId());
	const dispatch = useAppDispatch();
	const handleClick = () => {
		dispatch(getBeerAsync(randomSelectedId));
		history.push(`/beers/${randomSelectedId}`);
	};

	return (
		<button onClick={handleClick} className={style.button}>
			Random
		</button>
	);
}
