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

        testServers: [process.env.TEST_SERVER],

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
        console.log('Refreshed player count')
      }, 60000);
});

client.on('guildCreate', (guild) => {
    const guild_name = guild.name
    const guild_id = guild.id
    const guild_members = guild.memberCount
    const guild_image = guild.iconURL()
    const ownerId = guild.ownerId
    const guilds = client.guilds.cache.size

    client.users.fetch(ownerId).then((user) => {
        const owner_username = user.username
        const owner_discriminator = user.discriminator
    

    const guildCreate_Embed = new DiscordJS.MessageEmbed()
    .setColor('#25059E')
    .setTitle('I Have Joined A New Guild!')
    .setThumbnail(guild_image)
    .addFields(
        { name: '**Guild:**', value: `${guild_name} (${guild_id})` },
        { name: '**Owner:**', value: `${owner_username}#${owner_discriminator} (${ownerId})` },
        { name: '**Members:**', value: `${guild_members}` }
    )
    .setTimestamp()
    .setFooter(`The Current Number Of Guilds Im In: ${guilds}`)

    client.channels.cache.get(process.env.GUILD_CREATE).send({embeds: [guildCreate_Embed] })
    })
})

client.on('guildDelete', (guild) => {
    const guild_name = guild.name
    const guild_id = guild.id
    const guild_members = guild.memberCount
    const guild_image = guild.iconURL()
    const ownerId = guild.ownerId
    const guilds = client.guilds.cache.size

    client.users.fetch(ownerId).then((user) => {
        const owner_username = user.username
        const owner_discriminator = user.discriminator
    

    const guildDelete_Embed = new DiscordJS.MessageEmbed()
    .setColor('#25059E')
    .setTitle('I Have Left A Guild!')
    .setThumbnail(guild_image)
    .addFields(
        { name: '**Guild:**', value: `${guild_name} (${guild_id})` },
        { name: '**Owner:**', value: `${owner_username}#${owner_discriminator} (${ownerId})` },
        { name: '**Members:**', value: `${guild_members}` }
    )
    .setTimestamp()
    .setFooter(`The Current Number Of Guilds Im In: ${guilds}`)

    client.channels.cache.get(process.env.GUILD_DELETE).send({embeds: [guildDelete_Embed] })
    })
})

client.login(process.env.TOKEN)
