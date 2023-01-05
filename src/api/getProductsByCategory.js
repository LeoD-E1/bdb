export const getProductsByCategory = async category => {
	try {
		const url = '/public/products.json';
		const resp = await fetch(url);
		const data = await resp.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};
