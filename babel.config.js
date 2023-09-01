module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@/components': './src/components',
            '@/contexts': './src/contexts',
            '@/services': './src/services',
            '@/screens': './src/screens',
            '@/storage': './src/storage',
            '@/assets': './src/assets',
            '@/styles': './src/styles',
            '@/utils': './src/utils'
          }
        }
      ]
    ]
  }
}
