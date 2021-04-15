const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const User = require('../lib/models/User');

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
    
    // token = signInData.body.token;

    console.log('users', users)
    // console.log('beforeAll', token);
    return done;
  })

  it('posts a new tardypost', () => {
    const newPost = {
      user_name: 'testUser',
      photo_url: 'testphoto.com',
      caption: 'this is a test'
    }

    return request(app)
      .post('/api/v1/auth/posts')
      .set('Authorization', token)
      .send(newPost)
      .then(console.log('test', token))
      .then((res) => {
        expect(res.body).toEqual({
          ...newPost,
          id: '1'
        })
      })
  })

});
