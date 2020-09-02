const { Service } = require('egg')

module.exports = class extends Service {

  async create(name) {
    await this.ctx.model.Role.create({ id: Date.now(), name })
  }
}