require('dotenv').config();

module.exports = {
    'database': process.env.MYDATABASE,
    'user': process.env.MYUSER,
    'password': process.env.MYPASSWORD,
    'host': process.env.MYHOST,
    'dialect': process.env.MYDIALECT,
};