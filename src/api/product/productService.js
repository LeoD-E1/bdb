const { VITE_APP_BASE_URL } = import.meta.env;

export const createProduct = async ({
	category_id,
	image_url,
	price,
	product_name,
	product_description,
	branch_id,
	token,
}) => {
	try {
		const product = new FormData();
		product.append('category_id', category_id);
		product.append('price', price);
		product.append('product_name', product_name);
		product_description && product.append('description', product_description);
		image_url && product.append('imageObj', image_url);
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

export const updateProduct = async ({ product_id, fields, token }) => {
	try {
		const productToUpdate = new FormData();
		Object.keys(fields).forEach(key => {
			productToUpdate.append(key, fields[key]);
		});

		const resp = await fetch(`${VITE_APP_BASE_URL}/product/${product_id}`, {
			method: 'PATCH',
			headers: {
				Authorization: 'Bearer ' + token,
			},
			body: productToUpdate,
		});

		return resp.json();
	} catch (error) {
		console.error(error);
	}
};

export const deleteProduct = async ({ product_id, token }) => {
	try {
		const resp = await fetch(`${VITE_APP_BASE_URL}/product/${product_id}`, {
			method: 'DELETE',
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});
		return resp.json();
	} catch (error) {
		console.error(error);
	}
};
