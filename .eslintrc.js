module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
  extends: [
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "import/prefer-default-export": "off",
    'max-len': ['error', { ignoreComments: true }],
    "no-unused-vars": "off",
    "import/extensions": "off",
    "no-plusplus": "off",
    "no-lone-blocks": "off",
    "no-unused-expressions": "off",
    "no-param-reassign": "off",
  },
};
