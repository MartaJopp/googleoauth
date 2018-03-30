//passport configuration file

const GoogleStrategy = require('passport-googl-oauth').OAuth2Strategy;

var CLIENT_ID = process.env.CLIENT_ID;
var CLIENT_SECRET = process.env.CLIENT_SECRET;
var CALL_BACK = process.env.CLIENT_SECRET

module.exports = (passport) => {
    passport.serializeUser((user, done) =>{
        done(null, user);
    });

    passport.deserializeUser((user, done) =>{
        done(null, user);
    })

    passport.user(new GoogleStrategy({
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: 'http://localhost:5000/auth/google/callback'
    }))
} //end exports