const DiscordRPC = require('discord-rpc');
const client = new DiscordRPC.Client({ transport: 'ipc' }); 
require('dotenv').config(); 

(async () => {
    client.on('ready', async () => {
        await client.setActivity({
            details: "In Game", 
             buttons: [{
                    label: #Text,
                    url: #url
                },
                {
                    label: #secondtext,
                    url: #secoundurl
                }
            ],
            timestamps: {
                start: rpc.timestamps.useTimer ? Number(rpc.timestamps.startTimestamp) || Number(startTimestamp) : undefined,
                end: rpc.timestamps.useTimer ? Number(rpc.timestamps.endTimestamp) : undefined
            },
            instance: true
        }
        }).catch(err => console.log(err))
        console.log("Ready!");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error);
})();
