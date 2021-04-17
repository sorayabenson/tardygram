const User = require('../lib/models/User');
const Post = require('../lib/models/Post');
const Comment = require('../lib/models/Comment');

module.exports = async () => {
  const profile = {
    userName: 'testUser',
    photoUrl: 'testUserPhoto.com',
  };
  const users = await User.insert(profile);

  const post = {
    photoUrl: 'testphoto.com',
    caption: 'this is a test',
    userName: 'testUser',
  };

  const posts = await Post.insert(post);
  
  const comment = {
        comment: 'this is a comment!!',
        userName: 'testUser'
      
  }

  const comments = await Comment.insert(comment, 1);
};
