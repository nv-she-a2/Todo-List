// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
require('dotenv').config();
const url = 'mongodb://localhost:27017/todo_db' || process.env.MONGODB_URI;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to Database!");
});

const todoSchema = new mongoose.Schema({
  userId: String,
  done: Boolean,
  item: String
});

const ToDo = mongoose.model('ToDo', todoSchema);
