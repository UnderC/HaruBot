const model = require('./model')
module.exports = class Say extends model {
    constructor (client) {
        super('say', client)
    }

    run (msg, args) {
        msg.channel.send(args.splice(1).join(' '))
    }
}