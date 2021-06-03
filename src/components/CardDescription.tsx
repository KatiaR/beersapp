import React, { useCallback } from 'react';
import styles from './CardDescription.module.scss';
import { useAppSelector } from '../app/hooks';
import { selectedItemData, selectedItemStatus } from '../slicer/beersSlice';
import { Loading } from './Loading';

export function CardDescription() {
	const beerDescription = useAppSelector(selectedItemData);
	const dataBeersStatus = useAppSelector(selectedItemStatus) === 'success';

	const descriptionList = useCallback(() => {
		if (beerDescription?.id) {
			const { first_brewed, ibu, abv, description } = beerDescription;
			return [first_brewed, ibu, abv, description].map((key) => {
				return <li key={key}>{key}</li>;
			});
		}
	}, [beerDescription]);

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
