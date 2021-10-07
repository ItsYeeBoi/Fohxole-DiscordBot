module.exports = {
    category: 'Testing',
    description: 'Test',

    callback: ({ message, client }) => {
        message.reply('Calculating ping...').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
        })
    }
}
