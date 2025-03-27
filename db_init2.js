const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('movies.db');
const createCommentsTable = `
  CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    movie_id INTEGER,
    nickname TEXT,
    comment TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (movie_id) REFERENCES movies(id)
  );
`;

db.run(createCommentsTable);
