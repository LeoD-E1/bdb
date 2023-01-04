import create from 'zustand';

export const useModalStore = create(set => ({
	visible: false,
	modalType: 'create-product',
	updateVisibility: visibility =>
		set(state => ({
			...state,
			visible: visibility,
		})),
	updateModalType: newModalType =>
		set(state => ({
			...state,
			modalType: newModalType,
		})),
}));
