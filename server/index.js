require('./connection');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes/routes');

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/',routes);


//start server
app.listen(process.env.PORT, () => 
console.log(`Server started at port : ${process.env.PORT}\nRunning in ${process.env.NODE_ENV} mode`));