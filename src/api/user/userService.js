const { VITE_APP_BASE_URL } = import.meta.env;

export const createUser = async ({
	email,
	password,
	role_id = 2,
	user_name = '',
	dni = null,
	user_address = '',
}) => {
	try {
		const response = await fetch(`${VITE_APP_BASE_URL}/users`, {
			body: JSON.stringify({
				email,
				password,
				role_id,
				user_name,
				dni,
				user_address,
			}),
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
		});
		const user = await response.json();
		return { user, status: response.status };
	} catch (error) {
		console.log(error);
	}
};
