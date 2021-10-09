const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    category: 'Testing',
    description: 'API Test',

    callback: ({ args, channel }) => {

        const listen = args[0]

        if(listen === 'MarbanHollow'){
            axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${listen}`)
            .then((res) => {
                axios.get(`https://war-service-live-2.foxholeservices.com/api/worldconquest/warReport/${listen}`)
                .then((res2) => {
                    const fetch1 = res.data.totalEnlistments
                    const fetch2 = res.data.colonialCasualties
                    const fetch3 = res.data.wardenCasualties

                    const fetch11 = res2.data.totalEnlistments
                    const fetch22 = res2.data.colonialCasualties
                    const fetch33 = res2.data.wardenCasualties

                    const total_Enlistments = fetch1 + fetch11
                    const total_colonial_casuallties = fetch2 + fetch22
                    const total_warden_casuallties = fetch3 + fetch33

                    const MarbanHollowEmbed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(`Data On ${listen}`)
                    .setDescription('This Is Data Across Both Shards')
                    .addFields(
                        { name: 'Shard 1', value: `Enlistments: ${fetch1}\nColonial Casuallties: ${fetch2}\nWarden Casualties: ${fetch3}`, inline: true },
                        { name: 'Shard 2', value: `Enlistments: ${fetch11}\nColonial Casuallties: ${fetch22}\nWarden Casualties: ${fetch33}`, inline: true },
                        { name: 'Total', value: `Enlistments: ${total_Enlistments}\nColonial Casuallties: ${total_colonial_casuallties}\nWarden Casualties: ${total_warden_casuallties}`, inline: false },
                    )
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
                    const fetch1 = res.data.totalEnlistments
                    const fetch2 = res.data.colonialCasualties
                    const fetch3 = res.data.wardenCasualties

                    const fetch11 = res2.data.totalEnlistments
                    const fetch22 = res2.data.colonialCasualties
                    const fetch33 = res2.data.wardenCasualties

                    const total_Enlistments = fetch1 + fetch11
                    const total_colonial_casuallties = fetch2 + fetch22
                    const total_warden_casuallties = fetch3 + fetch33
                    
                    const NotMarbanHollowEmbed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(`Data On ${listen}`)
                    .setDescription('This Is Data Across Both Shards')
                    .addFields(
                        { name: 'Shard 1', value: `Enlistments: ${fetch1}\nColonial Casuallties: ${fetch2}\nWarden Casualties: ${fetch3}`, inline: true },
                        { name: 'Shard 2', value: `Enlistments: ${fetch11}\nColonial Casuallties: ${fetch22}\nWarden Casualties: ${fetch33}`, inline: true },
                        { name: 'Total', value: `Enlistments: ${total_Enlistments}\nColonial Casuallties: ${total_colonial_casuallties}\nWarden Casualties: ${total_warden_casuallties}`, inline: false },
                    )
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