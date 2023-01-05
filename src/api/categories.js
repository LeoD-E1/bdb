import { supabase } from '../helper/supabaseClient';

export const getAllCategories = async () => {
	const { data: categories, error } = await supabase
		.from('category')
		.select('*');
	return categories;
};

export const createCategory = async name => {
	const { data, error } = await supabase
		.from('category')
		.insert({ name })
		.select();
};
