//passport configuration file

const GoogleStrategy = require('passport-googl-oauth').OAuth2Strategy;

module.exports = (passport) => {
    passport.serializeUser((user, done) =>{
        done(null, user);
    });

} //end exports