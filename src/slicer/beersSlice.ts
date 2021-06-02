import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBeers, getBeer, getBeersByName } from '../api/beers';
import { RootState } from '../app/store';
import { IDescriptionState } from '../interfaces/interfaces';

const initialState: IDescriptionState = {
	data: [],
	status: 'idle',
	selectedItem: undefined,
	selectedItemStatus: 'idle',
};

export const getBeersAsync = createAsyncThunk('beers/fetchbeer', async () => {
	const response = await getBeers();
	return response;
});

export const getBeerAsync = createAsyncThunk(
	'beer/fetchbeer',
	async (id: string) => {
		const response = await getBeer(id);
		return response;
	}
);

export const getBeersByNameAsync = createAsyncThunk(
	'beersName/fetchbeer',
	async (name: string) => {
		const response = await getBeersByName(name);
		return response;
	}
);

export const beerSlice = createSlice({
	name: 'beers',
	initialState,
	reducers: {
		clearData: (state) => {
			state.status = 'idle';
			state.data = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getBeersAsync.pending, (state) => {
				state.status = 'loading';
				state.data = [];
			})
			.addCase(getBeersAsync.fulfilled, (state, action) => {
				state.status = 'success';
				state.data = action.payload;
			})
			.addCase(getBeerAsync.pending, (state) => {
				state.selectedItemStatus = 'loading';
				state.selectedItem = undefined;
			})
			.addCase(getBeerAsync.fulfilled, (state, action) => {
				state.selectedItemStatus = 'success';
				state.selectedItem = action.payload;
			})
			.addCase(getBeersByNameAsync.pending, (state) => {
				state.status = 'loading';
				state.data = [];
			})
			.addCase(getBeersByNameAsync.fulfilled, (state, action) => {
				state.status = 'success';
				state.data = action.payload;
			});
	},
});

export const { clearData } = beerSlice.actions;
export const selectData = (state: RootState) => state.beers.data;
export const selectStatus = (state: RootState) => state.beers.status;
export const selectedItemData = (state: RootState) => state.beers.selectedItem;
export const selectedItemStatus = (state: RootState) =>
	state.beers.selectedItemStatus;

export default beerSlice.reducer;
