module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },
  devServer: {
    hot: false,
    liveReload: false,
    inline: false
  }
};
