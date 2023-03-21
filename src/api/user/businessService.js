const { VITE_APP_BASE_URL } = import.meta.env;

export const getBusinessByUserId = async ({ id, token }) => {
	try {
		const resp = await fetch(`${VITE_APP_BASE_URL}/business/${id}`, {
			method: 'GET',
			headers: { Authorization: 'Bearer ' + token },
		});
		return resp.json();
	} catch (error) {
		console.log(error);
	}
};
