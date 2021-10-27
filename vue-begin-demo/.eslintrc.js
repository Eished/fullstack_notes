module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  rules: {
    'no-unused-vars': ['off', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
  },
}
