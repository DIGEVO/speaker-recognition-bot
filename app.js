'use strict';

const builder = require('botbuilder');
const utils = require('./utils');

const bot = utils.initBot();

bot.dialog('/', (session) => {

    const txt = session.message.attachments.map(att => JSON.stringify(att)).join('<->');//  reduce((acc, att) => acc.concat(JSON.stringify(att), "<->"),"");

    session.send(txt);
});


function getName(message) {
    return message.user.name.split(" ", 1)[0];
}