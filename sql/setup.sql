DROP TABLE IF EXISTS users, posts, comments CASCADE;

-- Figure out how to delete a post that has a comment with cascade??

CREATE TABLE users (
    github_username TEXT NOT NULL PRIMARY KEY,
    github_photo_url TEXT NOT NULL
);

CREATE TABLE posts (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_name TEXT NOT NULL REFERENCES users(github_username),
    photo_url TEXT NOT NULL,
    caption TEXT,
    tags TEXT[]
);

CREATE TABLE comments (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    comment_by TEXT NOT NULL REFERENCES users(github_username),
    post BIGINT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    comment TEXT NOT NULL
)