const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    category: 'Testing',
    description: 'API Test',

    callback: ({ channel, message, client }) => {
        const author_tag = message.author.tag
        const author_id = message.author.id

        console.log(`${author_tag} (${author_id}) Used The Command -total`)
        const TotalCommand_Embed = new MessageEmbed()
        .setColor('#25059E')
        .setTitle(`The Command (-total) was used`)
        .setThumbnail()
        .addFields(
            { name: 'The Command Was Used By', value: `${author_tag} (${author_id})` },
        )
        .setTimestamp()

        client.channels.cache.get(process.env.COMMAND_LOGGER).send({embeds: [TotalCommand_Embed] })

        const maps = ["Acrithia", "AllodsBight", "AshFields", "BasinSionnach", "CallahansPassage", "CallumsCape", "ClansheadValley", "DeadLands", "DrownedVale", "EndlessShore", "FarranacCoast", "FishermansRow", "Godcrofts", "GreatMarch", "Heartlands", "HowlCounty", "Kalokai", "LinnMercy", "LochMor", "MarbanHollow", "MooringCounty", "MorgensCrossing", "NevishLine", "Oarbreaker", "Origin", "ReachingTrail", "RedRiver", "ShackledChasm", "SpeakingWoods", "Stonecradle", "TempestIsland", "Terminus", "TheFingers", "UmbralWildwood", "ViperPit", "WeatheredExpanse", "Westgate"]

        channel.send('Getting The Values...').then((resultMessage) => {

        axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[0]}Hex`)
        .then((res1) => {
            axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[1]}Hex`)
            .then((res2) => {
                axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[2]}Hex`)
                .then((res3) => {
                    axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[3]}Hex`)
                    .then((res4) => {
                        axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[4]}Hex`)
                        .then((res5) => {
                            axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[5]}Hex`)
                            .then((res6) => {
                                axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[6]}Hex`)
                                .then((res7) => {
                                    axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[7]}Hex`)
                                    .then((res8) => {
                                        axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[8]}Hex`)
                                        .then((res9) => {
                                            axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[9]}Hex`)
                                            .then((res10) => {
                                                axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[10]}Hex`)
                                                .then((res11) => {
                                                    axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[11]}Hex`)
                                                    .then((res12) => {
                                                        axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[12]}Hex`)
                                                        .then((res13) => {
                                                            axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[13]}Hex`)
                                                            .then((res14) => {
                                                                axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[14]}Hex`)
                                                                .then((res15) => {
                                                                    axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[15]}Hex`)
                                                                    .then((res16) => {
                                                                        axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[16]}Hex`)
                                                                        .then((res17) => {
                                                                            axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[17]}Hex`)
                                                                            .then((res18) => {
                                                                                axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[18]}Hex`)
                                                                                .then((res19) => {
                                                                                    axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[19]}`)
                                                                                    .then((res20) => {
                                                                                        axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[20]}Hex`)
                                                                                        .then((res21) => {
                                                                                            axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[21]}Hex`)
                                                                                            .then((res22) => {
                                                                                                axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[22]}Hex`)
                                                                                                .then((res23) => {
                                                                                                    axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[23]}Hex`)
                                                                                                    .then((res24) => {
                                                                                                        axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[24]}Hex`)
                                                                                                        .then((res25) => {
                                                                                                            axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[25]}Hex`)
                                                                                                            .then((res26) => {
                                                                                                                axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[26]}Hex`)
                                                                                                                .then((res27) => {
                                                                                                                    axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[27]}Hex`)
                                                                                                                    .then((res28) => {
                                                                                                                        axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[28]}Hex`)
                                                                                                                        .then((res29) => {
                                                                                                                            axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[29]}Hex`)
                                                                                                                            .then((res30) => {
                                                                                                                                axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[30]}Hex`)
                                                                                                                                .then((res31) => {
                                                                                                                                    axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[31]}Hex`)
                                                                                                                                    .then((res32) => {
                                                                                                                                        axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[32]}Hex`)
                                                                                                                                        .then((res33) => {
                                                                                                                                            axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[33]}Hex`)
                                                                                                                                            .then((res34) => {
                                                                                                                                                axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[34]}Hex`)
                                                                                                                                                .then((res35) => {
                                                                                                                                                    axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[35]}Hex`)
                                                                                                                                                    .then((res36) => {
                                                                                                                                                        axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${maps[36]}Hex`)
                                                                                                                                                        .then((res37) => {

                                                                                                                                                            const res1_1 = res1.data.totalEnlistments
                                                                                                                                                            const res1_2 = res1.data.colonialCasualties
                                                                                                                                                            const res1_3 = res1.data.wardenCasualties

                                                                                                                                                            const res2_1 = res2.data.totalEnlistments
                                                                                                                                                            const res2_2 = res2.data.colonialCasualties
                                                                                                                                                            const res2_3 = res2.data.wardenCasualties

                                                                                                                                                            const res3_1 = res3.data.totalEnlistments
                                                                                                                                                            const res3_2 = res3.data.colonialCasualties
                                                                                                                                                            const res3_3 = res3.data.wardenCasualties

                                                                                                                                                            const res4_1 = res4.data.totalEnlistments
                                                                                                                                                            const res4_2 = res4.data.colonialCasualties
                                                                                                                                                            const res4_3 = res4.data.wardenCasualties

                                                                                                                                                            const res5_1 = res5.data.totalEnlistments
                                                                                                                                                            const res5_2 = res5.data.colonialCasualties
                                                                                                                                                            const res5_3 = res5.data.wardenCasualties

                                                                                                                                                            const res6_1 = res6.data.totalEnlistments
                                                                                                                                                            const res6_2 = res6.data.colonialCasualties
                                                                                                                                                            const res6_3 = res6.data.wardenCasualties

                                                                                                                                                            const res7_1 = res7.data.totalEnlistments
                                                                                                                                                            const res7_2 = res7.data.colonialCasualties
                                                                                                                                                            const res7_3 = res7.data.wardenCasualties

                                                                                                                                                            const res8_1 = res8.data.totalEnlistments
                                                                                                                                                            const res8_2 = res8.data.colonialCasualties
                                                                                                                                                            const res8_3 = res8.data.wardenCasualties

                                                                                                                                                            const res9_1 = res9.data.totalEnlistments
                                                                                                                                                            const res9_2 = res9.data.colonialCasualties
                                                                                                                                                            const res9_3 = res9.data.wardenCasualties

                                                                                                                                                            const res10_1 = res10.data.totalEnlistments
                                                                                                                                                            const res10_2 = res10.data.colonialCasualties
                                                                                                                                                            const res10_3 = res10.data.wardenCasualties

                                                                                                                                                            const res11_1 = res11.data.totalEnlistments
                                                                                                                                                            const res11_2 = res11.data.colonialCasualties
                                                                                                                                                            const res11_3 = res11.data.wardenCasualties

                                                                                                                                                            const res12_1 = res12.data.totalEnlistments
                                                                                                                                                            const res12_2 = res12.data.colonialCasualties
                                                                                                                                                            const res12_3 = res12.data.wardenCasualties

                                                                                                                                                            const res13_1 = res13.data.totalEnlistments
                                                                                                                                                            const res13_2 = res13.data.colonialCasualties
                                                                                                                                                            const res13_3 = res13.data.wardenCasualties

                                                                                                                                                            const res14_1 = res14.data.totalEnlistments
                                                                                                                                                            const res14_2 = res14.data.colonialCasualties
                                                                                                                                                            const res14_3 = res14.data.wardenCasualties
                                                                                                                                                            
                                                                                                                                                            const res15_1 = res15.data.totalEnlistments
                                                                                                                                                            const res15_2 = res15.data.colonialCasualties
                                                                                                                                                            const res15_3 = res15.data.wardenCasualties

                                                                                                                                                            const res16_1 = res16.data.totalEnlistments
                                                                                                                                                            const res16_2 = res16.data.colonialCasualties
                                                                                                                                                            const res16_3 = res16.data.wardenCasualties

                                                                                                                                                            const res17_1 = res17.data.totalEnlistments
                                                                                                                                                            const res17_2 = res17.data.colonialCasualties
                                                                                                                                                            const res17_3 = res17.data.wardenCasualties

                                                                                                                                                            const res18_1 = res18.data.totalEnlistments
                                                                                                                                                            const res18_2 = res18.data.colonialCasualties
                                                                                                                                                            const res18_3 = res18.data.wardenCasualties

                                                                                                                                                            const res19_1 = res19.data.totalEnlistments
                                                                                                                                                            const res19_2 = res19.data.colonialCasualties
                                                                                                                                                            const res19_3 = res19.data.wardenCasualties

                                                                                                                                                            const res20_1 = res20.data.totalEnlistments
                                                                                                                                                            const res20_2 = res20.data.colonialCasualties
                                                                                                                                                            const res20_3 = res20.data.wardenCasualties

                                                                                                                                                            const res21_1 = res21.data.totalEnlistments
                                                                                                                                                            const res21_2 = res21.data.colonialCasualties
                                                                                                                                                            const res21_3 = res21.data.wardenCasualties

                                                                                                                                                            const res22_1 = res22.data.totalEnlistments
                                                                                                                                                            const res22_2 = res22.data.colonialCasualties
                                                                                                                                                            const res22_3 = res22.data.wardenCasualties

                                                                                                                                                            const res23_1 = res23.data.totalEnlistments
                                                                                                                                                            const res23_2 = res23.data.colonialCasualties
                                                                                                                                                            const res23_3 = res23.data.wardenCasualties
                                                                                                                                                            
                                                                                                                                                            const res24_1 = res24.data.totalEnlistments
                                                                                                                                                            const res24_2 = res24.data.colonialCasualties
                                                                                                                                                            const res24_3 = res24.data.wardenCasualties

                                                                                                                                                            const res25_1 = res25.data.totalEnlistments
                                                                                                                                                            const res25_2 = res25.data.colonialCasualties
                                                                                                                                                            const res25_3 = res25.data.wardenCasualties

                                                                                                                                                            const res26_1 = res26.data.totalEnlistments
                                                                                                                                                            const res26_2 = res26.data.colonialCasualties
                                                                                                                                                            const res26_3 = res26.data.wardenCasualties

                                                                                                                                                            const res27_1 = res27.data.totalEnlistments
                                                                                                                                                            const res27_2 = res27.data.colonialCasualties
                                                                                                                                                            const res27_3 = res27.data.wardenCasualties

                                                                                                                                                            const res28_1 = res28.data.totalEnlistments
                                                                                                                                                            const res28_2 = res28.data.colonialCasualties
                                                                                                                                                            const res28_3 = res28.data.wardenCasualties

                                                                                                                                                            const res29_1 = res29.data.totalEnlistments
                                                                                                                                                            const res29_2 = res29.data.colonialCasualties
                                                                                                                                                            const res29_3 = res29.data.wardenCasualties

                                                                                                                                                            const res30_1 = res30.data.totalEnlistments
                                                                                                                                                            const res30_2 = res30.data.colonialCasualties
                                                                                                                                                            const res30_3 = res30.data.wardenCasualties

                                                                                                                                                            const res31_1 = res31.data.totalEnlistments
                                                                                                                                                            const res31_2 = res31.data.colonialCasualties
                                                                                                                                                            const res31_3 = res31.data.wardenCasualties

                                                                                                                                                            const res32_1 = res32.data.totalEnlistments
                                                                                                                                                            const res32_2 = res32.data.colonialCasualties
                                                                                                                                                            const res32_3 = res32.data.wardenCasualties

                                                                                                                                                            const res33_1 = res33.data.totalEnlistments
                                                                                                                                                            const res33_2 = res33.data.colonialCasualties
                                                                                                                                                            const res33_3 = res33.data.wardenCasualties

                                                                                                                                                            const res34_1 = res34.data.totalEnlistments
                                                                                                                                                            const res34_2 = res34.data.colonialCasualties
                                                                                                                                                            const res34_3 = res34.data.wardenCasualties

                                                                                                                                                            const res35_1 = res35.data.totalEnlistments
                                                                                                                                                            const res35_2 = res35.data.colonialCasualties
                                                                                                                                                            const res35_3 = res35.data.wardenCasualties

                                                                                                                                                            const res36_1 = res36.data.totalEnlistments
                                                                                                                                                            const res36_2 = res36.data.colonialCasualties
                                                                                                                                                            const res36_3 = res36.data.wardenCasualties

                                                                                                                                                            const res37_1 = res37.data.totalEnlistments
                                                                                                                                                            const res37_2 = res37.data.colonialCasualties
                                                                                                                                                            const res37_3 = res37.data.wardenCasualties

                                                                                                                                                            const total_Enlistments = res1_1 + res2_1 + res3_1 + res4_1 + res5_1 + res6_1 + res7_1 + res8_1 + res9_1 + res10_1 + res11_1 + res12_1 + res13_1 + res14_1 + res15_1 + res16_1 + res17_1 + res18_1 + res19_1 + res20_1 + res21_1 + res22_1 + res23_1 + res24_1 + res25_1 + res26_1 + res27_1 + res28_1 + res29_1 + res30_1 + res31_1 + res32_1 + res33_1 + res34_1 + res35_1 + res36_1 + res37_1
                                                                                                                                                            const total_colonialCasualties = res1_2 + res2_2 + res3_2 + res4_2 + res5_2 + res6_2 + res7_2 + res8_2 + res9_2 + res10_2 + res11_2 + res12_2 + res13_2 + res14_2 + res15_2 + res16_2 + res17_2 + res18_2 + res19_2 + res20_2 + res21_2 + res22_2 + res23_2 + res24_2 + res25_2 + res26_2 + res27_2 + res28_2 + res29_2 + res30_2 + res31_2 + res32_2 + res33_2 + res34_2 + res35_2 + res36_2 + res37_2
                                                                                                                                                            const total_wardenCasualties = res1_3 + res2_3 + res3_3 + res4_3 + res5_3 + res6_3 + res7_3 + res8_3 + res9_3 + res10_3 + res11_3 + res12_3 + res13_3 + res14_3 + res15_3 + res16_3 + res17_3 + res18_3 + res19_3 + res20_3 + res21_3 + res22_3 + res23_3 + res24_3 + res25_3 + res26_3 + res27_3 + res28_3 + res29_3 + res30_3 + res31_3 + res32_3 + res33_3 + res34_3 + res35_3 + res36_3 + res37_3
                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                            const ValuesEmbed = new MessageEmbed()
                                                                                                                                                            .setColor('#0099ff')
                                                                                                                                                            .setTitle(`Total Enlistments And Casualties`)
                                                                                                                                                            .setDescription('This Is Data For Shard 1')
                                                                                                                                                            .addFields(
                                                                                                                                                                { name: `Returned Values`, value: `Total Enlistments: \`${total_Enlistments}\`\nTotal Colonial Casualties: \`${total_colonialCasualties}\`\nTotal Warden Casualties: \`${total_wardenCasualties}\`` }
                                                                                                                                                            )
                                                                                                                                                            .setTimestamp()

                                                                                                                                                            channel.send({ embeds: [ValuesEmbed] })
                                                                                                                                                                

                                                                                                                                                            resultMessage.delete()
                                                                                                                                                            })
                                                                                                                                                        })
                                                                                                                                                    })
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        })
                                                                                                                                    })
                                                                                                                                })
                                                                                                                            })
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
            .catch((err) => {
                console.log('Total ERR:', err)
            })
        })
    }
}