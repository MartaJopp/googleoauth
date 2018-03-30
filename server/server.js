const express = require('express'),
app = express(),
passport = require('passport'),
auth = require ('./auth'),
cookieParser = require('cookie-parser'),
cookieSession = require('cookie-session');

/* dotenv fetches credentials stored in .env file*/
require('dotenv').config();

var COOKIE_KEY = process.env.COOKIE_KEY;

auth(passport);
app.use(passport.initialize());

//register cookiesession and parser as middleware
app.use(cookieSession({
    name: 'session',
    keys: [COOKIE_KEY]
}));

app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({
        status: 'session cookie not set'
    });
});

app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (req, res) => { }
);
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});