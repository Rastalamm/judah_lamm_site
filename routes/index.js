const express = require('express')
const router = express.Router()

router.get('/', (ignore, res) => {
    res.status(200).render("index.pug")
});

router.get('/schedule', (ignore, res) => {
    res.redirect('https://calendly.com/judah-lamm');
});

module.exports = router