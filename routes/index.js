var express = require('express');
var router = express.Router();
var global = require('../global.js');
var movieList = require('../services/MovieList.js');

const table = global.MOVIE_TABLE

/* GET home page. */
router.get('/', async function(req, res, next) {
    setTimeout(async() => {
        let listOfMovies = await movieList.getAllMovies(table);
        listOfMovies = Object.values(listOfMovies).sort();
        res.render('index', { listOfMovs: listOfMovies })
    }, 200);
});

module.exports = router;