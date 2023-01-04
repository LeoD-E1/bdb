module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint: recommended',
		'plugin:react/recommended',
		'standard',
		'plugin:react/jsx-runtime',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-jsx'],
	rules: {
		'react/prop-types': 'warn',
		camelcase: 'off',
	},
};
