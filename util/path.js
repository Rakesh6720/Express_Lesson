const path = require('path');
// return the filename for the folder that holds the app.js doc
module.exports = path.dirname(process.mainModule.filename);