import pg from 'postgres';

const sql = pg({
    host: process.env.DB_SERVER,
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});
