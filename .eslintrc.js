module.exports = {
  ignorePatterns: ['**/dist/**/*'],

  env: {
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  plugins: ['@typescript-eslint', 'prettier'],

  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },

  rules: {
    'prettier/prettier': 'warn',
    curly: ['error', 'multi-line'],
    'no-console': ['off'],
    'max-len': [
      'warn',
      {
        code: 80,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': ['off'],
  },
}
