const Pool = require('pg').Pool
const env = require('dotenv').config();

const pool = new Pool({
    user: env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: 'todoapp'
})

module.exports = pool;