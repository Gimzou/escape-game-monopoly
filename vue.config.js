module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    disableHostCheck: true,
    port: 8080
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Vive les jeux !'
      return args
    })
  }
}