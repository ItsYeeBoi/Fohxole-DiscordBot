const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    category: 'Testing',
    description: 'API Test',

    callback: ({ channel, message, client }) => {
        const author_tag = message.author.tag
        const author_id = message.author.id

        console.log(`${author_tag} (${author_id}) Used The Command -info`)
        const InfoCommand_Embed = new MessageEmbed()
        .setColor('#25059E')
        .setTitle(`The Command (-info) was used`)
        .setThumbnail()
        .addFields(
            { name: 'The Command Was Used By', value: `${author_tag} (${author_id})` },
        )
        .setTimestamp()

        client.channels.cache.get(process.env.COMMAND_LOGGER).send({embeds: [InfoCommand_Embed] })
        
        axios.get('https://war-service-live.foxholeservices.com/api/worldconquest/war')
        .then((res) => {

            axios.get('https://war-service-live-2.foxholeservices.com/api/worldconquest/war')
            .then((res2) => {

                const warId = res.data.warId
                const warNumber = res.data.warNumber
                const victoryTowns = res.data.requiredVictoryTowns
                const winner = res.data.winner
                var startTime = new Date(res.data.conquestStartTime).toLocaleDateString("en-GB")
                var resistanceStartTime = new Date(res.data.resistanceStartTime).toLocaleDateString("en-GB")
                var endTime = new Date(res.data.conquestEndTime).toLocaleDateString("en-GB")
                var startTime1 = Math.floor(res.data.conquestStartTime / 1000)
                var resistanceStartTime1 = Math.floor(res.data.resistanceStartTime / 1000)
                var endTime1 = Math.floor(res.data.conquestEndTime / 1000)

                const warId2 = res2.data.warId
                const warNumber2 = res2.data.warNumber
                const victoryTowns2 = res2.data.requiredVictoryTowns
                const winner2 = res2.data.winner
                var startTime2 = new Date(res2.data.conquestStartTime).toLocaleDateString("en-GB")
                var resistanceStartTime2 = new Date(res2.data.resistanceStartTime).toLocaleDateString("en-GB")
                var endTime2 = new Date(res2.data.conquestEndTime).toLocaleDateString("en-GB")
                var startTime21 = Math.floor(res2.data.conquestStartTime / 1000)
                var resistanceStartTime21 = Math.floor(res2.data.resistanceStartTime / 1000)
                var endTime21 = Math.floor(res2.data.conquestEndTime / 1000)
                
                if (startTime === '01/01/1970') {
                    var startTime = `\`null\``
                }
                if (startTime != `\`null\``) {
                    var startTime = `<t:${startTime1}:D>`
                }
                if (resistanceStartTime === '01/01/1970') {
                    var resistanceStartTime = `\`null\``
                }
                if (resistanceStartTime != `\`null\``) {
                    var resistanceStartTime = `<t:${resistanceStartTime1}:D>`
                }
                if (endTime === '01/01/1970') {
                    var endTime = `\`null\``
                }
                if (endTime != `\`null\``) {
                    var endTime = `<t:${endTime1}:D>`
                }

                if (startTime2 === '01/01/1970') {
                    var startTime2 = `\`null\``
                }
                if (startTime2 != `\`null\``) {
                    var startTime2 = `<t:${startTime21}:D>`
                }
                if (resistanceStartTime2 === '01/01/1970') {
                    var resistanceStartTime2 = `\`null\``
                }
                if (resistanceStartTime2 != `\`null\``) {
                    var resistanceStartTime2 = `<t:${resistanceStartTime21}:D>`
                }
                if (endTime2 === '01/01/1970') {
                    var endTime2 = `\`null\``
                }
                if (endTime2 != `\`null\``) {
                    var endTime2 = `<t:${endTime21}:D>`
                }

                const infoEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`War Info`)
                .setDescription('All Information On The Current War')
                .addFields(
                    { name: `Shard 1`, value: `WarId: \`${warId}\`\nWar Number: \`${warNumber}\`\nVictory Towns Required: \`${victoryTowns}\`\nWinner: \`${winner}\`\n\nStart Time: ${startTime}\nResistance Start Time: ${resistanceStartTime}\nEnd Time: ${endTime}`, inline: true },
                    { name: 'Shard 2', value: `WarId: \`${warId2}\`\nWar Number: \`${warNumber2}\`\nVictory Towns Required: \`${victoryTowns2}\`\nWinner: \`${winner2}\`\n\nStart Time: ${startTime2}\nResistance Start Time: ${resistanceStartTime2}\nEnd Time: ${endTime2}`, inline: true },
                )
                .setTimestamp()
                    channel.send({ embeds: [infoEmbed] })
            })
            .catch((err) => {
                console.log('Info ERR:', err)
            })
        })
        .catch((err) => {
            console.log('Info ERR:', err)
        })
    }
}