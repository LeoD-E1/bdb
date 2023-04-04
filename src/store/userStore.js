import { create } from 'zustand';
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
		role: null,
		phone: null,
		user_address: null,
		verified: null,
		updated_at: null,
		profile_image_url: null,
		phone_confirmed_at: null,
		last_sign_in: null,
		bio: null,
	},
};

export const useUserStore = create(
	persist(
		set => ({
			token: null,
			user: initialState.user,
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
			signOut: () => set(() => initialState),
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
