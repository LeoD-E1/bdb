import { useReducer, useCallback } from 'react';
import { formReducer } from '../components/input/formReducer';

export const useForm = initialInput => {
	const [formState, dispatch] = useReducer(formReducer, {
		inputs: initialInput,
	});

	const inputHandler = useCallback((id, value) => {
		dispatch({ type: 'INPUT_CHANGE', inputId: id, value });
	}, []);

	const setFormData = useCallback(inputData => {
		dispatch({ type: 'SET_DATA', inputs: inputData });
	}, []);

	return [formState, inputHandler, setFormData];
};
