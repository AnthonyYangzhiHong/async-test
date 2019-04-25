var async = require('async');

var q = async.queue(function(task, callback){
	console.log('hello' + task.name);
	callback();
}, 2);

q.drain = function(){
	console.log('all items have been processed');
};

q.push({name: 'foo'}, function(err){
	console.log('finished processing foo');
});

q.push({name: 'bar'}, function(err){
	console.log('finished processing bar');
});

q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err){
	console.log('finished processing item')
})