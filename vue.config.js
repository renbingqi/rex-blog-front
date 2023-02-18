module.exports = {
  devServer: {
    proxy: {
      '/articles': {
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: true
      },
      '/classifications': {
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: true
      }
    }
  },
  assetsDir: 'static'
}
