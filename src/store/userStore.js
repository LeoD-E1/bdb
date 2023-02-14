import create from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';

const initialState = {
	token: null,
	user: {
		user_id: null,
		first_name: null,
		last_name: null,
		user_name: null,
		email: null,
		password: null,
		creation_date: null,
		dni: null,
		role_id: null,
		mobile_number: null,
		user_address: null,
	},
};

export const useUserStore = create(
	persist(
		set => ({
			token: null,
			user: {
				user_id: null,
				first_name: null,
				last_name: null,
				user_name: null,
				email: null,
				password: null,
				creation_date: null,
				dni: null,
				role_id: null,
				mobile_number: null,
				user_address: null,
			},
			pushToken: newToken =>
				set(state => ({
					...state,
					token: newToken,
				})),
			deleteToken: () =>
				set(state => ({
					...state,
					token: null,
				})),
			fillWithUser: payload =>
				set(state => ({
					...state,
					user: {
						...state.user,
						...payload,
					},
				})),
			signOut: () => set(state => initialState),
		}),
		{
			name: 'user-storage',
			storage: createJSONStorage(() => localStorage),
		}
	)
);

if (process.env.NODE_ENV === 'development') {
	mountStoreDevtool('Store', useUserStore);
}
