const { Router } = require('express');
const User = require('../models/User');

module.exports = Router()
  .get('/prolific', (req, res, next) => {
    User.getProlific()
      .then((users) => res.send(users))
      .catch(next);
  })

//   .get('/:userName/:id', ensureAuth, (req, res, next) => {
//     Post.getOnePost(req.params.userName, req.params.id)
//       .then((post) => res.send(post))
//       .catch(next);
//   });
