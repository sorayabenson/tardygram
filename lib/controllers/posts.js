const { Router } = require('express');
const ensureAuth = require('../middleware/ensureAuth');
const Post = require('../models/Post');

module.exports = Router()
.post('/', ensureAuth, (req, res, next) => {
    Post.insert({
        ...req.body,
        userName: req.user.userName
    })
    .then((post) => res.send(post))
    .catch(next);
})
    