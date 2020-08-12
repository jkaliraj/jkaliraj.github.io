
const config = {
  development: {
    env: 'development',
    debug: true,
    base: '/'
  },

  production: {
    env: 'production',
    debug: false,
    base: '/'
  }
}

export default config[process.env.NODE_ENV || 'development']
