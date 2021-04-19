const pool = require('../utils/pool');

module.exports = class Post {
  id;
  userName;
  photoUrl;
  caption;
  tags;
  comment;
  commentBy;

  constructor(row) {
    this.id = row.id;
    this.userName = row.user_name;
    this.photoUrl = row.photo_url;
    this.caption = row.caption;
    this.tags = row.tags;
    this.comment = row.comment;
    this.commentBy = row.comment_by;
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
          INNER JOIN comments
		        ON posts.id = comments.post
          WHERE github_username=$1
          AND posts.id=$2`,
      [userName, id]
    );
    return new Post(rows[0]);
  }
  static async updateCaption(caption, id) {
    const { rows } = await pool.query(
    `UPDATE posts
    SET caption=$1
    WHERE id=$2
    RETURNING *`,
    [
      caption,
      id
    ]);
    return new Post(rows[0]);
  }
  static async deletePost(id) {
    const { rows } = await pool.query(
      `DELETE FROM posts
      WHERE id=$1
      RETURNING *`,
      [id]);

      return new Post(rows[0]);
  }
  
};
