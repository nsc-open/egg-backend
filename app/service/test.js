const { Service } = require('egg')

module.exports = class extends Service {

  async testTrx() {
    await this.ctx.model.transaction(async () => {
      await this.ctx.service.progress.create(10.4)
      await this.ctx.service.notification.create('hi')
    })
  }

}