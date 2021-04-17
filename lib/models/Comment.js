const pool = require('../utils/pool');

module.exports = class Comment {
    id;
    commentBy;
    post;
    comment;

    constructor(row) {
        this.id = row.id;
        this.commentBy = row.comment_by;
        this.post = row.post;
        this.comment = row.comment;
    }

    static async insert({ userName, comment }, postId) {
        const { rows } = await pool.query(
            `INSERT INTO comments (
                comment_by,
                post,
                comment)
                VALUES ($1, $2, $3)
                RETURNING *`, [userName, postId, comment]
        );
                return new Comment(rows[0]);
    }

}