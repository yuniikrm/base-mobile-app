module.exports = {
  root: true,
  extends: ['plugin:react/recommended', 'airbnb'],
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    semi: [2, 'never'],
    'comma-dangle': ['error', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-console': 'off',
    'linebreak-style': 'off',
    'no-underscore-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: false, peerDependencies: false }]
  }
}
