module.exports = class DiscordEvent__ {
  constructor (codename, client) {
    if (!codename) throw new Error('CODENAME NOT DEFINED')
    this.client = client
    this.codename = codename
    this.run = this.run.bind(this)
  }

  run (a, b, c) {

  }
}