import { create } from 'zustand';

export const useAddressStore = create(set => ({
	address: null,
	setNewAddress: newAddress => {
		set(() => ({
			address: newAddress,
		}));
	},
}));
