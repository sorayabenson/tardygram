const User = require('../lib/models/User');
const Post = require('../lib/models/Post');
const Comment = require('../lib/models/Comment');

module.exports = async () => {
  const profile = {
    userName: 'testUser',
    photoUrl: 'testUserPhoto.com',
  }

  const profileTwo = {
    userName: 'anotherUser',
    photoUrl: 'anotherUserPhoto.com'
  }

  users = await User.insert(profile) 
  users = await User.insert(profileTwo)

  const postUserOne = {
    photoUrl: 'testphoto.com',
    caption: 'this is a test',
    userName: 'testUser',
  };

  const postUserTwo = {
    photoUrl: 'anothertestphoto.com',
    caption: 'this is a another test',
    userName: 'anotherUser',
  }

  posts = await Post.insert(postUserOne)
  posts = await Post.insert(postUserTwo)
  
  const comment = {
        comment: 'this is a comment!!',
        userName: 'testUser'
      
  }

  const comments = await Comment.insert(comment, 1);
};
