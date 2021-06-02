import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getBeersAsync, selectData, selectStatus } from '../slicer/beersSlice';
import { Loading } from './Loading';
import { ListItemPeview } from './ListItemPreview';
import style from './ContentBox.module.scss';

export function ContentBox() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getBeersAsync());
	}, [dispatch]);

	const dataBeers = useAppSelector(selectData);
	const dataBeersStatus =
		useAppSelector(selectStatus) === 'success' ? true : false;
	const list = dataBeers?.map((elem) => (
		<li key={elem.id}>
			<ListItemPeview item={elem} />
		</li>
	));

	return (
		<>
			{dataBeersStatus ? (
				<ul className={style.listItem}>{list}</ul>
			) : (
				<Loading />
			)}
		</>
	);
}
