module.exports = {
  mode: 'spa',
  head: {
    title: 'notes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A web based note taking application backed by a git repo.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  auth: {
    redirect: {
      callback: '/login'
    },
    strategies: {
      gitlab: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://gitlab.com/oauth/authorize',
        userinfo_endpoint: 'https://gitlab.com/api/v4/user',
        scope: ['openid', 'read_user', 'api'],
        response_type: 'token',
        token_type: 'Bearer',
        client_id: '7cb14d2a3bda216b641c5879dccf28ace0ae4153e1f3e1724fe4eab1c5023ab7',
        token_key:  'access_token'
      }
    }
  },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
