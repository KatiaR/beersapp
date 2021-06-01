import React from 'react';
import styles from './CardDescription.module.scss';
import { IDescriptionDisplayed } from '../interfaces/interfaces';
import { randomId } from '../utils/utils';

export const CardDescription = () => {
	const data = {
		tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
		id: '185',
		name: 'Punk IPA 2007 - 2010',
		first_brewed: '04/2007',
		abv: '6.0',
		ibu: '60.0',
		image_url: 'https://images.punkapi.com/v2/192.png',
		description:
			'Our flagship beer that kick started the craft beer revolution. This is James and Martin original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.',
	};

	const descriptionList = () => {
		const dataToDisplay = (({ tagline, id, name, image_url, ...rest }) =>
			rest)(data);
		const values = Object.values(dataToDisplay);
		return values.map((key, ind) => {
			return <li key={`${ind}${randomId()}`}>{key}</li>;
		});
	};

	return (
		<section className={styles.card}>
			<div className={styles.imageBox}>
				<img src={data.image_url} alt="Bees card" />
			</div>

			<article className={styles.articleBox}>
				<h2>{`${data.name}-${data.tagline}`}</h2>
				<ul>{descriptionList()}</ul>
			</article>
		</section>
	);
};
