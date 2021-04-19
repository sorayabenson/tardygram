const User = require('../lib/models/User');
const Post = require('../lib/models/Post');
const Comment = require('../lib/models/Comment');

module.exports = async () => {
  users = await User.insert({
    userName: 'testUser',
    photoUrl: 'testUserPhoto.com',
  }) 
  users = await User.insert({
    userName: 'anotherUser',
    photoUrl: 'anotherUserPhoto.com'
  })
  users = await User.insert({
    userName: 'thirdUser',
    photoUrl: 'thirdUserPhoto.com'
  })
  users = await User.insert({
    userName: 'fourthUser',
    photoUrl: 'fourthUserPhoto.com'
  })
  users = await User.insert({
    userName: 'fifthUser',
    photoUrl: 'fifthUserPhoto.com'
  })
  users = await User.insert({
    userName: 'sixthUser',
    photoUrl: 'sixthUserPhoto.com'
  })
  users = await User.insert({
    userName: 'seventhUser',
    photoUrl: 'seventhUserPhoto.com'
  })
  users = await User.insert({
    userName: 'eightUser',
    photoUrl: 'eightUserPhoto.com'
  })
  users = await User.insert({
    userName: 'ninthUser',
    photoUrl: 'ninthUserPhoto.com'
  })
  users = await User.insert({
    userName: 'tenthUser',
    photoUrl: 'tenthUserPhoto.com'
  })
  users = await User.insert({
    userName: 'eleventhUser',
    photoUrl: 'eleventhUserPhoto.com'
  })


  posts = await Post.insert({
    photoUrl: 'testphoto.com',
    caption: 'this is a test',
    userName: 'testUser',
  })
  posts = await Post.insert({
    photoUrl: 'test2photo.com',
    caption: 'this is a test',
    userName: 'testUser',
  })
  posts = await Post.insert({
    photoUrl: 'test3photo.com',
    caption: 'this is a test',
    userName: 'testUser',
  })
  posts = await Post.insert({
    photoUrl: 'anothertestphoto.com',
    caption: 'this is a another test',
    userName: 'anotherUser',
  })
  posts = await Post.insert({
    photoUrl: 'anothertestphoto.com',
    caption: 'this is a another test',
    userName: 'anotherUser',
  })
  posts = await Post.insert({
    photoUrl: 'anothertestphoto.com',
    caption: 'this is a another test',
    userName: 'thirdUser',
  })
  posts = await Post.insert({
    photoUrl: 'thirdtestphoto.com',
    caption: 'this is a third test',
    userName: 'thirdUser',
  })
  posts = await Post.insert({
    photoUrl: 'anothertestphoto.com',
    caption: 'this is a another test',
    userName: 'fourthUser',
  })
  posts = await Post.insert({
    photoUrl: 'fourthtestphoto.com',
    caption: 'this is a fourth test',
    userName: 'fourthUser',
  })
  posts = await Post.insert({
    photoUrl: 'anothertestphoto.com',
    caption: 'this is a another test',
    userName: 'fifthUser',
  })
  posts = await Post.insert({
    photoUrl: 'fifthtestphoto.com',
    caption: 'this is a fifth test',
    userName: 'fifthUser',
  })
  posts = await Post.insert({
    photoUrl: 'anothertestphoto.com',
    caption: 'this is a another test',
    userName: 'sixthUser',
  })
  posts = await Post.insert({
    photoUrl: 'sixthtestphoto.com',
    caption: 'this is a sixth test',
    userName: 'sixthUser',
  })
  posts = await Post.insert({
    photoUrl: 'anothertestphoto.com',
    caption: 'this is a another test',
    userName: 'seventhUser',
  })
  posts = await Post.insert({
    photoUrl: 'seventhtestphoto.com',
    caption: 'this is a seventh test',
    userName: 'seventhUser',
  })
  posts = await Post.insert({
    photoUrl: 'anothertestphoto.com',
    caption: 'this is a another test',
    userName: 'eightUser',
  })
  posts = await Post.insert({
    photoUrl: 'eighttestphoto.com',
    caption: 'this is a eight test',
    userName: 'eightUser',
  })
  posts = await Post.insert({
    photoUrl: 'anothertestphoto.com',
    caption: 'this is a another test',
    userName: 'ninthUser',
  })
  posts = await Post.insert({
    photoUrl: 'ninthtestphoto.com',
    caption: 'this is a ninth test',
    userName: 'ninthUser',
  })
  posts = await Post.insert({
    photoUrl: 'anothertestphoto.com',
    caption: 'this is a another test',
    userName: 'tenthUser',
  })
  posts = await Post.insert({
    photoUrl: 'tenthtestphoto.com',
    caption: 'this is a tenth test',
    userName: 'tenthUser',
  })
  posts = await Post.insert({
    photoUrl: 'anothertestphoto.com',
    caption: 'this is a another test',
    userName: 'eleventhUser',
  })
  
  const comment = {
        comment: 'this is a comment!!',
        userName: 'testUser'
      
  }

  const comments = await Comment.insert(comment, 1);
};
