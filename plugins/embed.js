const Discord = require('discord.js')
class Embed extends Discord.MessageEmbed {
    constructor () {
        super()
        this.setFooter('HaruBot')
    }
}

module.exports = Embed
module.exports.codename = 'embed'