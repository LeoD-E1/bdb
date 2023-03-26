import create from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';

const initialState = {
	business: [],
	selectedBusiness: {},
};

export const useBusinessStore = create(
	persist(
		set => ({
			business: initialState.business,
			selectedBusiness: initialState.selectedBusiness,
			fillWithBusiness: payload =>
				set(state => ({
					...state,
					business: [...state.business, ...payload],
				})),
			selectBusiness: newBusiness =>
				set(state => ({
					...state,
					selectedBusiness: newBusiness,
				})),
			deleteBusinessState: () => set(() => initialState),
		}),
		{
			name: 'business-store',
			storage: createJSONStorage(() => localStorage),
		}
	)
);

if (process.env.NODE_ENV === 'development') {
	mountStoreDevtool('Store', useBusinessStore);
}
