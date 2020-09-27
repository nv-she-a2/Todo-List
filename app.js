var express = require('express');
const cookieParser = require('cookie-parser');
var todoController = require('./controllers/todocontroller');
const port = process.env.PORT || 3000;

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

//fire controllers
todoController(app);

//listen to port
app.listen(port);
console.log('you are listening to port 3000');

