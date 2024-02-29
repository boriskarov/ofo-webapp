const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },

    devServer: {
        port: 3000,
        proxy: {
            '/ticket': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
            },
            '/backlog': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
            },
            '/mail': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
            }
        }
    }
})
