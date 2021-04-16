const { Router } = require('express');
const ensureAuth = require('../middleware/ensureAuth');
const Post = require('../models/Post');

module.exports = Router().post('/', ensureAuth, (req, res, next) => {
  Post.insert({
    ...req.body,
    userName: req.user.userName,
  })
    .then((post) => res.send(post))
    .catch(next);
})  
.get('/:userName', ensureAuth, (req, res, next) => {
  Post.getAllPosts(req.params.userName)
    .then((posts) => res.send(posts))
    .catch(next);
})
.get('/:userName/:id', ensureAuth, (req, res, next) => {
  Post.getOnePost(req.params.userName, req.params.id)
    .then((post) => res.send(post))
    .catch(next);
})
.patch('/:id', ensureAuth, (req, res, next) => {
  Post.updateCaption(req.body.caption, req.params.id)
  .then((post) => res.send(post))
  .catch(next);
})
.delete('/:id', ensureAuth, (req, res, next) => {
  Post.deletePost(req.params.id)
  .then((post) => res.send(post))
  .catch(next);
})