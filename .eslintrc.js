module.exports = {
  env: {
    es6: true,
    "jest/globals": true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'jest'
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed', { 'requireForBlockBody': true }],
  },
};
