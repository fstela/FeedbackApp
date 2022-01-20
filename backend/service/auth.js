const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const config = require("../config.js");
const db = require("../models");

const User = db.user;


// jwt validation settings
const _strategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.auth.secret,
    issuer: config.auth.iss,
    audience: config.auth.audience
}

// define validation strategy
const strategy = new JwtStrategy(_strategyOptions, function(jwt_payload, done) {
    return User.findOne({where: {id: jwt_payload.sub} }).then(
        user => {
            return done(null, user)
        },
        (err) => done(err)
    ).catch(err => done(err));
});

// generate jwt token with & include user id
// https://www.npmjs.com/package/jsonwebtoken
const generateJwtToken = user => {
    return jwt.sign({
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
      }, 
      config.auth.secret,
      {
        issuer: config.auth.iss,
        audience: config.auth.audience
      });
}

// generate hash of passsword
const hashPassword = async (plainPassword) => {
    return await bcrypt.hash(plainPassword, config.auth.passwordSaltRounds);
}

// check if hash and password match
const isHashOfPassword = async (hash, plainPassword) => {
    return await bcrypt.compare(plainPassword, hash);
}

/** Get user based on request auth token */
const getCurrentUser = async (req) => {
    const jwt_payload = jwt.decode(req.headers.authorization.substring(7));
    return await User.findOne({where: {id: jwt_payload.sub}})
}

module.exports = {
    generateJwtToken,
    strategy,
    hashPassword,
    isHashOfPassword,
    getCurrentUser
}