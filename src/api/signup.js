import { supabase } from '../helper/supabaseClient';

export const registerUser = async ({ email, password }) => {
	const { data } = await supabase.auth.signUp({
		email,
		password,
	});
	return data;
};
