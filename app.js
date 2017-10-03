'use strict';

const builder = require('botbuilder');
const utils = require('./utils');

const bot = utils.initBot();

bot.dialog('/', (session) =>
    session.send(`Hola ${session.message.user.name.split(" ", 1)[0]}, me dijiste: ${session.message.text}`));

// /*-----------------------------------------------------------------------------
// A simple echo bot for the Microsoft Bot Framework. 
// -----------------------------------------------------------------------------*/

// var restify = require('restify');
// var builder = require('botbuilder');

// // Setup Restify Server
// var server = restify.createServer();
// server.listen(process.env.port || process.env.PORT || 3978, function () {
//    console.log('%s listening to %s', server.name, server.url); 
// });
  
// // Create chat connector for communicating with the Bot Framework Service
// var connector = new builder.ChatConnector({
//     appId: process.env.MicrosoftAppId,
//     appPassword: process.env.MicrosoftAppPassword,
//     stateEndpoint: process.env.BotStateEndpoint,
//     openIdMetadata: process.env.BotOpenIdMetadata 
// });

// // Listen for messages from users 
// server.post('/api/messages', connector.listen());

// /*----------------------------------------------------------------------------------------
// * Bot Storage: This is a great spot to register the private state storage for your bot. 
// * We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
// * For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
// * ---------------------------------------------------------------------------------------- */

// // Create your bot with a function to receive messages from the user
// var bot = new builder.UniversalBot(connector, function (session) {
//     session.send("You said: %s", session.message.text);
// });
