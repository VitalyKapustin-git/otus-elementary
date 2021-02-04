module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'max-len': ['error', { ignoreComments: true }],
    'no-restricted-properties': 'off',
    'no-useless-escape': 'off',
  },
};
