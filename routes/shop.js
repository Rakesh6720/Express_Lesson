const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    // render is Express function that uses default template engine defined in app.js
    res.render('shop');
});

module.exports = router;