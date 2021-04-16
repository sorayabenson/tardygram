const pool = require('../utils/pool');

module.exports = class Post {
  id;
  userName;
  photoUrl;
  caption;
  tags;

  constructor(row) {
    this.id = row.id;
    this.userName = row.user_name;
    this.photoUrl = row.photo_url;
    this.caption = row.caption;
    this.tags = row.tags;
  }

  static async insert({ userName, photoUrl, caption, tags }) {
    const { rows } = await pool.query(
      `INSERT INTO posts (
                user_name,
                photo_url,
                caption,
                tags
            ) VALUES ($1, $2, $3, $4)
            RETURNING *`,
      [userName, photoUrl, caption, tags]
    );
    return new Post(rows[0]);
  }
  static async getAllPosts(userName) {
    const { rows } = await pool.query(
      `SELECT *
      FROM users
      INNER JOIN posts
      ON users.github_username = posts.user_name
      WHERE github_username=$1`,
      [userName]
    );
    return rows.map((row) => new Post(row));
  }
  static async getOnePost(userName, id) {
    const { rows } = await pool.query(
      `SELECT *
          FROM posts
          INNER JOIN users
          ON users.github_username = posts.user_name
          WHERE github_username=$1
          AND id=$2`,
      [userName, id]
    );
    return new Post(rows[0]);
  }
};
