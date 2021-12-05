const mongoose = require('mongoose');


//mongoose.connect('mongodb://localhost:27017/101216670_assignment2', {useNewUrlParser: true},
mongoose.connect('mongodb+srv://JuanisPw:Juan@cluster0.scxn8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true},

(err) => {
    if (!err) {console.log('MongoDB Connection Succeeded')}
    else{ console.log('Error in DB Connection: ' + err)}
});

require('./employee.model')