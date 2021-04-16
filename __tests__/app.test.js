const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const User = require('../lib/models/User');

jest.mock('../lib/middleware/ensureAuth.js', () => (req, res, next) => {
  req.user = {
    userName: 'testUser',
    photoUrl: 'testUserPhoto.com'
  };

  next();
})

describe('posts routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  let users;
  beforeAll(async done => {
    const profile = {
      userName: 'testUser',
      photoUrl: 'testUserPhoto.com'
    }
    users = await User.insert(profile);
    
    return done;
  })

  it('posts a new tardypost', () => {
    const newPost = {
      photo_url: 'testphoto.com',
      caption: 'this is a test'
    }

    return request(app)
      .post('/api/v1/posts')
      .send(newPost)
      .then((res) => {
        expect(res.body).toEqual({
          ...newPost,
          id: '1',
          user_name: 'testUser'
        })
      })
  })

});
