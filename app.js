'use strict';

const builder = require('botbuilder');
const request = require('request');

const utils = require('./utils');

const bot = utils.initBot();

bot.dialog('/', (session) => {

    // const txt = session.message.attachments
    //     .map(att => JSON.stringify(att)).join('<->');
    // //session.message.address.channelId
    // session.send(txt);

    if (session.message.attachments.length > 0) {
        const attachment = session.message.attachments[0];

        session.send({
            text: "You sent:",
            attachments: [
                {
                    contentType: attachment.contentType,
                    contentUrl: attachment.contentUrl,
                    name: attachment.name
                }
            ]
        });
        // const url = session.message.attachments[0].contentUrl;
        // request.get(url, (error, response, body) => {
        //     if (!error && response.statusCode == 200) {
        //         var csv = body;
        //         // Continue with your processing here.

        //     }
        // });

    } else {
        session.send("You said: %s", session.message.text);
    }


});


function getName(message) {
    return message.user.name.split(" ", 1)[0];
}