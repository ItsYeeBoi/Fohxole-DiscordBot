const { MessageEmbed } = require('discord.js')

module.exports = {
    category: 'Testing',
    description: 'Test',

    callback: ({ message, client }) => {
        const author_tag = message.author.tag
        const author_id = message.author.id

        console.log(`${author_tag} (${author_id}) Used The Command -ping`)
        const PingCommand_Embed = new MessageEmbed()
        .setColor('#25059E')
        .setTitle(`The Command (-ping) was used`)
        .setThumbnail()
        .addFields(
            { name: 'The Command Was Used By', value: `${author_tag} (${author_id})` },
        )
        .setTimestamp()

        client.channels.cache.get(process.env.COMMAND_LOGGER).send({embeds: [PingCommand_Embed] })

        message.reply('Calculating ping...').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            resultMessage.edit(`Bot latency: \`${ping}\`, API Latency: \`${client.ws.ping}\``)
        })
    }
}
