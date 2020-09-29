const mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({

    date: {
        type: String        
    },
    isChecked:{
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        required : 'title can\'t be empty'
    }

})

mongoose.model('Todotask',taskSchema);
