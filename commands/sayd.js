const model = require('./model')
module.exports = class Sayd extends model {
    constructor (client) {
        super('sayd', client)
    }

    run (msg, args) {
        msg.delete(0)
        msg.channel.send(args.splice(1).join(' '))
    }
}