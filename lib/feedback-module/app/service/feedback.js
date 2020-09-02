const { Service } = require('egg')

module.exports = class extends Service {

  async create(device) {
    await this.ctx.model.Feedback.create({ id: Date.now(), device })
  }
}