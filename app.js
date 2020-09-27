const path = require('path');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const express = require('express');

const app = express();

// set global configuration value
app.engine('handlebars', expressHbs());
app.set('view engine', 'handlebars');
app.set('views','views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// add parse middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    // res.status(404).send('<h1>Page not found</h1>');
});


app.listen(3000);