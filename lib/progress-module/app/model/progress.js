module.exports = app => {
  /* model definition */
  const { STRING, INTEGER, DATE, FLOAT, DOUBLE, NOW, UUID, UUIDV1, Op } = app.Sequelize

  const columnsDefinition = {
    id: {
      type: STRING(10),
      primaryKey: true,
      defaultValue: UUIDV1()
    },
    progress: {
      type: FLOAT
    },
  }
  const Progress = app.model.define('Progress', columnsDefinition, {
    tableName: 't_progress',
    timestamps: false
  })

  return Progress
}
