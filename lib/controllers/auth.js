const { Router } = require('express');
const UserService = require('../services/UserService');

module.exports = Router()
    .get('/login', (req, res) => {
        res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URI}&scopes=read:user`)
    })

    .get('/login/callback', async (req, res, next) => {
        // UserService.create(req.query.code)
        // .then(res.send('hello!'))
        // .catch(next);
        try {
            const userData = await UserService.create(req.query.code);

            res.send(userData)
        } catch (err) {
            next(err)
        }
    });
        