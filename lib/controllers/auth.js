const { Router } = require('express');
const ensureAuth = require('../middleware/ensureAuth');
const UserService = require('../services/UserService');
const { sign } = require('../utils/jwt');

const oneDayInMilliseconds = 1000 * 60 * 60 * 24;

module.exports = Router()
    .get('/login', (req, res) => {
        res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URI}&scopes=read:user`)
    })

    .get('/login/callback', async (req, res, next) => {
        UserService.create(req.query.code)
        .then((user) => {
            res.cookie('session', sign(user), {
                httpOnly: true,
                maxAge: oneDayInMilliseconds,
                sameSite: 'strict',
            })
            // for frontend
            // res.redirect('/');
        })
        .catch(next);

        // try {
        //     const userData = await UserService.create(req.query.code);

        //     res.send(userData)
        // } catch (err) {
        //     next(err)
        // }
    })
    
    .get('/verify', ensureAuth, (req, res, next) => {
        res.send(req.user);
    });
