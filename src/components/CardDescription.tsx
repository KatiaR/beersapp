import React from 'react';
import styles from './CardDescription.module.scss';
import { randomId } from '../utils/utils';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectedItemData, selectedItemStatus } from '../slicer/beersSlice';
import { Loading } from './Loading';

export function CardDescription() {
	const beerDescription = useAppSelector(selectedItemData);
	console.log('beerDescription', beerDescription);
	const dataBeersStatus =
		useAppSelector(selectedItemStatus) === 'success' ? true : false;

	const descriptionList = () => {
		let dataToDisplay;
		if (beerDescription) {
			dataToDisplay = (({
				name,
				tagline,
				first_brewed,
				ibu,
				abv,
				description,
				...rest
			}) => [name, tagline, first_brewed, ibu, abv, description])(
				beerDescription
			);
			const values = Object.values(dataToDisplay);
			return values?.map((key, ind) => {
				return <li key={`${ind}${randomId()}`}>{key}</li>;
			});
		}
	};

	return dataBeersStatus ? (
		<section className={styles.card}>
			<div className={styles.imageBox}>
				<img src={beerDescription?.image_url} alt="Bees card" />
			</div>

			<article className={styles.articleBox}>
				<h2>{`${beerDescription?.name}-${beerDescription?.tagline}`}</h2>
				<ul>{descriptionList()}</ul>
			</article>
		</section>
	) : (
		<Loading />
	);
}
