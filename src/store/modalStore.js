import create from 'zustand';

export const useModalStore = create(set => ({
	visible: false,
	modalType: 'create-product',
	justify: 'start',
	items: 'center',
	updateVisibility: visibility =>
		set(state => ({
			...state,
			visible: visibility,
		})),
	updateModalType: ({
		newModalType,
		newJustify = 'start',
		newItems = 'center',
	}) =>
		set(state => ({
			...state,
			modalType: newModalType,
			justify: newJustify,
			items: newItems,
		})),
}));
