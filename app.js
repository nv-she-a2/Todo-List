var express = require('express');
var todoController = require('./controllers/todocontroller');
const { urlencoded } = require('body-parser');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));
app.use(express.json());
app.use(urlencoded({extended: false}));
//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('you are listening to port 3000');

