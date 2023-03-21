import create from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';

const initialState = {
	business: [],
};

export const useBusinessStore = create(
	persist(
		set => ({
			business: initialState,
			fillWithBusiness: payload =>
				set(state => ({
					...state,
					business: [...state.business, payload],
				})),
		}),
		{
			name: 'business-storage',
			storage: createJSONStorage(() => localStorage),
		}
	)
);

if (process.env.NODE_ENV === 'development') {
	mountStoreDevtool('Store', useBusinessStore);
}
