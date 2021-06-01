export const randomId = (min: number = 0, max: number = 50) => {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
};
