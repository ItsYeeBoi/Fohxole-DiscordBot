const axios = require('axios');

const getPlayerCount = async () => {
    try {
        const resp = await axios.get('https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=505460');
        
        
            let total = resp;
            return total;
        

    } catch (err) {
        console.error(err);

    }
};

    module.exports.getPlayerCount = getPlayerCount;
