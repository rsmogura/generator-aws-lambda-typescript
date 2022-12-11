/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,

  plugins: ['prettier', '@typescript-eslint'],

  env: {
    node: true,
    es2022: true,
    jest: true,
  },

  parserOptions: {
    ecmaVersion: '2022',
  },

  ignorePatterns: ['dist/'],

  rules: {
    'prettier/prettier': 'error',
  },

  overrides: [
    {
      files: ['**/*.js'],
      extends: ['eslint:recommended'],
    },
    {
      files: ['**/*.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/strict'],
      rules: {
        'no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
  ],
};

module.exports = config;
