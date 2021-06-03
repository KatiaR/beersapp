import React from 'react';
import { useHistory, useParams } from 'react-router';
import style from './Pagination.module.scss';

export function Pagination() {
	const history = useHistory();
	const { page = '1' } = useParams<{ page: string }>();
	const pageNumber = Number(page);
	const pagesRange = [...Array(10)]
		.fill(0)
		.map((_, i) => (pageNumber < 5 ? i + 1 : pageNumber + i - 4));

	const handleClick = (page: number) => {
		history.push(String(page));
	};

	const handlePrevClick = () => {
		if (pageNumber <= 1) return;
		history.push(String(pageNumber - 1));
	};

	const handleNextClick = () => {
		history.push(String(pageNumber + 1));
	};
	return (
		<nav className={style.paginationBox}>
			<button className={style.prevButton} onClick={handlePrevClick}>
				&#8701;
			</button>
			{pagesRange.map((number) => {
				return (
					<li
						className={pageNumber === number ? style.current : ''}
						key={number}
						onClick={() => handleClick(number)}
					>
						{number}
					</li>
				);
			})}
			<button className={style.nextButton} onClick={handleNextClick}>
				&#8702;
			</button>
		</nav>
	);
}
