import pg from 'postgres';

const sql = pg({
    host: 'database',
    port: 5432,
    database: 'Notes',
    username: 'roo',
    password: '15tAi5W2',
});
