import { useState, useEffect } from 'react';
import { useUserStore } from '../store/userStore';

export const useFetch = url => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const token = useUserStore(state => state.token);

	useEffect(() => {
		let isMounted = true; // variable para verificar si el componente está montado o no
		if (data === null) {
			// solo se hace la llamada al servidor si data es nulo
			setLoading(true);
			fetchData(url, token, isMounted);
		}

		return () => {
			isMounted = false; // cuando el componente se desmonta, se cambia el valor de isMounted a false
		};
	}, [url]);

	const fetchData = async (url, token, isMounted) => {
		try {
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + token,
				},
			});
			const json = await response.json();
			if (isMounted) {
				// solo se actualiza el estado si el componente está montado
				setData(json.data);
				setError(null);
				setLoading(false);
			}
		} catch (error) {
			console.log('🚀 ~ file: useFetch.js:24 ~ fetchData ~ error:', error);
			if (isMounted) {
				// solo se actualiza el estado si el componente está montado
				setData(null);
				setError(error);
				setLoading(false);
			}
		}
	};

	return { data, loading, error };
};
