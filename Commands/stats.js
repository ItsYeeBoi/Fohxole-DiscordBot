const { MessageEmbed } = require('discord.js')

module.exports = {
    category: 'Testing',
    description: 'API Test',

    callback: ({ client, channel, message }) => {
        const author_tag = message.author.tag
        const author_id = message.author.id

        console.log(`${author_tag} (${author_id}) Used The Command -stats`)
        const StatsCommand_Embed = new MessageEmbed()
        .setColor('#25059E')
        .setTitle(`The Command (-stats) was used`)
        .setThumbnail()
        .addFields(
            { name: 'The Command Was Used By', value: `${author_tag} (${author_id})` },
        )
        .setTimestamp()

        client.channels.cache.get(process.env.COMMAND_LOGGER).send({embeds: [StatsCommand_Embed] })

        const days = let = Math.floor(client.uptime / 86400000)
        const hours = let = Math.floor(client.uptime / 3600000) % 24
        const minutes = let = Math.floor(client.uptime / 60000) % 60
        const seconds = let = Math.floor(client.uptime / 1000) % 60
        const members = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
        const { version } = require('../package.json')

        const statsEmbed = new MessageEmbed()

        .setColor('#0099ff')
        .setTitle('Foxhole Bot Stats')
        .setDescription('Stats Listed Below')
        .addFields(
            { name: `**Version:** \`${version}\``,
              value: `**Days:** \`${days}\`\n**Hours:** \`${hours}\`\n**Minutes:** \`${minutes}\`\n**Seconds:** \`${seconds}\`\n**Guilds:** \`${client.guilds.cache.size}\`\n**Members:** \`${members}\`` }
        )
        .setTimestamp()

        channel.send({ embeds: [statsEmbed] })
    }
}
