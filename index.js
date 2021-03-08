var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
const config = require('./config.json');
client.on('ready', () => {
        client.request('SET_ACTIVITY', {
            pid: process.pid,

            activity: {
                details: config.text,

                assets: {
                    large_image: config.pic,
                    large_text: config.pictext
                },

                buttons: [{
                        label: config.button1text,
                        url: config.button1link
                    },
                    {
                        label: config.button2text,
                        url: config.button2link
                    }
                ]

            }
        })
    }),
    client.login({
        clientId: config.appid
    })