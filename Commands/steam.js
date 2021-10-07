const axios = require('axios')

module.exports = {
    category: 'Testing',
    description: 'API Test',

    expectedArgs: 'AppID',
    minArgs: '1',
    maxArgs: '1',
    SyntaxError: 'Please specify the appid',

    callback: ({ message, args }) => {

        const listen = parseFloat(args[0])

        console.log(listen)

        axios.get(`https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${listen}`)
        .then((res) => {
            const fetch1 = res.data.response.player_count

            console.log('RES:', fetch1)

            message.reply(`Foxhole Player Count: ${fetch1}`)

        })
        .catch((err) => {
            console.log('ERR:', err)
        })

        axios.get(`https://store.steampowered.com/api/appdetails/?appids=${listen}`)
        .then((res) => {
            const listen2 = parseFloat(args[0])

            const fetch2 = res.data.listen2.data.name

            console.log('RES2:', fetch2)
        })
        .catch((err) => {
            console.log('ERR2:', err)
        })
    },

}