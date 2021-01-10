module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: './src',
        extensions: ['.js', '.jsx', '.tsx', 'ts', '.ios.js', '.android.js', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigations': './src/navigations',
          '@services': './src/services',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@store': './src/store',
          '@i18n': './src/i18n',
          '@config': './src/config',
          '@api': './src/api'
        }
      }
    ]
  ]
}
