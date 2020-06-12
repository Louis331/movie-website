if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

var global = {
    NODE_ENV: process.env.NODE_ENV,
    DB_KEY: process.env.DB_KEY,
    MOVIE_TABLE: process.env.MOVIE_TABLE,
    BOT_URL: process.env.BOT_URL,
    PASSWORD: process.env.PASSWORD,
    BLACK_LIST: process.env.BLACK_LIST
};

module.exports = global;