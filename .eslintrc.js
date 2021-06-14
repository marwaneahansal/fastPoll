/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'linebreak-style': 'off',
    'arrow-parens': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'off',

    'no-tabs': 'off',
    'no-multiple-empty-lines': ['error', { 'max': 3}],
    'max-len': 'off',
    'no-param-reassign': 'off'

  },
};
