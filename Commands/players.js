const axios = require('axios')

module.exports = {
    category: 'Testing',
    description: 'API Test',

    callback: ({ message }) => {

        axios.get(`https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=505460`)
        .then((res) => {
            const fetch1 = res.data.response.player_count

            message.reply(`Foxhole Player Count: ${fetch1}`)

        })
        .catch((err) => {
            console.log('ERR:', err)
        })
    },

}