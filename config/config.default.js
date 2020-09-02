const path = require('path')

module.exports = appInfo => {
  
  const config = exports = {}

  config.keys = appInfo.name + '_1599053756419_6724';

  config.middleware = [];

  config.bodyParser = {
    jsonLimit: '5mb',
    formLimit: '5mb'
  }
  
  config.static = {
    prefix: '/public/',
    dir: [
      path.join(appInfo.baseDir, 'app/public')
    ],
    gzip: true
  }

  config.security = {
    csrf: {
      ignore: ctx => true
    },
    ignore: '/api/',
    domainWhiteList: [],
    xframe:{
			enable:false
		}
  }

  return config
}
