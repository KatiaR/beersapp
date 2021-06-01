interface IObjectKeys {
	[key: string]: string | number;
}

export interface IDescription extends IObjectKeys {
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
	first_brewed: string;
	abv: string;
	ibu: string;
	description: string;
}
