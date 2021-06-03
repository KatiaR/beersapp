export interface IDescription {
	id: string;
	name: string;
	first_brewed: string;
	abv: string;
	ibu: string;
	image_url: string;
	description: string;
	tagline: string;
}
export interface IDescriptionDisplayed {
	item: {
		id: string;
		name: string;
		image_url: string;
		description: string;
	};
}

export interface IDescriptionState {
	data?: IDescription[];
	status: 'idle' | 'loading' | 'success' | 'failed';
	selectedItem: IDescription | undefined;
	selectedItemStatus: typeof status;
	page: string;
	search: '';
}
