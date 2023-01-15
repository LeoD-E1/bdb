import { supabase } from '../helper/supabaseClient';

export const registerUser = async ({ email, password }) => {
	try {
		const {
			data: { user },
		} = await supabase.auth.signUp({
			email,
			password,
		});
		return user;
	} catch (error) {
		console.error(error);
	}
};
