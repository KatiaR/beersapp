import axios from 'axios';
import { IDescription } from '../interfaces/interfaces';

export const getBeer = async (id: string) => {
	try {
		const response = await axios.get<IDescription[]>(
			`https://api.punkapi.com/v2/beers/${id}`
		);
		return response.data[0];
	} catch (error) {
		alert('Something went wrong');
	}
	return;
};

export const getBeersPage = async (page: string = '1', name: string = '') => {
	const beersPerPage = 3;
	let url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${beersPerPage}`;
	if (name) {
		url += `&beer_name=${name}`;
	}
	try {
		const response = await axios.get<IDescription[]>(url);
		return { page, data: response.data };
	} catch (error) {
		alert('Something went wrong');
	}
	return { page, data: [] };
};
