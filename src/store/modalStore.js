import { create } from 'zustand';
const initialState = {
	visible: false,
	modalType: 'create-product',
	justify: 'start',
	items: 'center',
	args: {},
};

export const useModalStore = create(set => ({
	currentModal: initialState,
	updateVisibility: visibility =>
		set(state => ({
			...state,
			currentModal: {
				...state.currentModal,
				visible: visibility,
			},
		})),
	updateModalType: ({
		newModalType,
		newJustify = 'start',
		newItems = 'center',
		newArgs = {},
	}) =>
		set(state => ({
			...state,
			currentModal: {
				...state.currentModal,
				modalType: newModalType,
				justify: newJustify,
				items: newItems,
				args: newArgs,
			},
		})),
}));
