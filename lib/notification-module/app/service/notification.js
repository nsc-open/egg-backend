const { Service } = require('egg')

module.exports = class extends Service {

  async create(message) {
    await this.ctx.model.Notification.create({ message })
  }
}