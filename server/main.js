import {twitterRouter} from "./twitter/"
import * as fondation from "./fondation/"

let path = require("path");
let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
        clientID: '204367304555-6lfgcncar0fh573ahvgnmm7sdmk5j5qk.apps.googleusercontent.com',
        clientSecret: 'Ur0CBlF1huHZXAXciEM6DIQV',
        callbackURL: "http://127.0.0.1:3000/oauth2callback"
    },
    function (accessToken, refreshToken, profile, done) {
        console.log(profile);

        if(profile.id)
            return done(null, {
                id: profile.id,
                name: profile.name
            });
        else
            return done("Il n'y a pas d'identifiant.", null);
    }
));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.use("/", express.static(path.resolve('./dist/public')));

app.get('/auth/google',
    passport.authenticate('google', {scope: 'https://www.googleapis.com/auth/plus.login'}));

app.get('/oauth2callback',
    passport.authenticate('google', {failureRedirect: '/login'}),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

io.on('connection', function (socket) {
    socket.emit('news', {hello: 'world'});
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

server.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    fondation.log.info('Example app listening at http://%s:%s', host, port);
});