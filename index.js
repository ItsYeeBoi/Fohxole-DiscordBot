const DiscordJS = require('discord.js')
const { Intents } = DiscordJS
const WOKCommands = require('wokcommands')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

let PlayerCount = require('./server/players');

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
})

  
client.on('ready', () => {

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'Commands'),

        testServers: ['791435060254474291'],


    })
    .setDisplayName('Foxhole Test')
    .setDefaultPrefix('-')
    .setCategorySettings([
        {
            name: 'Testing', 
            emoji: '🧥',
            hidden: true,
        }
    ])
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
      
      setInterval(() => {
        PlayerCount.getPlayerCount().then((result) => {
            client.user.setActivity(`with ${result.data.response.player_count} players | -help`,{ type: 'PLAYING' });
        })
      }, 10000);
  });

client.login(process.env.TOKEN)
