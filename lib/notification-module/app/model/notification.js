module.exports = app => {
  /* model definition */
  const { STRING, INTEGER, DATE, FLOAT, DOUBLE, NOW, UUID, UUIDV1, Op } = app.Sequelize

  const columnsDefinition = {
    id: {
      type: STRING(10),
      primaryKey: true,
      defaultValue: UUIDV1()
    },
    message: {
      type: STRING(100)
    }
  }
  const Notification = app.model.define('Notification', columnsDefinition, {
    tableName: 't_notification',
    timestamps: false
  })


  return Notification
}
