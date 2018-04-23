let express = require('express'),
    app=express(),
    path=require('path'),
    session=require('express-session'),
    bodyParser=require('body-parser'),
    mongoose=require('mongoose');
let products = require('./server/models/products.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client', 'eCommerce', 'dist')));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/Product');

mongoose.promise=global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error"));

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, () => {
    console.log("Running on port 8000");
})