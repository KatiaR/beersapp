import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
	getBeersByNameAsync,
	selectData,
	selectSearch,
	selectStatus,
} from '../slicer/beersSlice';
import { Loading } from './Loading';
import { ListItemPeview } from './ListItemPreview';
import { Pagination } from './Pagination';
import style from './ContentBox.module.scss';
import { useParams } from 'react-router-dom';
import { NotFound } from './NotFound';

export function ContentBox() {
	const { page = '1' } = useParams<{ page: string }>();
	const dispatch = useAppDispatch();
	const search = useAppSelector(selectSearch);

	useEffect(() => {
		dispatch(getBeersByNameAsync({ page, search }));
	}, [dispatch, page, search]);

	const dataBeers = useAppSelector(selectData);
	const dataBeersSuccess = useAppSelector(selectStatus) === 'success';
	const list = dataBeers?.length ? (
		dataBeers.map((elem) => (
			<li key={elem.id}>
				<ListItemPeview item={elem} />
			</li>
		))
	) : (
		<NotFound />
	);

	return dataBeersSuccess ? (
		<>
			<ul className={style.listItem}>{list}</ul>
			<Pagination />
		</>
	) : (
		<Loading />
	);
}
