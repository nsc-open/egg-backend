module.exports = app => {
  /* model definition */
  const { STRING, INTEGER, DATE, FLOAT, DOUBLE, NOW, UUID, UUIDV1, Op } = app.Sequelize

  const columnsDefinition = {
    id: {
      type: STRING(10),
      primaryKey: true
    },
    device: {
      type: STRING(100)
    }
  }
  const Feedback = app.model.define('Feedback', columnsDefinition, {
    tableName: 't_feedback',
    timestamps: false
  })


  return Feedback
}
