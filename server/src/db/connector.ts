import mysql from 'mysql2';

const dbConnector = mysql.createPool({
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    user: process.env.DB_USER_ID!,
    password: process.env.DB_USER_PASSWORD!,
    database: process.env.DB_NAME!
});

export default dbConnector.promise();