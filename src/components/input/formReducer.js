export const formReducer = (state, action) => {
	switch (action.type) {
		case 'INPUT_CHANGE':
			return {
				...state,
				inputs: { ...state.inputs, [action.inputId]: { value: action.value } },
			};
		default:
			return state;
	}
};
