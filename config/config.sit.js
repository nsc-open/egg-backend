const path = require('path')
const { getSequelize } = require('./utils')

module.exports = appInfo => {
  const config = exports = {}

  config.cluster = {
    listen: {
      port: 7003
    }
  }

  config.logger = {
    dir: path.resolve(__dirname, `/var/www/logs/${appInfo.name}`)
  }

  config.redis = {
    host: '127.0.0.1',
    port: 12582,
    password: null,
    db: 2
  }

  config.sequelizeModule = {
    dialect: 'mysql',
    Sequelize: getSequelize(appInfo.name),
    database: 'db_test',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'password'
  }

  return config
}
