const axios = require('axios')

module.exports = {
    category: 'Testing',
    description: 'API Test',

    callback: ({ message , args }) => {

        const listen = args[0]
        if(listen === 's1') {

        axios.get('https://war-service-live.foxholeservices.com/api/worldconquest/war')
        .then((res) => {

            const f44 = res.data.conquestStartTime
            const f55 = res.data.conquestEndTime
            const f66 = res.data.resistanceStartTime

            const f4 = Math.round(res.data.conquestStartTime / 1000)
            const f5 = Math.round(res.data.conquestEndTime / 1000)
            const f6 = Math.round(res.data.resistanceStartTime / 1000)
            const f7 = res.data.requiredVictoryTowns

            if (!f4) {
                message.channel.send(`Conquest Start Time: ${f44}`)
            } else if (f4 != null) {
                message.channel.send(`Conquest Start Time: <t:${f4}:D>`)
            }
            if (!f5) {
                message.channel.send(`Conquest End Time: ${f55}`)
            } else if (f5 != null) {
                message.channel.send(`Conquest End Time: <t:${f5}:D>`)
            }
            if (!f6) {
                message.channel.send(`Resistance Start Time: ${f66}`)
            } else if (f6 != null) {
                message.channel.send(`Resistance Start Time: <t:${f6}:D>`)
            }
            message.channel.send(`Required Victory Towns: ${f7}`)
        })

        .catch((err) => {
            console.log('ERR:', err)
        })
        } else if (listen === 's2') {
            axios.get('https://war-service-live-2.foxholeservices.com/api/worldconquest/war')
            .then((res) => {

                const f44 = res.data.conquestStartTime
                const f55 = res.data.conquestEndTime
                const f66 = res.data.resistanceStartTime

                const f4 = Math.round(res.data.conquestStartTime / 1000)
                const f5 = Math.round(res.data.conquestEndTime / 1000)
                const f6 = Math.round(res.data.resistanceStartTime / 1000)
                const f7 = res.data.requiredVictoryTowns
    
                if (!f4) {
                    message.channel.send(`Conquest Start Time: ${f44}`)
                } else if (f4 != null) {
                    message.channel.send(`Conquest Start Time: <t:${f4}:D>`)
                }
                if (!f5) {
                    message.channel.send(`Conquest End Time: ${f55}`)
                } else if (f5 != null) {
                    message.channel.send(`Conquest End Time: <t:${f5}:D>`)
                }
                if (!f6) {
                    message.channel.send(`Resistance Start Time: ${f66}`)
                } else if (f6 != null) {
                    message.channel.send(`Resistance Start Time: <t:${f6}:D>`)
                }
                message.channel.send(`Required Victory Towns: ${f7}`)
            })
    
            .catch((err) => {
                console.log('ERR:', err)
            })
        }
    }
}