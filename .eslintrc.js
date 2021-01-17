module.exports = {
  root: true,
  extends: ['plugin:react/recommended', 'airbnb'],
  plugins: ['react', 'react-native'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-console': 'off',
    'linebreak-style': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react-native/no-unused-styles': 2, // disallow unused styles
    'react-native/no-inline-styles': 2, // disallow styles declared within the component itself
    'react-native/no-color-literals': 2, // enforces variable names to be used for storing colors
  },
};
