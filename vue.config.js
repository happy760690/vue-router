const path = require('path')
const resolve = (dir) => path.join(__dirname, '.', dir)

module.exports = {
    lintOnSave: false,
    configureWebpack:{
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'src': resolve('src'),
            }
        },
    },
    chainWebpack: config => {
        config.plugins.delete('prefetch')
        config.plugins.delete('prefetch')
    }
}