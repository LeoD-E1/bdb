const { VITE_APP_BASE_URL } = import.meta.env;

export const getBusinessByUserId = async ({ userId, token }) => {
	try {
		const resp = await fetch(`${VITE_APP_BASE_URL}/business/${userId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: 'Bearer ' + token,
			},
		});
		return resp.json();
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};

export const createBusiness = async ({
	token,
	businessName,
	businessAddress,
	phone,
	latitude,
	longitude,
	userId,
}) => {
	console.log("🚀 ~ longitude:", longitude)
	try {
		const resp = await fetch(`${VITE_APP_BASE_URL}/business`, {
			headers: {
				Authorization: 'Bearer ' + token,
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				business_name: businessName,
				business_address: businessAddress,
				phone,
				latitude,
				longitude,
				user_id: userId,
			}),
		});
		return resp.json();
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};
