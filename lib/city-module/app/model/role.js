module.exports = app => {
  /* model definition */
  const { STRING, INTEGER, DATE, FLOAT, DOUBLE, NOW, UUID, UUIDV1, Op } = app.Sequelize

  const columnsDefinition = {
    id: {
      type: STRING(10),
      primaryKey: true
    },
    name: {
      type: STRING(255)
    },
  }
  const Role = app.model.define('Role', columnsDefinition, {
    tableName: 't_roles',
    timestamps: false
  })

  console.log('city loaded')

  return Role
}
