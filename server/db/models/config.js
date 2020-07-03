let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TrendSynergy', function (err, connection) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(connection);
    }
});