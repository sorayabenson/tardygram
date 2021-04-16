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
};
