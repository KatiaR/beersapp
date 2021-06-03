import React, { useRef } from 'react';
import styles from './Search.module.scss';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
	getBeersByNameAsync,
	searchChange,
	selectSearch,
} from '../slicer/beersSlice';
import { useHistory } from 'react-router';

export function Search() {
	let textInputRef = useRef<HTMLInputElement>(null);
	const search = useAppSelector(selectSearch);
	const dispatch = useAppDispatch();
	const history = useHistory();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const enteredText = textInputRef.current?.value;
		if (enteredText === ' ') return;
		dispatch(searchChange(enteredText));
		dispatch(getBeersByNameAsync({ page: '1', search: enteredText }));
		history.push('1');
	};
	return (
		<input
			type="text"
			pattern="[\w]{1,15}"
			placeholder="Search"
			className={styles.seachField}
			ref={textInputRef}
			value={search}
			onChange={handleChange}
		/>
	);
}
