module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended'
  ],
  globals: {
    Promise: true
  },
  env: {
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      modules: true
    },
  },
  rules: {
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_'
      }
    ],
    'no-magic-numbers': 'off',
    'no-invalid-this': 'off',
    'no-unused-expressions': 'off',
    'no-console': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'new-cap': 'off',
    'func-style': 'off',
    'generator-star-spacing': 'off',
    'max-len': ['error', 100, { ignoreUrls: true }],
    'max-params': 'off',
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    eqeqeq: ['error', 'smart'],
    'filenames/match-regex': 'off',
    'filenames/match-exported': 'off',
    'filenames/no-index': 'off'
  }
};
