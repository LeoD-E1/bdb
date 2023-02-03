const { VITE_APP_MAPS_API_KEY, VITE_APP_BASE_MAPS_URL } = import.meta.env;

export const autocomplete = async () => {
	const resp = await fetch(
		`${VITE_APP_BASE_MAPS_URL}/json?key=${VITE_APP_MAPS_API_KEY}`
	);
	const data = await resp.json();
	return data;
};
