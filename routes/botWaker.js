var express = require('express');
var router = express.Router();
var global = require('../global.js');
const axios = require('axios');

/* GET home page. */
router.get('/', async function(req, res, next) {
    res.render('botWaker');
});

router.post('/', async function(req, res, next) {
    let password = req.body.password

    console.log(password)

    console.log(global.PASSWORD)

    if (password === global.PASSWORD) {
        axios.get(global.BOT_URL)
    }

    return res.redirect('/');
});

module.exports = router;