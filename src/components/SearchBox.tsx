import React from 'react';
import { Search } from './Search';
import { RandomButton } from './RandomButton';
import style from './SearchBox.module.scss';

export function SearchBox() {
	return (
		<div className={style.searchBox}>
			<Search />
			<RandomButton />
		</div>
	);
}
