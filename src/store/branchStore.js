import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';

const initialState = {
	selectedBranch: {},
};

export const useBranchStore = create(
	persist(
		set => ({
			selectedBranch: initialState.selectedBranch,
			selectBranch: newBranch =>
				set(state => ({
					...state,
					selectedBranch: newBranch,
				})),
			deleteBranchState: () => set(() => initialState),
		}),
		{
			name: 'branch-store',
			storage: createJSONStorage(() => localStorage),
		}
	)
);

if (process.env.NODE_ENV === 'development') {
	mountStoreDevtool('Store', useBranchStore);
}
