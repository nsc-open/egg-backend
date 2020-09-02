const path = require('path')

module.exports = {
  city: {
    path: path.join(__dirname, '../lib/city-module'),
    enable: true
  },

  feedback: {
    path: path.join(__dirname, '../lib/feedback-module'),
    enable: true
  }

}