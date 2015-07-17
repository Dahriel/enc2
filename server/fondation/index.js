let util=require('util');

let bunyan = require('bunyan');

export let log = bunyan.createLogger({
    name: 'application',
    streams: [
        {
            level: 'info',
            stream: process.stdout
        },
        {
            level: 'error',
            path: './logs/error.log'
        }
    ]
});