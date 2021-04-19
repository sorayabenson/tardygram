const pool = require('../utils/pool');

module.exports = class User {
  userName;
  photoUrl;
  count;

  constructor(row) {
    this.userName = row.github_username;
    this.photoUrl = row.github_photo_url;
    this.count = row.count;
  }

  static async insert({ userName, photoUrl }) {
    const {
      rows,
    } = await pool.query(
      'INSERT INTO users (github_username, github_photo_url) VALUES ($1, $2) RETURNING *',
      [userName, photoUrl]
    );

    return new User(rows[0]);
  }
  static async findByUserName(userName) {
    const {
      rows,
    } = await pool.query('SELECT * FROM users WHERE github_username=$1', [
      userName,
    ]);

    if (rows.length < 1) return null;
    return new User(rows[0]);
  }
  static async updateUserPic(userName, photoUrl) {
    const {
      rows,
    } = await pool.query(
      `UPDATE users SET github_photo_url=$1 WHERE github_username=$2`,
      [photoUrl, userName]
    );
    return rows[0];
  }
  static async getProlific() {
    const {
      rows
    } = await pool.query(
    `SELECT github_username,
      github_photo_url,
      COUNT(posts.id)
      FROM users
    JOIN posts
      ON users.github_username = posts.user_name
    GROUP BY github_username
    ORDER BY COUNT DESC
    LIMIT 10`
    );
    return rows.map(row => new User(row))
  }

};
