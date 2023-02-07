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

export const loginUser = async ({ email, password }) => {
	const resp = await fetch(`${VITE_APP_BASE_URL}/auth/login`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	});
	return resp.json();
};

export const getUserInfo = async token => {
	try {
		const response = await fetch(`${VITE_APP_BASE_URL}/auth/me`, {
			headers: { Authorization: 'Bearer ' + token },
		});
		return response.json();
	} catch (error) {
		console.log(error);
	}
};
