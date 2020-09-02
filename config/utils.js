const sequelize = require('sequelize')
const clsHooked = require('cls-hooked')

exports.getSequelize = (namespace) => {
  clsNamespace = clsHooked.createNamespace(namespace)
  sequelize.useCLS(clsNamespace)
  return sequelize
}