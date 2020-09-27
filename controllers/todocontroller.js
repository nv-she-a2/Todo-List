const mongoose = require('mongoose');
require('../db');
var Todo = mongoose.model('ToDo'); 
var UUID;

function generateUUID() { 
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	  });
}

module.exports = function(app){
	app.get('/todo', function(req, res){
		UUID = req.cookies.userId;
		if(UUID){
			Todo.find({userId:UUID})
				.then(data => res.render('todo', {todos: data}))
				.catch(err => res.json(err))
		}
		else
		{
			UUID = generateUUID();
			res.cookie('userId',UUID);
			res.render('todo',{todos:{}});
		}
	});

	app.post('/todo', function(req, res){
		const todo = new Todo(req.body);
		console.log(UUID);
		todo.userId = UUID;
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