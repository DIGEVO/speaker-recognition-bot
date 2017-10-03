'use strict';

const builder = require('botbuilder');
const utils = require('./utils');

const bot = utils.initBot();

bot.dialog('/', (session) => {
    session.send(`Hola ${getName(session.message)}, me dijiste: ${JSON.stringify(session.message)}`)
});


function getName(message) {
    return message.user.name.split(" ", 1)[0];
}