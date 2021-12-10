const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI || 'mongodb://localhost/mern';

const conectDataBase = mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

module.exports = conectDataBase;
