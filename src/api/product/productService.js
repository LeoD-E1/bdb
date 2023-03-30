const { VITE_APP_BASE_URL } = import.meta.env;

export const createProduct = async ({
	category_id,
	price,
	product_name,
	branch_id,
	token,
}) => {
	try {
		const response = await fetch(`${VITE_APP_BASE_URL}/product`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
			body: JSON.stringify({ category_id, branch_id, price, product_name }),
		});
		return response.json();
	} catch (error) {
		console.error(error);
	}
};
