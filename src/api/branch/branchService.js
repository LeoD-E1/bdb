const { VITE_APP_BASE_URL } = import.meta.env;

export const getBranchById = async branchId => {
	console.log(
		'🚀 ~ file: branchService.js:4 ~ getBranchById ~ branchId:',
		branchId
	);
	try {
		const response = await fetch(`${VITE_APP_BASE_URL}/branch/${branchId}`);
		return response.json();
	} catch (error) {
		console.log(error);
	}
};
