import React, { useRef } from 'react';
import styles from './Search.module.scss';
import { useAppDispatch } from '../app/hooks';
import { getBeersByNameAsync } from '../slicer/beersSlice';

export function Search() {
	let textInputRef = useRef<HTMLInputElement>(null);
	const dispatch = useAppDispatch();
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = textInputRef.current!.value;
		dispatch(getBeersByNameAsync(enteredText));
		textInputRef.current!.value = '';
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Search"
				className={styles.seachField}
				ref={textInputRef}
			></input>
		</form>
	);
}
