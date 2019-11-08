module.exports = {
  env: {
    es6: true,
    'jest/globals': true,
    node: true
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['jest', 'prettier'],
  rules: {
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'prettier/prettier': ['error']
  }
};
