var studentDB = require('./studentDB');
require('babel-polyfill');

var Student = require('../model/student');


//findAll studnets
/*
studentDB.findAll().then(function(data){
	console.log(data);
}).catch(function(err){
	console.log('has error',err);
})
*/


//add student
/*
var student = new Student(null,'zs','m','1996-01-01',null);

studentDB.save(student).then(function(data){
	console.log(data);
}).catch(function(err){
	console.log('has error',err);
})

*/


//update student
/*
var student = new Student(53,'mz','f','1996-03-01',null);

studentDB.update(student).then(function(data){
	console.log(data);
}).catch(function(err){
	console.log('has error',err);
})
*/


//search by keys
/*
studentDB.query('1').then(function(data){
	console.log(data);
}).catch(function(err){
	console.log('has error',err);
})
*/


//delete by ids

/*
var ids = [52];
studentDB.batchDelete(ids).then(function(data){
	console.log(data);
}).catch(function(err){
	console.log('has error',err);
})

*/


//search by id
/*
studentDB.findById(53).then(function(data){
	console.log(data);
}).catch(function(err){
	console.log('has error',err);
})
*/