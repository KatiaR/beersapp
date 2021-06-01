import React from 'react';
import styles from './Search.module.scss';

export function Search() {
	return (
		<form>
			<input
				type="submit"
				placeholder="Search"
				className={styles.seachField}
			></input>
		</form>
	);
}
