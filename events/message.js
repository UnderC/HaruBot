const model = require('./model')
module.exports = class OnMessage extends model {
  constructor (client) {
    super('message', client)
  }

  run (msg) {
    if (msg.content.startsWith(this.client.config.prefix)) {
      let args = msg.content.trim().replace(this.client.config.prefix, '').split(' ')
      let command = this.client.commands.fetch(args[0])
      if (command) command.run(msg, args)
    }
  }
}