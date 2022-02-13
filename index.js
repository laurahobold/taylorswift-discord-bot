require('dotenv').config();
const Discord = require('discord.js');
const { generateFact, exes } = require('./botFunctions');

const bot = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
const prefix = '!'

bot.on('ready', () => {
    console.log('are you ready for it?', bot.user.tag);
})

bot.on('message', (msg) => {
    let res = null;
    switch (msg.content.toLowerCase()) {
        case `${prefix}fact`.toLowerCase():
            msg.reply(generateFact())
            break;
        case `${prefix}jake`.toLowerCase():
            res = exes('jake');
            msg.reply("NAME: " + res.name + '\n\n' + "SONGS: " + res.songs + '\n\n' + "HISTORY: " + res.history)
            break;
        case `${prefix}tom`.toLowerCase():
            res = exes('tom');
            msg.reply("NAME: " + res.name + '\n\n' + "SONGS: " + res.songs + '\n\n' + "HISTORY: " + res.history)
            break;
        case `${prefix}calvin`.toLowerCase():
            res = exes('calvin');
            msg.reply("NAME: " + res.name + '\n\n' + "SONGS: " + res.songs + '\n\n' + "HISTORY: " + res.history)
            break;
        case `${prefix}joe`.toLowerCase():
            res = exes('joe');
            msg.reply("NAME: " + res.name + '\n\n' + "SONGS: " + res.songs + '\n\n' + "HISTORY: " + res.history)
            break;
        case `${prefix}harry`.toLowerCase():
            res = exes('harry');
            msg.reply("NAME: " + res.name + '\n\n' + "SONGS: " + res.songs + '\n\n' + "HISTORY: " + res.history)
            break;
        case `${prefix}john`.toLowerCase():
            res = exes('john');
            msg.reply("NAME: " + res.name + '\n\n' + "SONGS: " + res.songs + '\n\n' + "HISTORY: " + res.history)
            break;
        case `${prefix}drew`.toLowerCase():
            res = exes('drew');
            msg.reply("NAME: " + res.name + '\n\n' + "SONGS: " + res.songs + '\n\n' + "HISTORY: " + res.history)
            break;
        case `${prefix}brandon`.toLowerCase():
            res = exes('brandon');
            msg.reply("NAME: " + res.name + '\n\n' + "SONGS: " + res.songs + '\n\n' + "HISTORY: " + res.history)
            break;
        case `${prefix}taylor`.toLowerCase():
            res = exes('taylor');
            msg.reply("NAME: " + res.name + '\n\n' + "SONGS: " + res.songs + '\n\n' + "HISTORY: " + res.history)
            break;
        case `${prefix}help`:
            msg.reply('commands:' + '\n' + '!fact - generates a random taylor swift fact.' + '\n' + '!ex first name - will tell you which songs are about said person as well as their history with taylor.')
    }
})


bot.login(process.env.CLIENT_TOKEN);





