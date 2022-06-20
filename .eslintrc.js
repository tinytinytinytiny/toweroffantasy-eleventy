module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'consistent-return': 0,
    'comma-dangle': 0,
    'func-names': ['error', 'as-needed'],
    'linebreak-style': 0,
		'indent': ['error', 'tab', {
			SwitchCase: 1
		}],
    'max-len': 0,
    'no-mixed-operators': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
		'no-tabs': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-use-before-define': ['error', 'nofunc'],
    'operator-linebreak': ['error', 'before', { overrides: { '?': 'ignore', ':': 'ignore' } }],
    // 'prefer-arrow-callback': 0,
    'space-before-function-paren': 0
  },
};
