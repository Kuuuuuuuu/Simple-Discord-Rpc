const DiscordRPC = require('discord-rpc');
const client = new DiscordRPC.Client({ transport: 'ipc' }); 
require('dotenv').config(); 

(async () => {
    client.on('ready', async () => {
        await client.setActivity({
            details: "Developing", 
            startTimestamp,
            instance: false,
        }).catch(err => console.log(err))
        console.log("Ready!");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); // Logging into our application.
})();
