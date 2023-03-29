const { VITE_APP_BASE_URL } = import.meta.env;

export const createCategory = async ({ category_name, branch_id, token }) => {
	try {
		const response = await fetch(`${VITE_APP_BASE_URL}/category`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
			body: JSON.stringify({ category_name, branch_id }),
		});
		return response.json();
	} catch (error) {
		console.error(error);
	}
};
