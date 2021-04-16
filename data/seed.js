const User = require('../lib/models/User');
const Post = require('../lib/models/Post');

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
};
