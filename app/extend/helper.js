module.exports = {
  /**
   * 添加 createdBy, createdAt, updatedBy, updatedAt 属性
   * @param {Object|Array} data 
   * @param {Function} userIdGetter
   */
  createByUser(data, userIdGetter) {
    const { user } = this.ctx.request
    const now = new Date()
    if (!userIdGetter) {
      userIdGetter = user => user.id
    }

    const attach = item => ({
      ...item,
      createdBy: userIdGetter(user),
      createdAt: now,
      updatedBy: userIdGetter(user),
      updatedAt: now
    })
    if (Array.isArray(data)) {
      return data.map(attach)
    } else {
      return attach(data)
    }
  },

  /**
   * 添加 updatedBy, updatedAt 属性
   * @param {Object|Array} data 
   * @param {Function} userIdGetter
   */
  updateByUser(data, userIdGetter) {
    const { user } = this.ctx.request
    const now = new Date()
    if (!userIdGetter) {
      userIdGetter = user => user.id
    }

    const attach = item => ({
      ...item,
      updatedBy: userIdGetter(user),
      updatedAt: now
    })
    if (Array.isArray(data)) {
      return data.map(attach)
    } else {
      return attach(data)
    }
  },

  async crud(action, model, ...args) {
    const processor = {
      C: data => {
        return model.create(this.ctx.helper.createByUser(data))
      },
      R: () => {
        return model.findAll({
          where: {
            isDeleted: 0
          },
          raw: true
        })
      },
      U: (id, data) => {
        return model.update(
          this.ctx.helper.updateByUser(data),
          { where: { id } }
        )
      },
      D: (id) => {
        return processor['U'](id, { isDeleted: 0 })
      }
    }
    return processor[action].apply(null, args)
  }

}