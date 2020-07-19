const mongoose = require('mongoose');
require('../db');
var Todo = mongoose.model('ToDo'); 

module.exports = function(app){
	app.get('/todo', function(req, res){
		Todo.find()
			.then(data => res.render('todo', {todos: data}))
			.catch(err => res.json(err))
	});

	app.post('/todo', function(req, res){
		const todo = new Todo(req.body);
		todo.save()
			.then(data => res.json(data))
			.catch(err => res.json(err))
	});

	app.delete('/todo/:item', function(req, res){
		var str = req.params.item.replace(/-/g, ' ');
		Todo.findOneAndDelete({'item': str})
			.then(data => res.json(data))
			.catch(err => res.json(err))
	});
	
	app.put('/todo/:item', function(req, res){
		var str = req.params.item.replace(/-/g, ' ');
		Todo.findOneAndUpdate({'item': str},req.body)
			.then(data => {
				res.json(data);})
			.catch(err => res.json(err))
	});
};