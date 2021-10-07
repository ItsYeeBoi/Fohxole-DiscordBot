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
                    const fetch4 = res.data.dayOfWar
                    const fetch5 = res.data.version
        
                    message.channel.send(`Total Enlistments: ${fetch1}`)
                    message.channel.send(`Colonial Casuallties: ${fetch2}`)
                    message.channel.send(`Warden Casualties: ${fetch3}`)
                    message.channel.send(`Day Of War: ${fetch4}`)
                    message.channel.send(`Version: ${fetch5}`)
                })
                .catch((err) => {
                    console.log('ERR:', err)
                    message.channel.send('You Didnt Give The Correct Map Id')
                })
            } else{

        axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${listen2}Hex`)
        .then((res) => {
            const fetch1 = res.data.totalEnlistments
            const fetch2 = res.data.colonialCasualties
            const fetch3 = res.data.wardenCasualties
            const fetch4 = res.data.dayOfWar
            const fetch5 = res.data.version

            message.channel.send(`Total Enlistments: ${fetch1}`)
            message.channel.send(`Colonial Casuallties: ${fetch2}`)
            message.channel.send(`Warden Casualties: ${fetch3}`)
            message.channel.send(`Day Of War: ${fetch4}`)
            message.channel.send(`Version: ${fetch5}`)
        })
        .catch((err) => {
            console.log('ERR:', err)
            message.channel.send('You Didnt Give The Correct Map Id')
        })
    }
        } else if (listen === 's2' || listen === 'shard2') {
            if(listen2 === 'MarbanHollow'){

                axios.get(`https://war-service-live.foxholeservices.com/api/worldconquest/warReport/${listen2}`)
                .then((res) => {
                    const fetch1 = res.data.totalEnlistments
                    const fetch2 = res.data.colonialCasualties
                    const fetch3 = res.data.wardenCasualties
                    const fetch4 = res.data.dayOfWar
                    const fetch5 = res.data.version
        
                    message.channel.send(`Total Enlistments: ${fetch1}`)
                    message.channel.send(`Colonial Casuallties: ${fetch2}`)
                    message.channel.send(`Warden Casualties: ${fetch3}`)
                    message.channel.send(`Day Of War: ${fetch4}`)
                    message.channel.send(`Version: ${fetch5}`)
                })
                .catch((err) => {
                    console.log('ERR:', err)
                    message.channel.send('You Didnt Give The Correct Map Id')
                })
            } else {

            axios.get(`https://war-service-live-2.foxholeservices.com/api/worldconquest/warReport/${listen2}Hex`)
            .then((res) => {
                const fetch1 = res.data.totalEnlistments
                const fetch2 = res.data.colonialCasualties
                const fetch3 = res.data.wardenCasualties
                const fetch4 = res.data.dayOfWar
                const fetch5 = res.data.version
    
                message.channel.send(`Total Enlistments: ${fetch1}`)
                message.channel.send(`Colonial Casuallties: ${fetch2}`)
                message.channel.send(`Warden Casualties: ${fetch3}`)
                message.channel.send(`Day Of War: ${fetch4}`)
                message.channel.send(`Version: ${fetch5}`)
            })
            .catch((err) => {
                console.log('S2 ERR:', err)
                message.channel.send('You Didnt Give The Correct Map Id')
            })
        }
        }
    }
}