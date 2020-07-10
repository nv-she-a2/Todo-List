var data = [{item: 'get milk'}, 
			{item: 'walk dog'}, 
			{item: 'read some algorithms'}] ;

module.exports = function(app){
	app.get('/todo', function(req, res){
 		res.render('todo', {todos: data});
	});

	app.post('/todo', function(req, res){
 		data.push(req.body);
 		res.json(data);
	});

	app.delete('/todo/:item', function(req, res){
 		data = data.filter(function(todo){
 			return todo.item.replace(/ /g, '-') !== req.params.item;
 		});
 		res.json(data);
	 });
	 
	app.put('/todo/:item', function(req, res){
		data.forEach(function(arr){
			if(arr.item.replace(/ /g, '-') === req.params.item)
			{
				arr.item = req.body.item;
			}
		});
		res.json(data);
   	});

};