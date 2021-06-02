import React, { useRef } from 'react';
import styles from './Search.module.scss';

export function Search() {
	const textInputRef = useRef<HTMLInputElement>(null);
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = textInputRef.current!.value;
		console.log('text', enteredText);
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
