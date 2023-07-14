const mineflayer = require('mineflayer');
let bot;

class library {
    login({ username, host }) {
        bot = mineflayer.createBot({
            host: host,
            username: username,
            auth: 'offline'
        })
    }

    chat(message) {
        bot.chat(message);
    }

    getBot() {
        return bot;
    }
}
  
module.exports = library;  