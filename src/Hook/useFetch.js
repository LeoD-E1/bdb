import { useState, useEffect } from 'react';
import { useUserStore } from '../store/userStore';

export const useFetch = url => {
	const [data, setData] = useState([]);
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
				setData(json.data);
			} catch (error) {
				console.log('🚀 ~ file: useFetch.js:24 ~ fetchData ~ error:', error);
				setError(error);
			}
			setLoading(false);
		};

		fetchData();
	}, [url]);

	return { data, loading, error };
};
