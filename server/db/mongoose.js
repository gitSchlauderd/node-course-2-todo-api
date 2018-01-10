var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
//use these 2 lines to connect to server + set up mongoose promises

module.exports = {mongoose};
