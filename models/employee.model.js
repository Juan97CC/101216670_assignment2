const mongoose = require('mongoose');
 
var employeeSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: 'This field is required'
    },
    lastname: {
        type: String,
        required: 'This field is required'
    },
    emailid: {
        type: String,
        required: 'This field is required'

    }
});

mongoose.model('Employee', employeeSchema)