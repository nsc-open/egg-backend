const path = require('path')

module.exports = {
  notification: {
    path: path.join(__dirname, '../lib/notification-module'),
    enable: true
  },

  progress: {
    path: path.join(__dirname, '../lib/progress-module'),
    enable: true
  }

}