import axios from 'axios';

export const getBeers = async (beer: string) => {
	try {
		const response = await axios.get(`https://api.punkapi.com/v2/beers`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
	return;
};

export const getBeer = async (id: string) => {
	try {
		const response = await axios.get(
			`https://api.punkapi.com/v2/beers${id}`
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
	return;
};

export const getBeersPage = async (page: string) => {
	const beersPerPage = 3;
	try {
		const response = await axios.get(
			`https://api.punkapi.com/v2/beers?page=${page}&per_page=${beersPerPage}`
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
	return;
};
