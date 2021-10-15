const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    category: 'Testing',
    description: 'API Test',

    callback: ({ args, channel, message, client }) => {
        const author_tag = message.author.tag
        const author_id = message.author.id

        console.log(`${author_tag} (${author_id}) Used The Command -mstats`)
        const MstatsCommand_Embed = new MessageEmbed()
        .setColor('#25059E')
        .setTitle(`The Command (-mstats) was used`)
        .setThumbnail()
        .addFields(
            { name: 'The Command Was Used By', value: `${author_tag} (${author_id})` },
        )
        .setTimestamp()

        client.channels.cache.get(process.env.COMMAND_LOGGER).send({embeds: [MstatsCommand_Embed] })

        const listen = args[0]

        if(listen === 'MarbanHollow'){
            axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${listen}`)
            .then((res) => {
                axios.get(`https://war-service-live-2.foxholeservices.com/api/worldconquest/warReport/${listen}`)
                .then((res2) => {
                    const shard1_Enlistments = res.data.totalEnlistments
                    const shard1_colonialCasualties = res.data.colonialCasualties
                    const shard1_wardenCasualties = res.data.wardenCasualties

                    const shard2_Enlistments = res2.data.totalEnlistments
                    const shard2_colonialCasualties = res2.data.colonialCasualties
                    const shard2_wardenCasualties = res2.data.wardenCasualties

                    const total_Enlistments = shard1_Enlistments + shard2_Enlistments
                    const total_colonialcasuallties = shard1_colonialCasualties + shard2_colonialCasualties
                    const total_wardencasuallties = shard1_wardenCasualties + shard2_wardenCasualties

                    const MarbanHollowEmbed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(`Data On ${listen}`)
                    .setDescription('This Is Data Across Both Shards')
                    .addFields(
                        { name: 'Shard 1', value: `Enlistments: \`${shard1_Enlistments}\`\nColonial Casuallties: \`${shard1_colonialCasualties}\`\nWarden Casualties: \`${shard1_wardenCasualties}\``, inline: true },
                        { name: 'Shard 2', value: `Enlistments: \`${shard2_Enlistments}\`\nColonial Casuallties: \`${shard2_colonialCasualties}\`\nWarden Casualties: \`${shard2_wardenCasualties}\``, inline: true },
                        { name: 'Total', value: `Enlistments: \`${total_Enlistments}\`\nColonial Casuallties: \`${total_colonialcasuallties}\`\nWarden Casualties: \`${total_wardencasuallties}\``, inline: false },
                    )
                    .setTimestamp()
                        channel.send({ embeds: [MarbanHollowEmbed] })   
                })
                .catch((err) => {
                    console.log('Mstats ERR:', err)
                    channel.send("You Didn't Provide A Map Or The Map Name Was Incorrect")
                })
            })
            .catch((err) => {
                console.log('Mstats ERR:', err)
                channel.send("You Didn't Provide A Map Or The Map Name Was Incorrect")
            })
        } else if (listen != 'MarbanHollow') {
            axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${listen}Hex`)
            .then((res) => {
                axios.get(`https://war-service-live-2.foxholeservices.com/api/worldconquest/warReport/${listen}Hex`)
                .then((res2) => {
                    const shard1_Enlistments = res.data.totalEnlistments
                    const shard1_colonialCasualties = res.data.colonialCasualties
                    const shard1_wardenCasualties = res.data.wardenCasualties

                    const shard2_Enlistments = res2.data.totalEnlistments
                    const shard2_colonialCasualties = res2.data.colonialCasualties
                    const shard2_wardenCasualties = res2.data.wardenCasualties

                    const total_Enlistments = shard1_Enlistments + shard2_Enlistments
                    const total_colonialcasuallties = shard1_colonialCasualties + shard2_colonialCasualties
                    const total_wardencasuallties = shard1_wardenCasualties + shard2_wardenCasualties
                    
                    const NotMarbanHollowEmbed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(`Data On ${listen}`)
                    .setDescription('This Is Data Across Both Shards')
                    .addFields(
                        { name: 'Shard 1', value: `Enlistments: \`${shard1_Enlistments}\`\nColonial Casuallties: \`${shard1_colonialCasualties}\`\nWarden Casualties: \`${shard1_wardenCasualties}\``, inline: true },
                        { name: 'Shard 2', value: `Enlistments: \`${shard2_Enlistments}\`\nColonial Casuallties: \`${shard2_colonialCasualties}\`\nWarden Casualties: \`${shard2_wardenCasualties}\``, inline: true },
                        { name: 'Total', value: `Enlistments: \`${total_Enlistments}\`\nColonial Casuallties: \`${total_colonialcasuallties}\`\nWarden Casualties: \`${total_wardencasuallties}\``, inline: false },
                    )
                    .setTimestamp()
                        channel.send({ embeds: [NotMarbanHollowEmbed] })   
                })
                .catch((err) => {
                    console.log('Mstats ERR:', err)
                    channel.send("You Didn't Provide A Map Or The Map Name Was Incorrect")
                })
            })
            .catch((err) => {
                console.log('Mstats ERR:', err)
                channel.send("You Didn't Provide A Map Or The Map Name Was Incorrect")
            })
        }
    }
}