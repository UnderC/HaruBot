const discord = require("discord.js");
module.exports = class extends discord.Client {
  constructor(o) {
    super(), this.pkg = o, this.config = o.config, this.commands =
      void 0, this.load(o), this.config.autoLogin && super.login(
        this.config.token)
  }
  addEvent(o) {
    o && o.codename && o.run && this.on(o.codename, o.run)
  }
  login() {
    super.login(this.config.token)
  }
  load(o) {
    this.pkg = o, this.commands = new Commands, o.commands
      .forEach(o => {
        this.commands.add(new o(this))
      }), this.removeAllListeners(), o.events.forEach(o => {
        this.addEvent(new o(this))
      })
  }
};
class Commands {
  constructor() {
    this.commands = []
  }
  fetch(o) {
    for (const s of this.commands)
      if (s.codename === o) return s
  }
  add(o) {
    o && o.codename && o.run && this.commands.push(o)
  }
}
module.exports.codename = "bot";
