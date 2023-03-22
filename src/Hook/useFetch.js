import { useState, useEffect } from 'react';
import { useUserStore } from '../store/userStore';

export const useFetch = url => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const token = useUserStore(state => state.token);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(url, {
					method: 'GET',
					headers: {
						Authorization: 'Bearer ' + token,
					},
				});
				const json = await response.json();
				setData(json.slice(0, 20));
			} catch (error) {
				setError(error);
			}
			setLoading(false);
		};

		fetchData();
	}, [url]);

	return { data, loading, error };
};
