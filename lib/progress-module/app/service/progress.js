const { Service } = require('egg')

module.exports = class extends Service {

  async create(progress) {
    await this.ctx.model.Progress.create({ progress })
  }
}