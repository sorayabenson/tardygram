const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const User = require('../lib/models/User');
const seed = require('../data/seed');

jest.mock('../lib/middleware/ensureAuth.js', () => (req, res, next) => {
  req.user = {
    userName: 'testUser',
    photoUrl: 'testUserPhoto.com',
  };

  next();
});

describe('posts routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  beforeEach(() => {
    return seed();
  });

  it('posts a new tardypost', () => {
    const newPost = {
      photoUrl: 'testphoto.com',
      caption: 'this is a test',
    };

    return request(app)
      .post('/api/v1/posts')
      .send(newPost)
      .then((res) => {
        expect(res.body).toEqual({
          ...newPost,
          id: '2',
          userName: 'testUser',
          tags: null,
        });
      });
  });

  it('returns all posts by a user', () => {
    return request(app)
    .get('/api/v1/posts/testUser')
    .then((res) => {
      expect(res.body).toEqual([{
        photoUrl: 'testphoto.com',
        caption: 'this is a test',
        userName: 'testUser',
        tags: null,
        id: '1',
      }])
    })
  })

  it('return a single post by its id', () => {
    return request(app)
    .get('/api/v1/posts/testUser/1')
    .then((res) => {
      expect(res.body).toEqual({
        photoUrl: 'testphoto.com',
        caption: 'this is a test',
        userName: 'testUser',
        tags: null,
        id: '1',
      })
    })
  })

  it('updates the caption of a post', () => {
    const updatedCaption = {
      caption: 'this is the updated caption'
    };

    return request(app)
      .patch('/api/v1/posts/1')
      .send(updatedCaption)
      .then((res) => {
        expect(res.body).toEqual({
          photoUrl: 'testphoto.com',
          caption: 'this is the updated caption',
          userName: 'testUser',
          tags: null,
          id: '1',
        })
      })
  })
});
