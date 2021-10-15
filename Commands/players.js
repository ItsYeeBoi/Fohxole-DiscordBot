const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    category: 'Testing',
    description: 'API Test',

    callback: ({ message, client }) => {

        const author_tag = message.author.tag
        const author_id = message.author.id

        console.log(`${author_tag} (${author_id}) Used The Command -players`)
        const PlayersCommand_Embed = new MessageEmbed()
        .setColor('#25059E')
        .setTitle(`The Command (-players) was used`)
        .setThumbnail()
        .addFields(
            { name: 'The Command Was Used By', value: `${author_tag} (${author_id})` },
        )
        .setTimestamp()

        client.channels.cache.get(process.env.COMMAND_LOGGER).send({embeds: [PlayersCommand_Embed] })

        axios.get(`https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=505460`)
        .then((res) => {
            const player_count = res.data.response.player_count

            message.reply(`Foxhole Player Count: \`${player_count}\``)

        })
        .catch((err) => {
            console.log('Players ERR:', err)
        })
    },

}