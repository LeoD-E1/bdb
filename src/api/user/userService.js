const { VITE_APP_BASE_URL } = import.meta.env;

export const createUser = async ({
	email,
	password,
	role_id = 2,
	user_name = '',
}) => {
	const response = await fetch(`${VITE_APP_BASE_URL}/users`, {
		body: JSON.stringify({
			email,
			password,
			role_id,
			user_name,
		}),
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
	});
	return response.json();
};
