//const UserModel = require('../models/userSchema.js');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('../config/index.js');

const FACEBOOK_CLIENT_ID = config.FACEBOOK_CLIENT_ID;
const FACEBOOK_CLIENT_SECRET = config.FACEBOOK_CLIENT_SECRET;

passport.serializeUser((user, cb) => {
  cb(null, user);
});
 
passport.deserializeUser((obj, cb) => {
  cb(null, obj)
});

passport.use(new FacebookStrategy({
  clientID: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_CLIENT_SECRET,
  callbackURL: 'http://localhost:8080/user/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'photos', 'emails'],
  scope: ['email']
}, async function (accessToken, refreshToken, userProfile, done) {
    return done(null, userProfile);
}));

module.exports = passport