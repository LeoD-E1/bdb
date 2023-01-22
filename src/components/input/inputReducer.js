export const inputReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			return { ...state, value: action.val };
		default:
			return state;
	}
};
