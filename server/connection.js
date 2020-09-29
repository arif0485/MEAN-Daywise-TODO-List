require('dotenv').config({ path: '.env' });

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },(err)=> {
    if(!err){
        console.log('Connection Succeeded with mongoDB');
    }else{
        console.log('Connection Failed :'+ JSON.stringify(err,undefined,2));
    }
})


require("./model/todoitem")