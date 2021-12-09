const mongose = require('mongoose');

mongose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern');
