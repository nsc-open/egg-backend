const { Service } = require('egg')

module.exports = class extends Service {

  async testTrx() {
    await this.ctx.model.transaction(async () => {
      await this.ctx.service.feedback.create('test3')
      await this.ctx.service.role.create('test3')
    })
  }

}