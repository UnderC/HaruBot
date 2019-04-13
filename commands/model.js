module.exports = class Command {
    constructor (codename, client) {
        if (!codename) throw new Error('SHITTTTTTTTTTTTTTTTTTTTTTTTTTT')
        this.codename = codename
        this.client = client
    }

    static run (msg, args, lang) {

    }
}