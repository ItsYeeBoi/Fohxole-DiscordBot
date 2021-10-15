const { MessageEmbed } = require('discord.js')

module.exports = {
    category: 'Testing',
    description: 'API Test',

    callback: ({ channel, message, client }) => {
        const author_tag = message.author.tag
        const author_id = message.author.id

        console.log(`${author_tag} (${author_id}) Used The Command -maps`)
        const MapsCommand_Embed = new MessageEmbed()
        .setColor('#25059E')
        .setTitle(`The Command (-maps) was used`)
        .setThumbnail()
        .addFields(
            { name: 'The Command Was Used By', value: `${author_tag} (${author_id})` },
        )
        .setTimestamp()

        client.channels.cache.get(process.env.COMMAND_LOGGER).send({embeds: [MapsCommand_Embed] })

        const maps = ["Acrithia", "AllodsBight", "AshFields", "BasinSionnach", "CallahansPassage", "CallumsCape", "ClansheadValley", "DeadLands", "DrownedVale", "EndlessShore", "FarranacCoast", "FishermansRow", "Godcrofts", "GreatMarch", "Heartlands", "HowlCounty", "Kalokai", "LinnMercy", "LochMor", "MarbanHollow", "MooringCounty", "MorgensCrossing", "NevishLine", "Oarbreaker", "Origin", "ReachingTrail", "RedRiver", "ShackledChasm", "SpeakingWoods", "Stonecradle", "TempestIsland", "Terminus", "TheFingers", "UmbralWildwood", "ViperPit", "WeatheredExpanse", "Westgate"]

        const mapsEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('All Maps In Foxhole')
        .setDescription('Use Map Names With -mstats [mapname]')
        .addFields(
            { name: 'Maps', value: `${maps[0]}\n ${maps[2]}\n ${maps[4]}\n ${maps[6]}\n ${maps[8]}\n ${maps[10]}\n ${maps[12]}\n ${maps[14]}\n ${maps[16]}\n ${maps[20]}\n ${maps[22]}\n ${maps[24]}\n ${maps[26]}\n ${maps[28]}\n ${maps[30]}\n ${maps[32]}\n ${maps[34]}\n ${maps[36]}`, inline: true },
            { name: 'Maps', value: `${maps[1]}\n ${maps[3]}\n ${maps[5]}\n ${maps[7]}\n ${maps[9]}\n ${maps[11]}\n ${maps[13]}\n ${maps[15]}\n ${maps[17]}\n ${maps[19]}\n ${maps[21]}\n ${maps[23]}\n ${maps[25]}\n ${maps[27]}\n ${maps[29]}\n ${maps[31]}\n ${maps[33]}\n ${maps[35]}`, inline: true }
        )

        channel.send({ embeds: [mapsEmbed] })

    }
}
