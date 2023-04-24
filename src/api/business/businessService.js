const { VITE_APP_BASE_URL } = import.meta.env;

export const getBusinessByUserId = async ({ userId, token }) => {
	try {
		const resp = await fetch(`${VITE_APP_BASE_URL}/business/${userId}`, {
			method: 'GET',
			headers: {
				authorization: 'Bearer ' + token,
			},
		});
		return resp.json();
	} catch (error) {
		console.log(error);
	}
};

export const createBusiness = async ({ token }) => {
	try {
		const resp = await fetch(`${VITE_APP_BASE_URL}/business`, {
			headers: { Authorization: 'Bearer ' + token },
			method: 'POST',
		});
		return resp.json();
	} catch (error) {
		console.log(error);
	}
};
