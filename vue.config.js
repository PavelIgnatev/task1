module.exports = {
    publicPath: '/',
    filenameHashing: false,
    chainWebpack: config => {
      if(config.plugins.has('extract-css')) {
        const extractCSSPlugin = config.plugin('extract-css')
        extractCSSPlugin && extractCSSPlugin.tap(() => [{
          filename: 'stories.css',
          chunkFilename: '[name].css'
        }])
      }
    },
    configureWebpack: {
      optimization: {
        splitChunks: false
      },
      output: {
         filename: "stories.js",
         chunkFilename: "[name]-chunk-js",
      },
    },
    productionSourceMap: false
  }