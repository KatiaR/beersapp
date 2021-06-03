import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './ListItemPeview.module.scss';
import { IDescriptionDisplayed } from '../interfaces/interfaces';
import { useAppDispatch } from '../app/hooks';
import { getBeerAsync } from '../slicer/beersSlice';

export function ListItemPeview(props: IDescriptionDisplayed) {
	const history = useHistory();
	const { image_url, description, name, id } = props.item;
	const dispatch = useAppDispatch();

	const clickHandler = () => {
		dispatch(getBeerAsync(id));
		history.push(`/beers/${id}`);
	};
	return (
		<section className={style.listBox}>
			<div className={style.listDescription}>
				<img src={image_url} alt="item previw" />
				<div>
					<p>{name}</p>
					<p className={style.truncate}>{description}</p>
				</div>
			</div>

			<button onClick={clickHandler}>
				<i>&#x27AD;</i>
			</button>
		</section>
	);
}
