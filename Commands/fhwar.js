const axios = require('axios')

module.exports = {
    category: 'Testing',
    description: 'API Test',

    callback: ({ message , args }) => {

        const listen = args[0]
        if(listen === 's1') {

        axios.get('https://war-service-live.foxholeservices.com/api/worldconquest/war')
        .then((res) => {
            const f1 = res.data.warId
            const f2 = res.data.warNumber
            const f3 = res.data.winner
            const f4 = Math.round(res.data.conquestStartTime / 1000)
            const f5 = res.data.conquestEndTime
            const f6 = res.data.resistanceStartTime
            const f7 = res.data.requiredVictoryTowns

            console.log(f4)

            message.channel.send(`WarId: ${f1}`)
            message.channel.send(`WarNumber: ${f2}`)
            message.channel.send(`Winner: ${f3}`)
            message.channel.send(`Conquest Start Time: <t:${f4}:D>`)
            message.channel.send(`Conquest End Time: ${f5}`)
            message.channel.send(`Resistance Start Time: ${f6}`)
            message.channel.send(`Required Victory Towns: ${f7}`)

        })

        .catch((err) => {
            console.log('ERR:', err)
        })
        } else if (listen === 's2') {
            axios.get('https://war-service-live-2.foxholeservices.com/api/worldconquest/war')
            .then((res) => {
                const f1 = res.data.warId
                const f2 = res.data.warNumber
                const f3 = res.data.winner
                const f4 = res.data.conquestStartTime
                const f5 = res.data.conquestEndTime
                const f6 = res.data.resistanceStartTime
                const f7 = res.data.requiredVictoryTowns

                message.channel.send(`WarId: ${f1}`)
                message.channel.send(`WarNumber: ${f2}`)
                message.channel.send(`Winner: ${f3}`)
                message.channel.send(`Conquest Start Time: ${f4}`)
                message.channel.send(`Conquest End Time: ${f5}`)
                message.channel.send(`Resistance Start Time: ${f6}`)
                message.channel.send(`Required Victory Towns: ${f7}`)
    
            })
    
            .catch((err) => {
                console.log('ERR:', err)
            })
        }
    }
}