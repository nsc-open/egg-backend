class AppBootHook {
  constructor(app) {
    this.app = app;
  }


  async serverDidReady() {
    console.log('serverDidReady')

    const ctx = this.app.createAnonymousContext()    
    // ctx.service.test.testTrx()
  }

}

module.exports = AppBootHook;