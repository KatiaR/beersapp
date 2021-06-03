import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBeer, getBeersPage } from '../api/beers';
import { RootState } from '../app/store';
import { IDescriptionState } from '../interfaces/interfaces';

const initialPage = '1';

const initialState: IDescriptionState = {
	data: [],
	status: 'idle',
	selectedItem: undefined,
	selectedItemStatus: 'idle',
	page: initialPage,
	search: '',
};

export const getBeersAsync = createAsyncThunk(
	'beers/fetchbeer',
	async (page: string = initialPage) => {
		const response = await getBeersPage(page);
		return response;
	}
);

export const getBeerAsync = createAsyncThunk(
	'beer/fetchbeer',
	async (id: string) => {
		const response = await getBeer(id);
		return response;
	}
);

export const getBeersByNameAsync = createAsyncThunk(
	'beersName/fetchbeer',
	async ({ page = '1', search = '' }: { page: string; search?: string }) => {
		const response = await getBeersPage(page, search);
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
			state.page = initialPage;
		},
		searchChange: (state, { payload }) => {
			state.search = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getBeersAsync.pending, (state) => {
				state.status = 'loading';
				state.data = [];
				state.page = initialPage;
			})
			.addCase(getBeersAsync.fulfilled, (state, action) => {
				state.status = 'success';
				state.data = action.payload!.data;
				state.page = action.payload!.page;
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
				state.page = initialPage;
			})
			.addCase(getBeersByNameAsync.fulfilled, (state, action) => {
				state.status = 'success';
				state.data = action.payload!.data;
				state.page = action.payload!.page;
			});
	},
});

export const { clearData, searchChange } = beerSlice.actions;
export const selectData = (state: RootState) => state.beers.data;
export const selectPage = (state: RootState) => state.beers.page;
export const selectSearch = (state: RootState) => state.beers.search;
export const selectStatus = (state: RootState) => state.beers.status;
export const selectedItemData = (state: RootState) => state.beers.selectedItem;
export const selectedItemStatus = (state: RootState) =>
	state.beers.selectedItemStatus;

export default beerSlice.reducer;
