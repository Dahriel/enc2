let EventEmitter = require('events').EventEmitter;

let Twitter = require('twitter');

export default class LiveTwitter extends EventEmitter
{
    constructor(){
        super();

        let client = new Twitter({
            consumer_key: 'HxOWfh1MfI5EgSnnod59anTid',
            consumer_secret: '5Vvk71Dy2tVv9cp5ScART5YKeYMpKXzQgd2XVBmEY8aQfzvAst',
            access_token_key: '91244252-l0Y68vz162DcfitT1WeFJzL0cwRATbvkWyBqLhyZ7',
            access_token_secret: 'a9Oe318h4zWNYoiejxCljSN1PL9d8Uc5UebqBW7bGMMRk'
        });


        client.stream('statuses/filter', {track: 'serial killer'}, (stream) => {
            stream.on('data', (tweet)=> {
                this.ping(tweet);
            });

            stream.on('error', function(error) {
                throw error;
            });
        });

    }

    ping(text){
        this.emit('ping', text);
    }

}