import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBeers } from '../api/beers';
import { RootState } from '../app/store';

const initialState = {
	data: undefined,
	status: 'idle',
};

export const getBeersAsync = createAsyncThunk(
	'beer/fetchbeer',
	async (search: string) => {
		const response = await getBeers(search);
		return response;
	}
);

export const beerSlice = createSlice({
	name: 'beers',
	initialState,
	reducers: {
		clearData: (state) => {
			state.status = 'idle';
			state.data = undefined;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getBeersAsync.pending, (state) => {
				state.status = 'loading';
				state.data = undefined;
			})
			.addCase(getBeersAsync.fulfilled, (state, action) => {
				state.status = 'success';
				state.data = action.payload;
			});
	},
});

export const { clearData } = beerSlice.actions;
export const selectData = (state: RootState) => state.beers.data;
export const selectStatus = (state: RootState) => state.beers.status;

export default beerSlice.reducer;
