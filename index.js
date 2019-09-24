//filename : index.js

//import express
let express = require("express");

//import body parser
let bodyParser = require('body-parser');

//import mongoose
let mongoose = require('mongoose');

//import routes
let apiRoutes = require("./api-routes");

//initialize app
let app = express();

//configure body parser
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

//connect mongoose
mongoose.connect('mongodb://localhost/resthub');
var db = mongoose.connection;

//setup server
var port = process.env.PORT || 8100;
//send message
app.get('/', (req, res) => res.send('lalalalalal Selamat datang di Data Center Siswa Indonesia'));

//app apiroutes
app.use('/api', apiRoutes);

//launch app
app.listen(port, function(){
    console.log("Running restHub on port "+ port);
})
