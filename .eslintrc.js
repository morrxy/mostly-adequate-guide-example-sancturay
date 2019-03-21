module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'error',
    complexity: ['error', 6]
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  globals: {
    window: true
  }
};
