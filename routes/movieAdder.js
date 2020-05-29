var express = require('express');
var router = express.Router();
var global = require('../global.js');
var movieList = require('../services/MovieList.js');
const axios = require('axios');

/* GET home page. */
router.get('/', async function(req, res, next) {
    res.render('movieAdder');
});

router.post('/', async function(req, res, next) {
    let movie = req.body.movie
    let movieAdded = await movieList.addMovie(movie)

    if (!movieAdded) {
        res.render('movieAdder', { error: 'Movie already exists' });
    } else {
        response = await axios.post(global.BOT_URL, {
            movie: movie
        })
        return res.redirect('/');
    }
});

module.exports = router;