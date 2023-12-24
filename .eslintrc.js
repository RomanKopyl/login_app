module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        '@react-native-community',
    ],
    rules: {
        'prettier/prettier': 0,
        'no-shadow': 'off',
        curly: [1, 'multi-line'],
        'brace-style': [1, 'stroustrup'],
        'comma-dangle': [1, 'always-multiline'],
        '@typescript-eslint/no-var-requires': 'off',
    },
};
