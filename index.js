const library = require('./botlib');
const botlib = new library();
botlib.login({
    username: "testing",
    host: "kaboom.pw"
});
const bot = botlib.getBot();
bot.on('chat', (username, message) => {
    if (username === bot.username) return
    console.log(`${username}: ${message}`)
})
bot.once('spawn', () => {
    console.log("Logged in as " + bot.username)
})