import create from 'zustand';

export const useModalStore = create(set => ({
	visible: false,
	modalType: 'create-product',
	alignment: 'start',
	updateVisibility: visibility =>
		set(state => ({
			...state,
			visible: visibility,
		})),
	updateModalType: (newModalType, newAlignment = 'start') =>
		set(state => ({
			...state,
			modalType: newModalType,
			alignment: newAlignment,
		})),
}));
