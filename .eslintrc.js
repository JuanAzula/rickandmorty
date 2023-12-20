module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    rules: {
        'semi': ['error', 'always'],
        'no-console': 'warn',
    },
};