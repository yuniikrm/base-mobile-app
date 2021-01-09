module.exports = {
  root: true,
  extends: ['plugin:react/recommended', 'airbnb'],
  plugins: ['react'],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@navigations', './src/navigations'],
          ['@services', './src/services'],
          ['@screens', './src/screens'],
          ['@styles', './src/styles'],
          ['@utils', './src/styles'],
          ['@store', './src/store'],
          ['@i18n', './src/i18n'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
      // node: {
      //   paths: ['src'],
      //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
      //   alias: {
      //     '@assets': './src/assets',
      //     '@components': './src/components',
      //     '@navigations': './src/navigations',
      //     '@services': './src/services',
      //     '@screens': './src/screens',
      //     '@styles': './src/styles',
      //     '@utils': './src/styles',
      //     '@store': './src/store',
      //     '@i18n': './src/i18n'
      //   }
      // }
    }
  },
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
