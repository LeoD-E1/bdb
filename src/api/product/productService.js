const { VITE_APP_BASE_URL } = import.meta.env;

export const createProduct = async ({
	category_id,
	image_url = {},
	price,
	product_name,
	product_description = '',
	branch_id,
	token,
}) => {
	try {
		const product = new FormData();
		product.append('category_id', category_id);
		product.append('price', price);
		product.append('product_name', product_name);
		product.append('description', product_description);
		product.append('imageObj', image_url);
		product.append('branch_id', branch_id);

		const response = await fetch(`${VITE_APP_BASE_URL}/product`, {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + token,
			},
			body: product,
		});
		return response.json();
	} catch (error) {
		console.error(error);
	}
};

export const editProduct = async product => {
	console.log(
		'🚀 ~ file: productService.js:35 ~ editProduct ~ product:',
		product
	);
};
