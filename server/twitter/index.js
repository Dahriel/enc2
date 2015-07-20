import LiveTwitter from './lib/live-twitter'

let express = require('express');
let router = express.Router();

let liveTwitter = new LiveTwitter();

let _socket = null;

liveTwitter.on('ping', (data)=>{
    if(_socket) _socket.emit('ping', data);
});

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function(req, res) {
    res.send('Birds home page');
});

router.get('/about', function(req, res) {
    res.send('About birds');
});

export let twitterRouter = router;

//Config socket io
export function setSocket(socket){
    _socket = socket;
};