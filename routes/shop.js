const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // render dynamic content through pug
    const products = adminData.products;
    // render is Express function that uses default template engine defined in app.js
    res.render('shop', {prods: products, docTitle: 'Shop'});
});

module.exports = router;