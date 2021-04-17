const { Router } = require('express');
const ensureAuth = require('../middleware/ensureAuth');
const Comment = require('../models/Comment');

module.exports = Router()
.post('/:postUserName/:postId', ensureAuth, (req, res, next) => {
    Comment.insert({
        ...req.body,
        userName: req.user.userName,
    }, req.params.postId)
    .then((comment) => res.send(comment))
    .catch(next);
})