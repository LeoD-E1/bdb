import { useState, useEffect } from 'react';

export const useFetch = url => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		fetch(url)
			.then(response => response.json())
			.then(data => setData(data.slice(0, 20)))
			.catch(error => setError(error))
			.finally(setLoading(false));
	}, [url]);

	return { data, loading, error };
};
