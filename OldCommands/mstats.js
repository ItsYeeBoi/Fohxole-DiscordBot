const axios = require('axios')

module.exports = {
    category: 'Testing',
    description: 'API Test',

    callback: ({ message , args }) => {

        const listen = args[0]
        const listen2 = args[1]
        if(listen === 's1' || listen === 'shard1'){
            if(listen2 === 'MarbanHollow'){

                axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${listen2}`)
                .then((res) => {
                    const fetch1 = res.data.totalEnlistments
                    const fetch2 = res.data.colonialCasualties
                    const fetch3 = res.data.wardenCasualties
        
                    message.channel.send(`Total Enlistments: ${fetch1}`)
                    message.channel.send(`Colonial Casuallties: ${fetch2}`)
                    message.channel.send(`Warden Casualties: ${fetch3}`)
                })
                .catch((err) => {

                })
            } else if (listen === 's1' || listen === 'shard1') {

        axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${listen2}Hex`)
        .then((res) => {
            const fetch1 = res.data.totalEnlistments
            const fetch2 = res.data.colonialCasualties
            const fetch3 = res.data.wardenCasualties

            message.channel.send(`Total Enlistments: ${fetch1}`)
            message.channel.send(`Colonial Casuallties: ${fetch2}`)
            message.channel.send(`Warden Casualties: ${fetch3}`)
        })
        .catch((err) => {
            if (listen === 's1' || listen === 'shard1') {
                message.channel.send("You Selected Shard 1 But Didn't Enter A Map")
           } else {
                message.channel.send("You Didn't Provide A Map Or The Map Name Was Incorrect")
            }
        })
    }
        } else if (listen === 's2' || listen === 'shard2') {
            if(listen2 === 'MarbanHollow'){

                axios.get(`https://war-service-live-2.foxholeservices.com/api/worldconquest/warReport/${listen2}`)
                .then((res) => {
                    const fetch1 = res.data.totalEnlistments
                    const fetch2 = res.data.colonialCasualties
                    const fetch3 = res.data.wardenCasualties
        
                    message.channel.send(`Total Enlistments: ${fetch1}`)
                    message.channel.send(`Colonial Casuallties: ${fetch2}`)
                    message.channel.send(`Warden Casualties: ${fetch3}`)
                })
                .catch((err) => {

                })
            } else if (listen === 's2' || listen === 'shard2') {

            axios.get(`https://war-service-live-2.foxholeservices.com/api/worldconquest/warReport/${listen2}Hex`)
            .then((res) => {
                const fetch1 = res.data.totalEnlistments
                const fetch2 = res.data.colonialCasualties
                const fetch3 = res.data.wardenCasualties
    
                message.channel.send(`Total Enlistments: ${fetch1}`)
                message.channel.send(`Colonial Casuallties: ${fetch2}`)
                message.channel.send(`Warden Casualties: ${fetch3}`)
            })
            .catch((err) => {
                if (listen === 's2' || listen === 'shard2') {
                    message.channel.send("You Selected Shard 2 But Didn't Enter A Map")
               } else {
                    message.channel.send("You Didn't Provide A Map Or The Map Name Was Incorrect")
                }
            })
        }
        } else {
            message.channel.send('The Correct Usage Of The Command Is -mstats <s1 or s2> <mapname>')
        }
    }
}